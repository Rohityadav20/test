const express = require('express');
const Sequelize = require('sequelize');
const path = require('path'); 
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const sequelize = require('./util/connection');
var session = require('express-session');
var flash = require('connect-flash');


const app = express();
const admin = require('./routes/pages');
const publicDirectory = path.join(__dirname,'./public'); 
app.use(express.static(publicDirectory));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(flash());
app.use('/public',express.static('public'));
app.set('view engine','ejs');
app.use(admin);
app.use('/auth',require('./routes/pages'));

sequelize.sync({alter:true})
.then(result=>{
    // console.log(result);
    app.listen('3000',function(){
        console.log('server started at port 3000');
    });
})
.catch(err=>{
    console.log(err);
});