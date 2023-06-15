const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Manager", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
        this.setDataValue("name", value.toLowerCase());
      },
      get() {
        const value =
          this.getDataValue("name").slice(0, 1).toUpperCase() +
          this.getDataValue('name').slice(1).toLowerCase();
        return value;
      },
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue("lastname", value.toLowerCase());
      },
      get() {
        const value =
          this.getDataValue("lastname").slice(0, 1).toUpperCase() +
          this.getDataValue('lastname').slice(1).toLowerCase();
        return value;
      },
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    nro_cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: "Correo electrónico inválido",
          // Puedes utilizar una expresión regular personalizada en lugar de isEmail
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
        },
      },
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_eps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },{
    timestamps: false,
  });
};
