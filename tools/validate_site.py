from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
errors: list[str] = []
warnings: list[str] = []

def check(path: str, origin: str) -> None:
    clean = path.split("?", 1)[0].split("#", 1)[0]
    if not clean or clean.startswith(("http://", "https://", "data:", "#")):
        return
    target = ROOT / clean.lstrip("./")
    if not target.exists():
        errors.append(f"{origin}: fichier manquant : {clean}")

for html_name in ("index.html", "jeu.html", "404.html"):
    html = (ROOT / html_name).read_text(encoding="utf-8")
    for ref in re.findall(r'(?:src|href)=["\']([^"\']+)', html):
        check(ref, html_name)

for source_name in ("game.js", "catalog.js", "catalog-20260830.js", "achievements.js", "achievements.css", "styles.css", "landing.css", "sw.js"):
    source = (ROOT / source_name).read_text(encoding="utf-8")
    for ref in re.findall(r'["\'](assets/[^"\']+?\.(?:png|webp|svg|glb))[?"\']', source, re.I):
        check(ref, source_name)

objects = sorted((ROOT / "assets" / "objects").glob("*.png"))
thumbs = sorted((ROOT / "assets" / "object-thumbs").glob("*.webp"))
thumb_names = {path.stem for path in thumbs}
for obj in objects:
    if obj.stem not in thumb_names:
        errors.append(f"Vignette absente pour {obj.name}")
    if obj.stat().st_size > 4 * 1024 * 1024:
        warnings.append(f"Original lourd : {obj.name} ({obj.stat().st_size / 1024 / 1024:.1f} Mo)")

print(f"Objets HD : {len(objects)}")
print(f"Vignettes : {len(thumbs)}")
print(f"Poids des vignettes : {sum(p.stat().st_size for p in thumbs) / 1024 / 1024:.1f} Mo")
for warning in warnings:
    print(f"AVERTISSEMENT — {warning}")
for error in errors:
    print(f"ERREUR — {error}")

if errors:
    print(f"Validation échouée : {len(errors)} erreur(s).")
    sys.exit(1)
print("Validation réussie : le site est prêt à être publié.")
