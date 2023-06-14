const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Baby', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement:true,
      primaryKey: true,
      unique:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        this.setDataValue('name', value.toLowerCase())
      },
      get(value) {
        this.getDataValue('name', value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase())
      },
      validate: {
        notEmpty: true,
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
    codigo_eps: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    id_father: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    id_mother: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    weight: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: false,
      get(value) {
        this.getDataValue('peso', value + 'Kg')
      },
    },
    height: {
      type: DataTypes.DECIMAL(3,2),
      allowNull:false
    },
    gender: {
      type: DataTypes.ENUM(['Femenino', 'Masculino']),
      allowNull: false,
    },
    bloodType: {
      type:DataTypes.ENUM(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    }    
  }, {
    timestamps: false
  })
}