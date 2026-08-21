import bpy, math, os

ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'))
OUT=os.path.join(ROOT,'assets','models','native'); os.makedirs(OUT,exist_ok=True)

def material(name,c,metal=0,rough=.3):
 m=bpy.data.materials.get(name) or bpy.data.materials.new(name); m.diffuse_color=(*c,1); m.use_nodes=True
 nodes=m.node_tree.nodes; links=m.node_tree.links; b=nodes.get('Principled BSDF'); b.inputs['Base Color'].default_value=(*c,1); b.inputs['Metallic'].default_value=metal; b.inputs['Roughness'].default_value=rough
 # Textures PBR 1024 px exportables dans glTF (contrairement aux nodes procéduraux).
 texroot=os.path.join(ROOT,'assets','textures','pbr'); key=name.lower()
 def image_node(suffix,noncolor=False):
  path=os.path.join(texroot,key+suffix); im=bpy.data.images.load(path,check_existing=True); n=nodes.new('ShaderNodeTexImage');n.image=im
  if noncolor: im.colorspace_settings.name='Non-Color'
  return n
 base=image_node('_base.png'); roughmap=image_node('_rough.png',True); normalmap=image_node('_normal.png',True); normal=nodes.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=.38
 links.new(base.outputs['Color'],b.inputs['Base Color']);links.new(roughmap.outputs['Color'],b.inputs['Roughness']);links.new(normalmap.outputs['Color'],normal.inputs['Color']);links.new(normal.outputs['Normal'],b.inputs['Normal'])
 coat=b.inputs.get('Coat Weight'); coat and setattr(coat,'default_value',.18 if rough<.3 else .08)
 if name=='Verre':
  trans=b.inputs.get('Transmission Weight'); trans and setattr(trans,'default_value',.36)
  b.inputs['Roughness'].default_value=.06
 return m

ivory=material('Ivoire',(.55,.42,.24),0,.28); dark=material('Noir',(.025,.03,.045),.25,.24); gold=material('Or',(.72,.38,.055),.8,.18)
silver=material('Acier',(.42,.48,.55),.85,.16); blue=material('Bleu',(.025,.22,.65),.35,.2); purple=material('Violet',(.32,.035,.62),.45,.17)
red=material('Rouge',(.7,.025,.025),.35,.2); green=material('Vert',(.04,.52,.22),.25,.22); glass=material('Verre',(.04,.18,.28),.3,.08); wood=material('Bois',(.30,.09,.025),0,.34)

def reset(): bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
def box(n,l,s,m=ivory,b=.08,rot=(0,0,0)):
 bpy.ops.mesh.primitive_cube_add(location=l,rotation=rot); o=bpy.context.object;o.name=n;o.scale=s;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m)
 if b: q=o.modifiers.new('Bords','BEVEL');q.width=b;q.segments=3
 return o
def cyl(n,l,r,d,m=gold,rot=(math.pi/2,0,0),v=48):
 bpy.ops.mesh.primitive_cylinder_add(vertices=v,radius=r,depth=d,location=l,rotation=rot);o=bpy.context.object;o.name=n;o.data.materials.append(m);q=o.modifiers.new('Chanfrein','BEVEL');q.width=.025;q.segments=2;return o
def sphere(n,l,s,m=ivory):
 bpy.ops.mesh.primitive_uv_sphere_add(segments=40,ring_count=20,location=l);o=bpy.context.object;o.name=n;o.scale=s;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m);return o
def torus(n,l,major,minor,m=gold,rot=(math.pi/2,0,0)):
 bpy.ops.mesh.primitive_torus_add(major_radius=major,minor_radius=minor,major_segments=48,minor_segments=12,location=l,rotation=rot);o=bpy.context.object;o.name=n;o.data.materials.append(m);return o
def disc(n,l,r,d,m=gold): return cyl(n,l,r,d,m)
def export(slug):
 # Les détails sont construits côté -Y ; demi-tour pour présenter la façade
 # selon l'orbite initiale commune de model-viewer.
 for o in bpy.context.scene.objects:
  if o.parent is None: o.rotation_euler[2]+=math.pi
 bpy.ops.object.select_all(action='SELECT'); bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,slug+'.glb'),export_format='GLB',export_apply=True,export_materials='EXPORT',export_cameras=False,export_lights=False)

