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
<<<<<<< HEAD
            
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
>>>>>>> c39d0aea37ed12351130aaeaeb2024366bb47411
        }


    })

}