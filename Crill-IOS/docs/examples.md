# Beispiele

Diese Beispiele sind als schnelle Vorlage gedacht. Du kannst sie in eine `.ios` Datei kopieren und schrittweise an deine Umgebung anpassen.

## Mini-Workflow
Wenn du dir unsicher bist, in welcher Reihenfolge du anfangen sollst, hat sich dieser Ablauf bewährt:
1. **Grundkonfiguration** (Hostname, SSH, lokale User)
2. **Interface-Konfiguration** (IP, Description, aktivieren)
3. **Routing** (z. B. OSPF) – erst, wenn Interfaces stimmen

## Grundkonfig
**Ziel:** Basis-Setup inkl. SSH-Zugriff und lokalen Logins.

```ios
configure terminal
 no ip domain-lookup
 hostname R1
 banner motd #No unauthorized access!#
 username cisco algo scrypt secret cisco
 username cisco privilege 15
 ip domain-name crillios.com
 crypto key generate rsa usage-keys modulus 1024
 ip ssh version 2
exit

line console 0
 exec-timeout 0 0
 logging synchronous
 login local
exit

line vty 0 15
 exec-timeout 0 0
 logging synchronous
 login local
 transport input ssh telnet
exit
```

## Interface
**Ziel:** Ein Interface benennen, adressieren und aktivieren.

```ios
interface GigabitEthernet0/0
 description LAN
 ip address 10.0.0.1 255.255.255.0
 no shutdown
exit
```

**Variationen:**
- Andere Interfaces: `GigabitEthernet 0/1`, `FastEthernet 0/0`, `Vlan 1` (je nach Gerät).
- Prüfe IP/Masken und nutze sprechende `description`-Texte.

## OSPF
**Ziel:** Einfaches OSPF-Routing für ein Netz aktivieren.

```ios
router ospf 1
 network 10.0.0.0 0.0.0.255 area 0
 passive-interface gigabitethernet 0/0
exit
```

## Nächste Schritte
Hier geht es weiter zu den [FAQs](./faq.md) des Plugins.