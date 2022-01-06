# Smartly Park Me
## Description
Il s'agit d'une modélisation simpliste d'un parking intelligent qui permet la gestion d’un parking en termes de places disponibles. Tout utilisateur de véhicule peut  à l’avance monitorer une place dans le parking via une application mobile.
Toute place dans le parking est équipée de capteurs qui détectent la présence d’un véhicule, et une application mobile regroupe les informations du parking.

## Choix technologique
* Partie backend : MongoDB Atlas - Mosquitto MQTT broker
* Partie middleware : NodeJS
* Partie frontend : ionic (Angular)
* Cartes et capteurs : Raspberry Pi 4 - capteur ultrason HC-SR04
## Documentation technique
### Comment installer Smartly Park Me ?
#### Partie serveur
1. Accéder au dossier api
2. Taper la commande suivante pour installer les dépendances
```bash
npm install
```
3. Lancer le serveur
```bash
sudo npm start
```
#### Partie mobile
1. Accéder au dossier mobile
2. Taper la commande suivante pour installer les dépendances
```bash
npm install
```
3. Lancer le serveur
```bash
sudo npm start
```
4. Lancer l'application en local
```bash
ionic serve
```
5. Téléverser l'application sur un device android
```bash
ionic cordova run android --device
```
#### Partie IoT
Le schéma de cablage

![](https://lh3.googleusercontent.com/pw/AM-JKLVkDApUPyVJxHM2MBc4z3jQL40CLasb1kVhLTFBzkoGgeHeErmLOlxo7DgmXptRv1IxbSTTbigjuYVAJ3dkzrCxRLqmm2yom9G5wsCE6Z616UntR7TEh7UutmLpo9zSnara6kSbsHMgS7NNcjSdSWSA=w734-h583-no)
### Déploiement
La partie serveur NodeJS est déployée sur une machine virtuelle Azure dotée d'un OS Ubuntu 20.4 et accessible via l'URL [api.smartlypark.me](https://api.smartlypark.me). Ce serveur est sécurisé avec un certificat  **Wildard SSL**  associé à une clé `elleptic curve 384`, délivrée par **Let's Encrypt** et générée avec la commande suivante.
```bash
sudo certbot certonly --manual -d *.smartlypark.me -d smartlypark.me --agree-tos --manual-public-ip-logging-ok --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory --register-unsafely-without-email --elliptic-curve secp384r1
```
La communication client-serveur est protégé exclusivement par **TLS 1.3**. Le serveur assure l'autoredirection HTTPS et dispose de **HTTP Strict Transport Security (HSTS)** pour empêcher les attaques telles que le piratage de cookies et les rétrogradations de protocole.

Ci-dessous l'attestation obtenue avec *SSL Lab*.
![SSL lab](https://lh3.googleusercontent.com/pw/AM-JKLU13_832LciDLUbf8JmyMx_pDCJ5TbsU5Z7fbGR8izP2TDnPo6r3QR6shRrEoya1Pvv62NKk0_SQ70Bx92_Hh_rkn1ByQRhbJxhQgovrUcqCNQ_skMAk40BxIWnOGA0IOFPYnJPw3CowqyVuFOVTiyk=w899-h466-no)

Le broker MQTT est installé sur une autre machine virtuelle et accessible via l'URL [api.smartlypark.me](https://api.smartlypark.me)
L'autentification à l'application mobile est assurée par OAuth 2 PKCE selon le diagramme suivant.
![](https://lh3.googleusercontent.com/pw/AM-JKLUmYypt-vLQ6twR-rHQwzH9cI2FxnZSvCD99IYBrEEm9mcxMFZRj8L_IciezQ_yIjiqywK5wGZ1DQBAbVt084JPXp7S7lGePKm8Mm5Ve_Ob98adV-lpGNmESO_OZZahqzz6iujH3QZ0XCJPg160wVpp=w697-h542-no)

Le broker mosquitto est installé via 
```bash
sudo apt install certbot mosquitto mosquitto-clients
```
Pour le sécuriser, on a précisé dans le fichier de configuartion `
/etc/mosquitto/conf.d/default.conf
` les certifications (déjà créés), le port sécurisé 8883 et le port *MQTT over websockets* 8083, exclusivement.

Pour effectuer un *publish* dans le broker MQTT depuis la carte Raspberry Pi avec les paramètres suivants:
- port : 8883
- topic: "parkA"
- message: "1"
- user: "sammy"
- mot de passe:********  

on se sert de la commande suivante.
```bash
mosquitto_pub -h mqtt.smartlypark.me -t parkA -m "1" -p 8883 --capath /etc/ssl/certs/ -u "sammy" -P ********
```

