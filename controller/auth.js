const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
var session = require('express-session');
const sequelize = require('../util/connection');
const Candidate = require("../models/Candidate");
const Test = require("../models/Testscore");    
    

exports.register = async(req,res) =>{
    console.log(req.body);
    const{name, email } = req.body;
    if(!req.body.email || !req.body.name){
        return res.render('signup',{
            message:'Plz fill in all the details'
        });   
    }
    const result = await Candidate.findAll({where:{ email:email }    
    }) 
    console.log(result);
    if(result.length > 0 ){
        return res.render('signup',{
            message:'that email is already in use'
        });
    }
    await Candidate.create({
        name: name,
        email: email,
    })
        return res.render('signUp',{
            message:'User registered'
            
        });

       
}


exports.testscore = async(req,res) =>{
    console.log(req.body);
    const{email,firstround,secondround,thirdround } = req.body;
    console.log(thirdround);
 const result = await Candidate.findAll({where:{ email:email }     }) 
    console.log(result);  

    if(result.length>0){
    await Test.create({
        email: email,
        firstround: firstround,
        secondround: secondround,
        thirdround: thirdround
    })
    return res.render('signup',{
        message:'marks entered successfully'
    });
    }
        
}



