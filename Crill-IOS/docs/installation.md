# Installation

## Voraussetzungen
- VSCode (empfohlen)

## Plugin installieren (empfohlen)
1. VSCode öffnen
2. In den Extensions-Tab wechseln (Symbolleiste links oder `Ctrl+Shift+X`)
3. Nach "Crillios" suchen
4. Extension installieren und VS Code ggf. neu laden

Hier geht es weiter zur [Nutzung](./usage.md) des Plugins.

## Installation zum Weiterentwickeln (für Developer)
Wenn du lokal am Plugin arbeitest:

- Projekt klonen und bauen (im `Crill-IOS-Scripting` Projekt):
  ```bash
  npm install
  npm run langium:generate
  npm run build
  ```

- In VS Code: "Run and Debug" (Symbolleiste links oder Ctrl+Shift+D) → "Run Extension"
    - Oder kurz: F5 drücken