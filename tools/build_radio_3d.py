import bpy, math, os
from mathutils import Vector

OUT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "assets", "models", "radio-transistor-native.glb"))
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)

def mat(name, color, metallic=0.0, rough=.35):
    m=bpy.data.materials.new(name)
    m.diffuse_color=(*color,1)
    m.use_nodes=True
    bs=m.node_tree.nodes.get('Principled BSDF')
    bs.inputs['Base Color'].default_value=(*color,1)
    bs.inputs['Metallic'].default_value=metallic
    bs.inputs['Roughness'].default_value=rough
    noise=m.node_tree.nodes.new('ShaderNodeTexNoise'); noise.inputs['Scale'].default_value=110; noise.inputs['Detail'].default_value=3.0
    bump=m.node_tree.nodes.new('ShaderNodeBump'); bump.inputs['Strength'].default_value=.045; bump.inputs['Distance'].default_value=.02
    m.node_tree.links.new(noise.outputs['Fac'],bump.inputs['Height']); m.node_tree.links.new(bump.outputs['Normal'],bs.inputs['Normal'])
    coat=bs.inputs.get('Coat Weight')
    if coat: coat.default_value=.14
    return m

cream=mat('Ivoire patiné',(0.46,.34,.19),0,.3)
gold=mat('Laiton',(0.52,.30,.08),.75,.2)
dark=mat('Grille sombre',(.035,.028,.022),.45,.28)
glass=mat('Verre cadran',(.14,.09,.035),.15,.12)
red=mat('Aiguille',(.8,.035,.018),.25,.24)

def cube(name, loc, scale, material, bevel=.08):
    bpy.ops.mesh.primitive_cube_add(location=loc)
    o=bpy.context.object; o.name=name; o.scale=scale
    bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)
    if bevel:
        mod=o.modifiers.new('Arêtes adoucies','BEVEL'); mod.width=bevel; mod.segments=3
    o.data.materials.append(material)
    return o

def cyl(name, loc, radius, depth, material, rotation=(math.pi/2,0,0), verts=48):
    bpy.ops.mesh.primitive_cylinder_add(vertices=verts, radius=radius, depth=depth, location=loc, rotation=rotation)
    o=bpy.context.object; o.name=name; o.data.materials.append(material)
    bevel=o.modifiers.new('Chanfrein','BEVEL'); bevel.width=.025; bevel.segments=2
    return o

body=cube('Boîtier radio',(0,0,0),(1.65,.42,1.12),cream,.16)
front=cube('Façade',(0,-.455,-.03),(1.48,.035,.93),gold,.055)
speaker=cube('Grille haut-parleur',(-.48,-.505,-.24),(.76,.025,.53),dark,.05)

# Rainures physiques de la grille.
for x in [i*.11-.77 for i in range(15)]:
    cube('Rainure grille',(x-.48,-.539,-.24),(.018,.012,.49),gold,.008)
for z in [i*.105-.43 for i in range(9)]:
    cube('Traverse grille',(-.48,-.542,z-.24),(.72,.01,.012),gold,.006)

# Fenêtre de fréquence et repères.
cube('Cadran',(0,-.535,.64),(1.15,.022,.19),glass,.035)
for x in [-.9,-.6,-.3,0,.3,.6,.9]:
    cube('Repère cadran',(x,-.565,.64),(.012,.009,.12),gold,.004)
cube('Aiguille rouge',(.18,-.58,.64),(.018,.008,.145),red,.004)

# Boutons concentriques à droite.
for z,r in [(.16,.22),(-.42,.17)]:
    cyl('Bouton', (1.10,-.59,z), r,.18,gold)
    cyl('Cabochon', (1.10,-.70,z), r*.58,.045,dark)

# Poignée supérieure, composée de trois volumes continus.
cube('Poignée haute',(0,.02,1.52),(.83,.16,.12),gold,.09)
cube('Montant poignée gauche',(-.93,.02,1.31),(.12,.16,.30),gold,.08)
cube('Montant poignée droit',(.93,.02,1.31),(.12,.16,.30),gold,.08)

# Pieds et antenne inclinée.
for x in (-1.05,1.05): cube('Pied',(x,.02,-1.19),(.28,.27,.08),dark,.04)
antenna=cyl('Antenne',(-1.34,.02,1.64),.035,1.75,gold,rotation=(0,.20,0),verts=24)
antenna.rotation_euler[1]=-.24
cyl('Embout antenne',(-1.55,.02,2.47),.07,.13,dark,rotation=(0,.20,0),verts=24)

# Petits détails de visserie.
for x in (-1.32,1.32):
    for z in (-.82,.82): cyl('Vis',(x,-.575,z),.035,.025,dark)

# Orientation trois-quarts initiale cohérente avec le jeu.
bpy.ops.object.empty_add(type='PLAIN_AXES', location=(0,0,.15))
root=bpy.context.object; root.name='Radio transistor'
for o in list(bpy.context.scene.objects):
    if o != root: o.parent=root
root.rotation_euler=(math.radians(-4),0,math.radians(-8))

bpy.context.scene.world.color=(.018,.014,.03)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(os.path.dirname(OUT),'radio-transistor-native.blend'))
bpy.ops.export_scene.gltf(filepath=OUT, export_format='GLB', export_apply=True, export_materials='EXPORT', export_cameras=False, export_lights=False)
print('EXPORTED',OUT)
