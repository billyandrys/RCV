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
        },

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