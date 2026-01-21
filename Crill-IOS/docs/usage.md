# Nutzung & Features

Diese Seite zeigt dir den typischen Workflow mit Crill-IOS – vom ersten `.ios` File bis zu Autovervollständigung, Validierung und hilfreichen Tipps.

## 1) Extension aktivieren (Dateityp)
Crill-IOS wird aktiv, sobald du eine Datei mit Endung **`.ios`** öffnest oder erstellst.

![Nutzungshilfe1](./img/usage_1.png)

**Tipp:** Wenn du unsicher bist, ob die Extension aktiv ist, drücke `Ctrl+Space` in einer `.ios` Datei – dann sollten Vorschläge erscheinen.

## 2) Autovervollständigung (kontextsensitiv)
- Tippe einen Befehl (z. B. `configure`) und öffne Vorschläge mit `Ctrl+Space` (oder warte kurz).
- Die Vorschläge sind **kontextsensitiv**: Sie passen sich dem aktuellen Modus an (z. B. `configure terminal`, `interface ...`, `router ...`).

![Nutzungshilfe2](./img/usage_2.png)

**Workflow-Beispiel:**
1. `configure terminal`
2. `interface GigabitEthernet 0/0`
3. Tippe `ip ` → Vorschläge zeigen dir typische Unterbefehle

## 3) Syntax-Highlighting
Crill-IOS hebt wichtige Bestandteile farblich hervor (Befehle, Parameter, Kommentare usw.), damit du schneller „siehst“, was du geschrieben hast.

![Nutzungshilfe3](./img/usage_3.png)

## 4) Validierung & Hinweise
- **Fehler, Warnungen und Infos** erscheinen in VS Codes **Problems**-Ansicht (`Ctrl+Shift+M`).
- **Hover** über markierte Stellen zeigt Details und Hinweise.

## 5) Best Practices & Empfehlungen
- Achte auf Hinweise im Editor und in der Problems-Ansicht.

## Nächste Schritte
Weiter geht es mit konkreten Konfigurationen in den [Beispielen](./examples.md).