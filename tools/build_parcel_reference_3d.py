import cv2, numpy as np, os, subprocess, sys
ROOT=os.path.abspath(os.path.join(os.path.dirname(__file__),'..'))
SRC=os.path.join(ROOT,'assets','boxes','colis-perdu.png'); TD=os.path.join(ROOT,'assets','textures','parcel-reference');os.makedirs(TD,exist_ok=True)
im=cv2.imread(SRC,cv2.IMREAD_UNCHANGED)
def face(name,pts,w,h):
 src=np.float32(pts);dst=np.float32([[0,0],[w-1,0],[w-1,h-1],[0,h-1]])
 out=cv2.warpPerspective(im,cv2.getPerspectiveTransform(src,dst),(w,h),flags=cv2.INTER_CUBIC,borderMode=cv2.BORDER_REPLICATE)
 cv2.imwrite(os.path.join(TD,name+'.png'),out)
# Quatre coins relevés directement sur l'image de référence 1254×1254.
face('top',[(89,381),(731,126),(1221,291),(537,560)],1024,700)
face('front',[(537,560),(1221,291),(1220,886),(537,1144)],1024,900)
face('side',[(35,382),(537,560),(537,1144),(53,954)],760,900)
print('REFERENCE FACES READY')
