"""Encode the approved transparent logo at web delivery sizes."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent.parent
source = Path(r'C:\Users\pirbeN\.codex\generated_images\01a01bed-ebad-7341-810b-7d1254edfc80\exec-c1bc0378-9079-44e2-8b23-7a33c7cf0d18.png')
im = Image.open(source).convert('RGBA')
assert im.getchannel('A').getextrema() == (0,255)
for size, name in [(320,'logo-box-or-bust.webp'), (512,'box-or-bust-512.png'), (64,'box-or-bust-64.png')]:
    resized = im.copy()
    resized.thumbnail((size,size),Image.Resampling.LANCZOS)
    dest = root/'assets'/'icons'/name
    if dest.suffix == '.png':
        canvas = Image.new('RGBA',(size,size))
        canvas.paste(resized,((size-resized.width)//2,(size-resized.height)//2))
        resized = canvas
    resized.save(dest, **({'quality':90,'method':6} if dest.suffix=='.webp' else {'optimize':True}))
    print(name, resized.size, dest.stat().st_size)
