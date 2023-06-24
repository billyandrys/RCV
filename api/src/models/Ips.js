const {  DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
 sequelize.define('Ips', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true,
        unique:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false,
<<<<<<< HEAD
        },
=======
        set(value) {
            this.setDataValue("name", value.toLowerCase());
          },
          get() {
            const value =
              this.getDataValue("name").slice(0, 1).toUpperCase() +
              this.getDataValue("name").slice(1).toLowerCase();
  
            return value;
          },
        validate: {
            notEmpty: true
        }
>>>>>>> c39d0aea37ed12351130aaeaeb2024366bb47411

    address: {
        type: DataTypes.STRING,
        allowNull:true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true

    },
    status: {
        type: DataTypes.BOOLEAN,
        alloNull: true
    }

 })

}