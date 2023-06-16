const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{
    sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true
        },
        userName: {
            type :  DataTypes.STRING,
            allowNull: false,
            set(value){
                this.setDataValue('user', value.toLowerCase())
            },

            get(value){
                this.getDataValue('user', value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase())
            }
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