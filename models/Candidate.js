const Sequelize = require('sequelize');
const sequelize = require('../util/connection');
const  Candidate = sequelize.define('Candidate',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
              
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false

    }, 
    email:{
        type: Sequelize.STRING,
        allowNull: false
    },
})


module.exports = Candidate;
