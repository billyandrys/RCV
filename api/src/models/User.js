const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        username: {
            type :  DataTypes.STRING,
            allowNull: false,
<<<<<<< HEAD
            
=======
            set(value) {
                this.setDataValue("username", value.toLowerCase());
              },
              get() {
                const value =
                  this.getDataValue("username").slice(0, 1).toUpperCase() +
                  this.getDataValue("username").slice(1).toLowerCase();
      
                return value;
              },
>>>>>>> c39d0aea37ed12351130aaeaeb2024366bb47411
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        }, 
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }



    })
}