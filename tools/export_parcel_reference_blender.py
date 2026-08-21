import bpy,os,math
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'));TD=os.path.join(ROOT,'assets','textures','parcel-reference')
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
def plainmat(name,file):
 m=bpy.data.materials.new(name);m.use_nodes=True;m.use_backface_culling=False;n=m.node_tree.nodes;l=m.node_tree.links;b=n.get('Principled BSDF');t=n.new('ShaderNodeTexImage');t.image=bpy.data.images.load(os.path.join(TD,file));l.new(t.outputs['Color'],b.inputs['Base Color']);b.inputs['Roughness'].default_value=.68;return m
front=plainmat('Face avant réelle','front.png');side=plainmat('Côté réel','side.png');top=plainmat('Dessus réel','top.png')
card=bpy.data.materials.new('Tranche carton');card.diffuse_color=(.24,.12,.055,1);card.use_nodes=True;card.node_tree.nodes['Principled BSDF'].inputs['Base Color'].default_value=(.24,.12,.055,1);card.node_tree.nodes['Principled BSDF'].inputs['Roughness'].default_value=.82
def box():
 bpy.ops.mesh.primitive_cube_add();o=bpy.context.object;o.name='Volume complet du colis';o.scale=(1.62,1.24,1.18);bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(card);q=o.modifiers.new('Angles carton écrasés','BEVEL');q.width=.075;q.segments=3
def plane(name,loc,scale,rot,mat):
 bpy.ops.mesh.primitive_plane_add(size=2,location=loc,rotation=rot);o=bpy.context.object;o.name=name;o.scale=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(mat);s=o.modifiers.new('Épaisseur papier','SOLIDIFY');s.thickness=.012
box()
# Chaque face conserve les pixels de la référence ; les faces cachées reprennent
# les textures cohérentes afin que la rotation reste complète.
plane('Façade photographique',(0,-1.247,0),(1.55,1.10,1),(math.pi/2,0,0),front)
plane('Dos cohérent',(0,1.247,0),(1.55,1.10,1),(math.pi/2,0,math.pi),front)
plane('Côté gauche',(-1.627,0,0),(1.17,1.10,1),(math.pi/2,0,math.pi/2),side)
plane('Côté droit',(1.627,0,0),(1.17,1.10,1),(math.pi/2,0,-math.pi/2),side)
plane('Dessus photographique',(0,0,1.187),(1.55,1.17,1),(0,0,0),top)
plane('Dessous',(0,0,-1.187),(1.55,1.17,1),(math.pi,0,0),top)
bpy.ops.object.select_all(action='SELECT');bpy.ops.export_scene.gltf(filepath=os.path.join(ROOT,'assets','models','colis-perdu-reference.glb'),export_format='GLB',export_apply=True,export_materials='EXPORT',export_cameras=False,export_lights=False)
print('EXPORTED REFERENCE PARCEL')
