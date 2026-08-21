from PIL import Image, ImageFilter
import numpy as np, os

ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..','assets','textures','pbr'))
os.makedirs(ROOT,exist_ok=True); N=1024; rng=np.random.default_rng(47)

PALETTES={
 'Ivoire':((151,112,59),'speckle'),'Noir':((13,16,25),'plastic'),'Or':((184,98,16),'brushed'),
 'Acier':((116,132,148),'brushed'),'Bleu':((10,63,174),'plastic'),'Violet':((92,15,168),'lacquer'),
 'Rouge':((184,12,13),'lacquer'),'Vert':((16,135,57),'lacquer'),'Verre':((13,52,73),'glass'),
 'Bois':((92,31,9),'wood'),'Carton':((112,78,48),'speckle'),'Ruban':((20,18,17),'plastic'),'Sangle':((158,96,20),'brushed')}

def blur(a,r): return np.asarray(Image.fromarray(np.uint8(np.clip(a,0,255))).filter(ImageFilter.GaussianBlur(r)),dtype=np.float32)
def maps(name,base,kind):
 y,x=np.mgrid[0:N,0:N]; noise=rng.normal(0,1,(N,N)); broad=blur((noise-noise.min())/(noise.max()-noise.min())*255,18)/255-.5
 if kind=='brushed': h=.5+.18*np.sin(y*.42)+.10*noise
 elif kind=='wood': h=.5+.22*np.sin(x*.055+3*np.sin(y*.009))+ .08*broad
 elif kind=='speckle': h=.5+.12*broad+.035*noise
 elif kind=='glass': h=.5+.018*broad
 else: h=.5+.055*blur((noise-noise.min())/(noise.max()-noise.min())*255,2)/255
 h=np.clip(h,0,1); tint=np.array(base,dtype=float)[None,None,:]
 variation=(h-.5)[...,None]*(34 if kind!='glass' else 12)
 color=np.clip(tint+variation,0,255).astype('uint8')
 rough=np.clip((.38-h*.18 if kind in ('brushed','lacquer','glass') else .58-h*.14)*255,12,235).astype('uint8')
 gy,gx=np.gradient(h); normal=np.dstack((-gx*4,-gy*4,np.ones_like(h))); normal/=np.linalg.norm(normal,axis=2,keepdims=True); normal=((normal*.5+.5)*255).astype('uint8')
 Image.fromarray(color,'RGB').save(os.path.join(ROOT,name.lower()+ '_base.png'),optimize=True)
 Image.fromarray(rough,'L').save(os.path.join(ROOT,name.lower()+ '_rough.png'),optimize=True)
 Image.fromarray(normal,'RGB').save(os.path.join(ROOT,name.lower()+ '_normal.png'),optimize=True)

for n,(c,k) in PALETTES.items(): maps(n,c,k)
print('Generated',len(PALETTES)*3,'PBR textures at',ROOT)
