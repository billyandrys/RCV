const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Baby",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
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
            this.getDataValue("name").slice(1).toLowerCase();

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
            this.getDataValue("lastname").slice(1).toLowerCase();
          return value;
        },
      },
      nro_cedula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      codigo_eps: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      weight: {
        type: DataTypes.DECIMAL(5, 3),
        allowNull: false,
        get(value) {
          this.getDataValue("peso", value + "Kg");
        },
      },
      height: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM(["Femenino", "Masculino"]),
        allowNull: false,
      },
      bloodType: {
        type: DataTypes.ENUM([
          "A+",
          "A-",
          "B+",
          "B-",
          "AB+",
          "AB-",
          "O+",
          "O-",
        ]),
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },{
      tableName: 'Baby' // Nombre de tabla personalizado
    },
    {
      timestamps: false,
    }
  );
};

