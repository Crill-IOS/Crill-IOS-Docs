# Beispiele

## Grundkonfig
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
```ios
interface GigabitEthernet0/0
 description LAN
 ip address 10.0.0.1 255.255.255.0
 no shutdown
exit
```

## OSPF
```ios
router ospf 1
 network 10.0.0.0 0.0.0.255 area 0
 passive-interface gigabitethernet 0/0
exit
```

Hier geht es weiter zu den [FAQs](./faq.md) des Plugins.