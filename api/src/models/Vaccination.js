const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Vaccination", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      autoIncrement:true
    },
    id_baby: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    protectMeFrom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dose: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    applicationDate: {
      type: DataTypes.DATEONLY,
      allowNull:false
    },
    laboratory: {
      type: DataTypes.STRING,
      allowNull:false
    },
    nro_lote: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    id_ips_vacunadora: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    nurse: {
      type: DataTypes.STRING,
      allowNull:false
    }
  });
};
