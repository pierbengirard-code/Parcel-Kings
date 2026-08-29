from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "assets" / "objects"
OUTPUT = ROOT / "assets" / "object-thumbs"
OUTPUT.mkdir(parents=True, exist_ok=True)

created = 0
for source in sorted(SOURCE.glob("*.png")):
    target = OUTPUT / f"{source.stem}.webp"
    if target.exists() and target.stat().st_mtime >= source.stat().st_mtime:
        continue
    with Image.open(source) as image:
        image = image.convert("RGBA")
        image.thumbnail((640, 640), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=86, method=3, exact=True)
    created += 1

print(f"{created} vignettes créées ou actualisées dans {OUTPUT}")
