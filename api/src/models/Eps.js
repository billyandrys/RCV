const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{

    sequelize.define('Eps', {
        id:{
            type : DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            
        },
        address:{
            type: DataTypes.STRING,
            allowNull:true,

        },
        phone: {
            type:DataTypes.STRING,
            allowNull:false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: true
        }


    })

}