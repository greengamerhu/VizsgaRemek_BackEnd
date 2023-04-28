<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Leírás
Ez a **BiteMe Burger** Applikációnak a Backend-je ami egy VizsgaProjektre készült

## Telepítés

```bash
$ npm install
```

## Az alakalmazás futtatása (olvasd el lentebb is)

```bash
# fejlesztői
$ npm run start

# Változtatások automatikus applikálása
$ npm run start:dev

# "Kulcsrakész"
$ npm run start:prod
```

## Tesztesetek

<p align="left">
 A végpontTesztek a  <a href="https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/thunder-collection_BiteMe_Burger_V%C3%A9gpont_tesztek_final.json" target="blank">thunder-collection_BiteMe_Burger_Végpont_tesztek_final.json</a> fájlban elérhetőek amit egy egyszerű Thunder Client-es import-al már használható is
</p>

## Mielött futatnád az alkalmazást
.env.example fájlban megtalálod az adatbázis kapcsolat beállításait ha kész vagy a beállításával akkor töröld ki a **.example**-t a fájlból
### .env.example
```bash
PORT=3000
DB_HOST=localhost
DB_PORT=
DB_USERNAME=root
DB_PASSWORD=
DB_DATABASE=vizsgadb
```
## Adatbázis

<p align="left">
 Ajánlott a repoban megtalálható <a href="https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/vizsgadb_final.sql" target="blank">vizsgadb_final.sql</a> dump-ot használni
</p>

### Az adatbázisban megtalálható felhaszálókhoz az adatok
```bash
Admin: 
- Email : admin@example.com
- Pw : 123321
User:
- Email : joska@example.com
- Pw : 123321
```

### Az adatbázis diagram
<p align="center">
  <img src="https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/Final_database_structure.png"  alt="adatazisdiagram" />
</p>

## Dokumentáció
### Végpontok
A végpont dokumentáció elérhető a **/docs** végponton
### Fejlesztői
A fejlesztői dokumentáció elérhető a repoban megtalálható [/docs/index.html](https://github.com/greengamerhu/VizsgaRemek_BackEnd/blob/main/docs/index.html)

## Az alkalmazás többi része
### Mobil

[BiteMe Burger App](https://github.com/greengamerhu/Vizsgaremek_android)

> Fejlesztő: [Rimóczi Dániel](https://github.com/greengamerhu) 

### Weboldal

[BiteMe Burger Weboldal](https://github.com/Juhaszcsenge/frontend_vizsga)

> Fejlesztő: [Juhász Csenge](https://github.com/Juhaszcsenge) 


### Asztali alkalmazás

[BiteMe Burger AdminTool](https://github.com/Elcsa/vizsgarremek)

> Fejlesztő: [Fekete Edina](https://github.com/Elcsa) 


## License

Nest is [MIT licensed](LICENSE).
