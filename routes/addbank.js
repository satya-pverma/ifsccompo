const express = require('express');
const mongoose= require('mongoose')
const fileUpload = require('express-fileupload');
const router = express.Router();
const Bank=mongoose.model("Bank")
const admin=require('../middleware/isAdmin')
const requireLogin=require('../middleware/requireLogin')
var fs=require('fs')
const CSVToJSON = require('csvtojson');
const { Converter } = require('csvtojson');
const { json } = require('body-parser');
router.use(express.static('public')); 
router.use(fileUpload());



router.post('/add',requireLogin,admin, (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    const myFile = req.files.file;
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
     
       
               CSVToJSON().fromFile(`${__dirname}/public/${myFile.name}`)
              
               .then(entry => {
                    entry.map(bankitem=>{
                        
                            const bank=new Bank({
                                ifsc:bankitem.IFSC,
                                br_name:bankitem.OFFICE,
                                Dist:bankitem.DISTRICT,
                                state:bankitem.STATE,
                                b_name:bankitem.BANK,
                                micr:bankitem.MICR,
                                Addr:bankitem.ADDRESS

                               });
                               
                                 bank.save()
                                 .then((result) => {
                                 
                                 })
                               
                                 .catch((err) => {
                                   console.log(err);
                                 });
                                 
                        
                        })
              

                })
             
                .catch(err => {
                    console.log(err);
                });
              
              
            
 });

   
 res.send({msg:"uploaded"})
})


module.exports=router


