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
            set(value) {
                this.setDataValue("username", value.toLowerCase());
              },
              get() {
                const value =
                  this.getDataValue("username").slice(0, 1).toUpperCase() +
                  this.getDataValue("username").slice(1).toLowerCase();
      
                return value;
              },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        }



    })
}