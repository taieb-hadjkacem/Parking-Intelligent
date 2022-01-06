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
### Déploiement
La partie serveur NodeJS est déployée sur une machine virtuelle Azure dotée d'un OS Ubuntu 20.4 et accessible via l'URL [api.smartlypark.me](https://api.smartlypark.me). Ce serveur est sécurisé avec un certificat  **Wildard SSL**  associé à une clé `elleptic curve 384`, délivrée par **Let's Encrypt** et générée avec la commande suivante.
```bash
sudo certbot certonly --manual -d *.smartlypark.me -d smartlypark.me --agree-tos --manual-public-ip-logging-ok --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory --register-unsafely-without-email --elliptic-curve secp384r1
```
La communication client-serveur est protégé exclusivement par **TLS 1.3**. Le serveur assure l'autoredirection HTTPS et dispose de **HTTP Strict Transport Security (HSTS)** pour empêcher les attaques telles que le piratage de cookies et les rétrogradations de protocole.
Ci-dessous l'attestation obtenue avec *SSL Lab*.
![SSL lab](https://lh3.googleusercontent.com/pw/AM-JKLU13_832LciDLUbf8JmyMx_pDCJ5TbsU5Z7fbGR8izP2TDnPo6r3QR6shRrEoya1Pvv62NKk0_SQ70Bx92_Hh_rkn1ByQRhbJxhQgovrUcqCNQ_skMAk40BxIWnOGA0IOFPYnJPw3CowqyVuFOVTiyk=w899-h466-no)
Le broker MQTT est installé sur une autre machine virtuelle et accessible via l'URL [api.smartlypark.me](https://api.smartlypark.me)
Le broker mosquitto est installé 
```bash
sudo apt install certbot mosquitto mosquitto-clients
```
Pour le sécuriser, on a précisé dans le fichier de configuartion `
/etc/mosquitto/conf.d/default.conf
` les certifications (déjà créés), le port sécurisé 8883 et le port *MQTT over websockets* 8083, exclusivement.

