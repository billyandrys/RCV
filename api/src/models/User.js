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