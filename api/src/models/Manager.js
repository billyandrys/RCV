const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Manager', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey:true,
      unique: true,
      allowNull: false,
    },
    id_baby: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('name', value.toLowerCase())
      },
      get(value) {
        this.getDataValue('name', value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase())
      }
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('lastname', value.toLowerCase())
      },
      get(value) {
        this.getDataValue('lastname', value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase())
      }
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    nro_cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        msg:'must be a valid email'
      }
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull:false,
    },
    id_eps: {
      type: DataTypes.INTEGER,
      allowNull:true
    }
  });
};
