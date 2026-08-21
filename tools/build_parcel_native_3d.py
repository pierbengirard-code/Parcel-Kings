import bpy,math,os
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'));T=os.path.join(ROOT,'assets','textures','pbr')
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def mat(name,metal=0,rough=.45):
 m=bpy.data.materials.new(name);m.use_nodes=True;n=m.node_tree.nodes;l=m.node_tree.links;b=n.get('Principled BSDF');b.inputs['Metallic'].default_value=metal
 key=name.lower();base=n.new('ShaderNodeTexImage');base.image=bpy.data.images.load(os.path.join(T,key+'_base.png'));r=n.new('ShaderNodeTexImage');r.image=bpy.data.images.load(os.path.join(T,key+'_rough.png'));r.image.colorspace_settings.name='Non-Color';nm=n.new('ShaderNodeTexImage');nm.image=bpy.data.images.load(os.path.join(T,key+'_normal.png'));nm.image.colorspace_settings.name='Non-Color';normal=n.new('ShaderNodeNormalMap');normal.inputs['Strength'].default_value=.5
 l.new(base.outputs['Color'],b.inputs['Base Color']);l.new(r.outputs['Color'],b.inputs['Roughness']);l.new(nm.outputs['Color'],normal.inputs['Color']);l.new(normal.outputs['Normal'],b.inputs['Normal']);return m
cardboard=mat('Carton',0,.72);tape=mat('Ruban',.03,.48);strap=mat('Sangle',.05,.58);metal=mat('Acier',.72,.28)
def box(n,loc,scale,m,bevel=.05,rot=(0,0,0)):
 bpy.ops.mesh.primitive_cube_add(location=loc,rotation=rot);o=bpy.context.object;o.name=n;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(m);q=o.modifiers.new('Usure des arêtes','BEVEL');q.width=bevel;q.segments=4;return o
def cyl(n,loc,r,d,m,rot=(math.pi/2,0,0),v=24):
 bpy.ops.mesh.primitive_cylinder_add(vertices=v,radius=r,depth=d,location=loc,rotation=rot);o=bpy.context.object;o.name=n;o.data.materials.append(m);return o
# Corps et panneaux légèrement irréguliers.
box('Corps carton',(0,0,0),(1.68,1.34,1.16),cardboard,.075)
for x in (-1.71,1.71): box('Épaisseur carton latérale',(x,0,-.06),(.032,1.17,.96),cardboard,.018)
box('Rabat supérieur',(0,0,1.19),(1.54,1.19,.045),cardboard,.018,rot=(0,0,.012))
box('Joint rabats',(0,0,1.245),(.035,1.18,.012),tape,.006)
box('Pli rabat gauche',(-.82,0,1.238),(.012,1.10,.01),tape,.004)
box('Pli rabat droit',(.82,0,1.238),(.012,1.10,.01),tape,.004)
# Rubans noirs croisés sur toutes les faces.
box('Ruban vertical avant',(0,-1.365,0),(.235,.025,1.13),tape,.008)
box('Ruban horizontal avant',(0,-1.37,-.42),(1.64,.028,.17),tape,.008,rot=(0,0,-.018))
box('Ruban vertical arrière',(0,1.365,0),(.235,.025,1.13),tape,.008)
box('Ruban horizontal arrière',(0,1.37,-.42),(1.64,.028,.17),tape,.008)
box('Ruban sommet long',(0,0,1.275),(.245,1.28,.025),tape,.007)
box('Ruban sommet large',(0,0,1.282),(1.62,.17,.028),tape,.007,rot=(0,0,.012))
# Sangle orange continue et boucle.
box('Sangle avant',(.62,-1.395,0),(.095,.018,1.17),strap,.012)
box('Sangle arrière',(.62,1.395,0),(.095,.018,1.17),strap,.012)
box('Sangle dessus',(.62,0,1.315),(.095,1.33,.018),strap,.01)
box('Sangle dessous',(.62,0,-1.19),(.095,1.33,.018),strap,.01)
box('Boucle extérieure',(.62,-.12,1.37),(.25,.19,.045),metal,.035);box('Ouverture boucle',(.62,-.14,1.415),(.14,.105,.035),tape,.025)
# Agrafes métalliques sur les coutures latérales.
for x in (-1.72,1.72):
 for z in (-.78,-.25,.30,.82):
  cyl('Agrafe',(x,-1.12,z),.014,.18,metal,rot=(0,math.pi/2,0),v=12)
# Coins réparés et pièces de ruban irrégulières.
for x,z,a in [(-1.28,.72,-.12),(1.18,-.82,.08),(-1.1,-.52,.05)]: box('Patch ruban',(x,-1.36,z),(.38,.025,.13),tape,.025,rot=(0,0,a))
box('Étiquette usée',(-.82,-1.402,.38),(.46,.012,.29),cardboard,.012,rot=(0,0,-.045))
for y in (-.16,-.05,.06,.17): box('Trace étiquette',(-.82+y,-1.42,.37),(.018,.006,.19),tape,.003)
bpy.ops.object.select_all(action='SELECT');bpy.ops.export_scene.gltf(filepath=os.path.join(ROOT,'assets','models','colis-perdu-premium.glb'),export_format='GLB',export_apply=True,export_materials='EXPORT',export_cameras=False,export_lights=False)
print('EXPORTED PARCEL PREMIUM')
