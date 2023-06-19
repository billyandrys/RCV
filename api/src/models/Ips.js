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
        set(value){
            this.setDataValue('name', value.toLowerCase())
        },
        get(value){
            this.getDataValue('name', value.slice(0,1).toUppercase() + value.slice(1).toLowerCase())
        },
        validate: {
            notEmpty: true
        }


    }
 })

}