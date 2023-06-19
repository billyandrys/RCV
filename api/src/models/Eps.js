const { DataTypes } = require('sequelize')

module.exports = (sequelize)=>{

    sequelize.define('Eps', {
        id:{
            type : DataTypes.INTEGER,
            autoIncrements: true,
            primaryKey: true,
            unique:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            set(value){
                this.setDataValue('name', value.toUppercase())
            },
            get(value){
                this.getDataValue('name', value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase())
            }
        }
    })

}