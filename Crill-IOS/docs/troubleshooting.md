# Troubleshooting

Hier findest du Lösungen für die häufigsten Probleme rund um Installation und Nutzung von Crill-IOS.

## Die Extension ist installiert, aber „passiert nichts“
**Symptom:** Keine Autovervollständigung, kein Highlighting, keine Hinweise.

**Checkliste:**
- Arbeite in einer Datei mit Endung **`.ios`** (z. B. `config.ios`).
- Öffne Vorschläge manuell mit `Ctrl+Space`.
- Starte VS Code einmal neu (Fenster schließen/öffnen).

## Keine Autovervollständigung / keine Vorschläge
**Mögliche Ursachen & Lösungen:**
- **Falscher Dateiname**: Prüfe, ob die Datei wirklich `.ios` heißt (nicht `.ios.txt`).
- **Suggestions deaktiviert**: In VS Code Settings nach „Quick Suggestions“ suchen und aktivieren, oder immer `Ctrl+Space` nutzen.

## Syntax-Highlighting fehlt
**Mögliche Ursachen & Lösungen:**
- Unten rechts in VS Code prüfen, welcher **Sprachmodus** aktiv ist.
- Stelle sicher, dass du in einer `.ios` Datei arbeitest.
- VS Code einmal neu starten.

## Fehler/Warnungen/Hinweise werden nicht angezeigt
- Öffne die **Problems**-Ansicht mit `Ctrl+Shift+M`.
- Achte auf Wellenlinien im Editor und nutze **Hover** für Details.

## Ich glaube, ein Command fehlt oder ist falsch validiert
Die Grammatik wird laufend erweitert. Bitte melde fehlende oder fehlerhafte Commands als Issue:
`https://github.com/Crill-IOS/Crill-IOS-Scripting/issues`

**Hilfreich im Issue:**
- Ein minimales `.ios` Beispiel (Snippet)
- Was du erwartet hast vs. was passiert
- VS Code Version und (falls bekannt) Extension-Version

## Nächste Schritte
- Zurück zur [Nutzung](./usage.md)
- Zu den [Beispielen](./examples.md)
