from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "assets" / "objects" / "football-clubs"
TARGETS = ROOT / "assets" / "objects" / "football-villes"

SOURCE_BY_CITY = {
    "athenes": "aek-athenes",
    "bakou": "sabah-fk",
    "barcelone": "fc-barcelone",
    "birmingham": "aston-villa",
    "bodo": "bodo-glimt",
    "bratislava": "slovan-bratislava",
    "bruges": "club-brugge",
    "come": "como-1907",
    "donetsk": "shakhtar-donetsk",
    "dortmund": "borussia-dortmund",
    "eindhoven": "psv-eindhoven",
    "istanbul-est": "fenerbahce",
    "istanbul-nord": "galatasaray",
    "leipzig": "rb-leipzig",
    "lens": "rc-lens",
    "lille": "losc-lille",
    "linz": "lask",
    "lisbonne": "sporting-cp",
    "liverpool": "liverpool",
    "londres": "arsenal",
    "madrid-nord": "real-madrid",
    "madrid-est": "atletico-madrid",
    "manchester-est": "manchester-city",
    "manchester-ouest": "manchester-united",
    "milan": "inter-milan",
    "munich": "bayern-munich",
    "naples": "ssc-napoli",
    "porto": "fc-porto",
    "prague": "slavia-prague",
    "rome": "as-roma",
    "rotterdam": "feyenoord",
    "seville": "real-betis",
    "stavanger": "viking-fk",
    "stuttgart": "vfb-stuttgart",
    "villarreal": "villarreal",
}


for city, source_slug in SOURCE_BY_CITY.items():
    target_path = TARGETS / f"maillot-{city}.png"
    source_path = SOURCES / f"maillot-{source_slug}.png"
    target = Image.open(target_path).convert("RGBA")
    source = Image.open(source_path).convert("RGBA")
    if target.size != source.size:
        raise ValueError(f"Dimensions incompatibles : {target_path.name}")
    target.putalpha(source.getchannel("A"))
    target.save(target_path, optimize=True)

print(f"Transparence restaurée sur {len(SOURCE_BY_CITY)} maillots.")
