require("dotenv").config();
const { Sequelize } = require("sequelize");

const babyModel = require("./models/Baby");
const managerModel = require("./models/Manager");
const vaccinationModel = require("./models/Vaccination");
const user = require("./models/User");
const eps = require("./models/Eps");
const ips = require("./models/Ips");
const roles = require("./models/Roles");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);


babyModel(sequelize);
managerModel(sequelize);
vaccinationModel(sequelize);
user(sequelize);
eps(sequelize);
ips(sequelize);
roles(sequelize);

const { Baby, Manager, Vaccination, User, Eps, Ips, Roles } = sequelize.models;

// las relaciones
Baby.belongsToMany(Manager, { through: "BabyManager" });
Manager.belongsToMany(Baby, { through: "BabyManager" });
Ips.belongsToMany(Eps, { through: "IPS_EPS" });
Eps.belongsToMany(Ips, { through: "IPS_EPS" });
Baby.hasMany(Vaccination);
Ips.hasMany(Vaccination);
Roles.hasMany(User);
Eps.hasMany(Manager);


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
