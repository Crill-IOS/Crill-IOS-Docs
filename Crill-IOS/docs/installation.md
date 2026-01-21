# Installation

## Voraussetzungen
- **VS Code** App ist installiert (empfohlen, aktuelle Version)

## Installation über den VS Code Marketplace (empfohlen)
1. VS Code öffnen
2. In den Extensions-Tab wechseln (`Ctrl+Shift+X`)
3. Nach **„Crill-IOS“** suchen
4. **Installieren** klicken und VS Code, wenn nötig, neu laden

## Nach der Installation: Aktivierung prüfen
Crill-IOS wird aktiv, sobald du eine Datei mit der Endung **`.ios`** öffnest oder erstellst.

- Erstelle z. B. `test.ios`
- Tippe `configure` und zeige Vorschläge mit `Ctrl+Space` an
- Falls du keine Vorschläge siehst: siehe **Troubleshooting** weiter unten

Hier geht es weiter zur [Nutzung](./usage.md) des Plugins.

## Update & Deinstallation
- **Update**: VS Code aktualisiert Extensions in der Regel automatisch. Alternativ im Extensions-Tab nach Updates suchen.
- **Deinstallation**: Extensions-Tab → Crill-IOS auswählen → **Uninstall**.

## Troubleshooting (häufige Probleme)
### Die Extension ist „installiert“, aber ich sehe keine Autovervollständigung
- Stelle sicher, dass deine Datei wirklich **`.ios`** heißt (nicht z. B. `.ios.txt`).
- Stelle sicher, dass die Extension installiert und aktiviert ist.

### Ich sehe Fehler/Warnungen nicht
- Öffne die Problems-Ansicht: `Ctrl+Shift+M`.
- Fahre mit der Maus über markierte Stellen (Hover), um Details zu sehen.

## Installation zum Weiterentwickeln (für Developer)
Wenn du lokal am Plugin arbeiten möchtest:

- Projekt klonen und bauen (im `Crill-IOS-Scripting` Projekt):
  ```bash
  npm install
  npm run langium:generate
  npm run build
  ```

- In VS Code: "Run and Debug" (Symbolleiste links oder Ctrl+Shift+D) → "Run Extension"
    - Oder kurz: F5 drücken