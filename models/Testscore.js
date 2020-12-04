const Sequelize = require('sequelize');
const sequelize = require('../util/connection');
const Testscore  = sequelize.define('Testscore',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
    
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        firstround:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        secondround:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
        thirdround:{
            type: Sequelize.INTEGER,
            allowNull: false
        },
    })
module.exports = Testscore;