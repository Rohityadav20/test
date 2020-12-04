
const Sequelize = require('sequelize');

const sequelize = new Sequelize('test1','root','',{
    dialect:'mysql',
    host:'localhost',
    operatorAliases: false,
   
});

module.exports = sequelize;
