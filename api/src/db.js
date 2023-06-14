require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const babyModel = require('./models/Baby')
const managerModel = require('./models/Manager')
const vaccinationModel = require('./models/Vaccination')
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
babyModel(sequelize)
managerModel(sequelize)
vaccinationModel(sequelize)
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Baby, Manager, Vaccination } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Baby.belongsToMany(Manager, { through: "Baby_Manager" })
Manager.belongsToMany(Baby, { through: "Baby_Manager" })

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