def handheld(slug,proto=False):
 box('Boitier',(0,0,0),(1.15,.30,1.65),purple if proto else blue,.18);box('Ecran',(0,-.34,.48),(.82,.025,.64),glass,.06)
 for x,z in [(-.55,-.65),(-.78,-.65),(-.66,-.52),(-.66,-.78)]: box('Commande',(x,-.38,z),(.08,.035,.08),dark,.025)
 for x,z in [(.48,-.62),(.72,-.78)]: cyl('Bouton',(x,-.39,z),.13,.07,gold)
 box('Fente',(0,-.37,-1.25),(.45,.03,.055),dark,.02);export(slug)
def cassette():
 box('Cassette',(0,0,0),(1.65,.19,1.05),glass,.12);box('Etiquette',(0,-.23,.06),(1.30,.025,.65),ivory,.05)
 for x in (-.62,.62): torus('Bobine',(x,-.29,.12),.30,.075,silver);cyl('Moyeu',(x,-.30,.12),.13,.06,dark)
 for x in (-1.1,1.1): cyl('Trou',(x,-.29,-.68),.08,.05,dark)
 export('cassette-collector')
def controller():
 sphere('Corps gauche',(-.65,0,0),(.85,.34,.72),purple);sphere('Corps droit',(.65,0,0),(.85,.34,.72),purple);box('Centre',(0,0,.12),(.72,.30,.48),purple,.2)
 for x,z in [(-.67,-.12),(-.88,-.12),(-.775,.0),(-.775,-.24)]: box('Croix',(x,-.36,z),(.085,.04,.085),dark,.02)
 for x,z,m in [(.55,.05,red),(.82,-.1,gold),(.55,-.25,green),(.3,-.1,blue)]: cyl('Bouton',(x,-.38,z),.12,.07,m)
 export('manette-vintage')
def watch(slug,aviator=False):
 disc('Boitier',(0,0,0),1.05,.32,gold if aviator else silver);disc('Cadran',(0,-.19,0),.88,.05,dark if aviator else glass)
 for a in range(12):
  x=.71*math.sin(a*math.pi/6);z=.71*math.cos(a*math.pi/6);box('Index',(x,-.24,z),(.035,.025,.10),gold,.01,rot=(0,a*math.pi/6,0))
 box('Aiguille',(0,-.28,.22),(.035,.018,.45),red,.01);box('Bracelet haut',(0,.05,1.75),(.48,.12,.72),wood if aviator else dark,.08);box('Bracelet bas',(0,.05,-1.75),(.48,.12,.72),wood if aviator else dark,.08);export(slug)
def clock(stop=False):
 disc('Boitier',(0,0,0),1.18,.40,silver);disc('Cadran',(0,-.24,0),.98,.05,ivory)
 for a in range(12):
  x=.78*math.sin(a*math.pi/6);z=.78*math.cos(a*math.pi/6);sphere('Index',(x,-.30,z),(.045,.025,.045),dark)
 box('Aiguille',(0,-.33,.2),(.035,.018,.48),red,.01)
 if stop: cyl('Couronne',(0,0,1.38),.18,.30,gold,rot=(0,0,0))
 else:
  sphere('Cloche G',(-.72,0,1.02),(.47,.32,.30),gold);sphere('Cloche D',(.72,0,1.02),(.47,.32,.30),gold);box('Pied G',(-.65,0,-1.0),(.18,.2,.25),dark,.05);box('Pied D',(.65,0,-1.0),(.18,.2,.25),dark,.05)
 export('chronometre-suisse' if stop else 'reveil-annees-60')
def camera(slug,super8=False):
 box('Corps',(0,0,0),(1.45,.48,.92),dark,.15);box('Gainage',(0,-.48,0),(1.25,.05,.72),wood,.05);cyl('Objectif',(0,-.82,.05),.56,.72,silver);cyl('Lentille',(0,-1.20,.05),.42,.05,glass)
 if super8: sphere('Bobine',(-.48,.05,.88),(.68,.34,.68),silver);sphere('Bobine2',(.52,.05,.88),(.55,.30,.55),silver);box('Poignee',(.65,.1,-1.28),(.28,.32,.58),dark,.10)
 else: box('Viseur',(-.62,-.52,.68),(.25,.10,.16),glass,.03);cyl('Declencheur',(.72,-.3,1.02),.10,.12,gold,rot=(0,0,0))
 export(slug)
def lens():
 for y,r,m in [(0,1.0,dark),(-.45,.88,silver),(-.85,.72,dark),(-1.18,.62,glass)]: cyl('Anneau',(0,y,0),r,.42,m)
 export('objectif-japonais')
