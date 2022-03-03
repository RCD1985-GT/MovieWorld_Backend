'use strict';
const bcrypt = require('bcrypt');
const authConfig = require('../config/auth'); 

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('usuarios', [ // QUITO BCRYPT PARA COMPROBAR QUE FUNCIONA "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds))
     {"nombre": "Krishnah",
     "apellido": "Haggith",
     "email": "khaggith0@comsenz.com",
     "edad": 99,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-04-02",
     "updatedAt": "2021-08-24"
   }, {
     "nombre": "Rubin",
     "apellido": "MacInerney",
     "email": "rmacinerney1@un.org",
     "edad": 13,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-05-24",
     "updatedAt": "2021-06-11"
   }, {
     "nombre": "Selle",
     "apellido": "Kristoffersson",
     "email": "skristoffersson2@friendfeed.com",
     "edad": 65,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-11-08",
     "updatedAt": "2021-12-18"
   }, {
     "nombre": "Pamelina",
     "apellido": "Calbaithe",
     "email": "pcalbaithe3@discovery.com",
     "edad": 18,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2022-02-28",
     "updatedAt": "2021-10-18"
   }, {
     "nombre": "Daisey",
     "apellido": "Whitehead",
     "email": "dwhitehead4@independent.co.uk",
     "edad": 34,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-08-01",
     "updatedAt": "2021-12-01"
   }, {
     "nombre": "Rodrigo",
     "apellido": "Levington",
     "email": "rlevington5@php.net",
     "edad": 61,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-12-21",
     "updatedAt": "2022-02-23"
   }, {
     "nombre": "Allin",
     "apellido": "Carragher",
     "email": "acarragher6@github.com",
     "edad": 68,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2022-02-09",
     "updatedAt": "2021-06-06"
   }, {
     "nombre": "Davida",
     "apellido": "Giraudy",
     "email": "dgiraudy7@com.com",
     "edad": 12,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2022-02-06",
     "updatedAt": "2021-11-06"
   }, {
     "nombre": "Darcie",
     "apellido": "Busse",
     "email": "dbusse8@aboutads.info",
     "edad": 48,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-11-18",
     "updatedAt": "2021-04-21"
   }, {
     "nombre": "Douglass",
     "apellido": "Lakey",
     "email": "dlakey9@ebay.com",
     "edad": 69,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-05-25",
     "updatedAt": "2021-10-29"
   }, {
     "nombre": "Christoph",
     "apellido": "Forrestill",
     "email": "cforrestilla@ftc.gov",
     "edad": 60,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-12-04",
     "updatedAt": "2021-11-10"
   }, {
     "nombre": "Tuesday",
     "apellido": "Chittleburgh",
     "email": "tchittleburghb@nifty.com",
     "edad": 53,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-09-16",
     "updatedAt": "2021-06-15"
   }, {
     "nombre": "Louisette",
     "apellido": "Cirlos",
     "email": "lcirlosc@people.com.cn",
     "edad": 8,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-04-06",
     "updatedAt": "2021-04-04"
   }, {
     "nombre": "Tobias",
     "apellido": "Jantot",
     "email": "tjantotd@flavors.me",
     "edad": 72,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-10-24",
     "updatedAt": "2021-06-06"
   }, {
     "nombre": "Dawn",
     "apellido": "Brizell",
     "email": "dbrizelle@typepad.com",
     "edad": 67,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-10-13",
     "updatedAt": "2021-08-02"
   }, {
     "nombre": "Cammi",
     "apellido": "O' Finan",
     "email": "cofinanf@tumblr.com",
     "edad": 68,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-06-14",
     "updatedAt": "2021-09-07"
   }, {
     "nombre": "Joice",
     "apellido": "Dymoke",
     "email": "jdymokeg@flickr.com",
     "edad": 58,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-07-05",
     "updatedAt": "2021-12-04"
   }, {
     "nombre": "Malinda",
     "apellido": "Alam",
     "email": "malamh@army.mil",
     "edad": 47,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-07-06",
     "updatedAt": "2021-08-27"
   }, {
     "nombre": "Andeee",
     "apellido": "Grimshaw",
     "email": "infohotsmoke@gmail.com",
     "edad": 8,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "password": "2wM4gB",
     "rol": false,
     "createdAt": "2021-05-23",
     "updatedAt": "2021-04-19"
   }, {
     "nombre": "Cassi",
     "apellido": "Amery",
     "email": "cameryj@thetimes.co.uk",
     "edad": 1,
     "password":bcrypt.hashSync("1234", Number.parseInt(authConfig.rounds)),
     "rol": false,
     "createdAt": "2021-06-09",
     "updatedAt": "2021-05-05"
   }
     ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
