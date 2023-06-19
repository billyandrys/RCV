const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Roles", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false
  },{
    tableName: 'Roles' // aqui pongo el mismo valor que define asi sequelize no lo cambie
  });
};