def record(slug,golden=False):
 disc('Disque',(0,0,0),1.45,.10,gold if golden else dark);disc('Label',(0,-.08,0),.38,.04,red if not golden else purple);torus('Sillon',(0,-.07,0),1.0,.018,silver if golden else purple);export(slug)
def guitar():
 sphere('Caisse basse',(0,0,-.55),(.75,.26,.85),wood);sphere('Caisse haute',(0,0,.15),(.58,.24,.63),wood);cyl('Rosace',(0,-.29,-.15),.22,.04,dark);box('Manche',(0,0,1.42),(.16,.12,.90),wood,.05);box('Tete',(0,0,2.33),(.28,.14,.35),gold,.08)
 for x in (-.08,-.03,.03,.08): box('Corde',(x,-.17,.82),(.008,.008,1.32),silver,.002)
 export('guitare-miniature-signee')
def lamp():
 cyl('Socle',(0,0,-1.15),.72,.22,gold,rot=(0,0,0));cyl('Tige',(0,0,0),.10,2.1,silver,rot=(0,0,0));bpy.ops.mesh.primitive_cone_add(vertices=64,radius1=1.05,radius2=.58,depth=1.15,location=(0,0,.85));bpy.context.object.data.materials.append(ivory);export('lampe-brocante')
def compass():
 disc('Boitier',(0,0,0),1.12,.28,gold);disc('Cadran',(0,-.18,0),.92,.05,ivory);box('Aiguille N',(0,-.25,.32),(.055,.02,.52),red,.01);box('Aiguille S',(0,-.25,-.32),(.055,.02,.52),dark,.01);torus('Anneau',(0,0,1.25),.22,.055,gold,rot=(0,0,0));export('boussole-ancienne')
def mask():
 sphere('Masque',(0,0,0),(1.0,.24,1.42),purple);sphere('Oeil G',(-.38,-.25,.30),(.24,.08,.15),dark);sphere('Oeil D',(.38,-.25,.30),(.24,.08,.15),dark);box('Nez',(0,-.38,-.05),(.16,.18,.42),gold,.08);box('Bouche',(0,-.28,-.72),(.42,.08,.07),red,.03);export('masque-ceremoniel')
def vase():
 bpy.ops.mesh.primitive_uv_sphere_add(segments=64,ring_count=32,location=(0,0,-.25));o=bpy.context.object;o.scale=(.9,.9,1.25);o.data.materials.append(blue);cyl('Col',(0,0,.95),.42,.75,blue,rot=(0,0,0));torus('Bord',(0,0,1.35),.43,.08,gold,rot=(0,0,0));export('vase-ebreche')
def card(): box('Carte',(0,0,0),(1.05,.10,1.48),blue,.10);box('Cadre',(0,-.13,0),(.88,.025,1.27),gold,.04);sphere('Portrait',(0,-.17,.18),(.48,.04,.58),red);export('carte-sportive')
def figure():
 sphere('Tete',(0,0,1.25),(.42,.38,.45),ivory);box('Torse',(0,0,.35),(.55,.30,.65),red,.12)
 for x in (-.72,.72): box('Bras',(x,0,.35),(.18,.22,.68),blue,.10,rot=(0,0,-x*.25))
 for x in (-.28,.28): box('Jambe',(x,0,-.75),(.20,.24,.62),dark,.09)
 box('Socle',(0,0,-1.48),(.95,.52,.14),gold,.08);export('figurine-scellee')

jobs=[('game-boy-color',lambda:handheld('game-boy-color')),('cassette-collector',cassette),('manette-vintage',controller),('montre-mecanique',lambda:watch('montre-mecanique')),('reveil-annees-60',lambda:clock(False)),('chronometre-suisse',lambda:clock(True)),('appareil-argentique',lambda:camera('appareil-argentique')),('camera-super-8',lambda:camera('camera-super-8',True)),('objectif-japonais',lens),('vinyle-premiere-edition',lambda:record('vinyle-premiere-edition')),('guitare-miniature-signee',guitar),('lampe-brocante',lamp),('boussole-ancienne',compass),('masque-ceremoniel',mask),('vase-ebreche',vase),('carte-sportive',card),('figurine-scellee',figure),('prototype-console-unique',lambda:handheld('prototype-console-unique',True)),('montre-aviateur-unique',lambda:watch('montre-aviateur-unique',True)),('disque-or-unique',lambda:record('disque-or-unique',True))]
for slug,fn in jobs:
 reset();fn();print('BUILT',slug)
print('DONE',len(jobs))
