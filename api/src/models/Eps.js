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
            set(value) {
                this.setDataValue("name", value.toLowerCase());
              },
              get() {
                const value =
                  this.getDataValue("name").slice(0, 1).toUpperCase() +
                  this.getDataValue("name").slice(1).toLowerCase();
      
                return value;
              },
        }
    })

}