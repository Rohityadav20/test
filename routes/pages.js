const express = require('express');
const Promise = require('promise');
const pool = require('../util/connection');
const Candidate = require('../models/Candidate');
const testscore = require('../models/Testscore');
const authController= require('../controller/auth');
const Testscore = require('../models/Testscore');
const router = express.Router();

router.get('/register',(req,res)=>{
    try{
    res.render('signup',{
        message:''
    });
    }
    catch(e){
        console.log(e);
    }
});

router.get('/testscore',(req,res)=>{
    try{
    res.render('testscore',{
        message:''
    });
    }
    catch(e){
        console.log(e);
    }
});


 router.get('/highestscore',async(req,res)=>{
    try{
        const results =  await Testscore.findAll();
        var highestnumber = 1;
        
        results.forEach(async function(result){
          var totalnumber = result.firstround+ result.secondround+result.thirdround;
          
            if(totalnumber>highestnumber){
                highestnumber = totalnumber;
                global.email = result.email;
                
            } 
        })
        console.log(email);
        var  profile =   await Candidate.findOne({where:{ email:email }})
        console.log(profile.name);
        console.log(highestnumber);
        res.json({
           candidateName: profile.name,
           
        })  
    }
    catch(e){
        console.log(e);
    }
 });

 router.get('/average',async(req,res)=>{
        try{
            const results =  await Testscore.findAll();
            let averagetotal = [];
            var highestnumber = 1;
            results.forEach(function(result){
               averagetotal.push((result.firstround+ result.secondround+result.thirdround)/3);
                 
               })

               res.send({
                averagetotal: JSON.stringify(averagetotal),
            })   
            
        }
        catch(e){
            console.log(e);
        }
    });
   

router.post('/register',authController.register);
router.post('/testscore',authController.testscore);


module.exports = router;