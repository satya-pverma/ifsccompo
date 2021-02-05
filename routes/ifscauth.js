  
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
//const Bank = require('../model/bank')
const Bank=mongoose.model("Bank")
const ifsc=require('ifsc');
const { json } = require("express");
//const bank = require("ifsc/src/node/bank");


router.post("/ifsc", (req, res) => {
  var code = req.body.ifsc


  if (ifsc.validate(code)) {
      ifsc.fetchDetails(code)
          .then(function (result)
           {
              
            res.send(result)

          })
         
          

      // res.send({ ifsc: "correct" })
  }
  else {
      res.send({ ifsc: "wrong" })
  }


})



// router.post("/addbank",  (req, res) => {
//     const {BANK,BRANCH,DISTRICT,STATE,IFSC,MICR}=req.body
//     console.log(BANK,BRANCH,DISTRICT)

//      const bank=new Bank({
//       b_name:BANK,
//       br_name:BRANCH,
//       Dist:DISTRICT,
//       state:STATE,
//       ifsc:IFSC,
//       micr:MICR
//     });
    
//       bank.save()
//       .then((result) => {
//         res.json({ post: result });
//       })
//       .catch((err) => {
//         console.log(err);
//       });

  

   
// })




router.post('/findifsc',(req,res)=>{
  const {state,bank,dist}=req.body;
  console.log(state,bank,dist)
   Bank.find({'state':state,'b_name':bank, 'Dist':dist})
  .then(bank=>{
    res.send(bank)
  })
  .catch(err=>{
    console.log(err)
  })
})
 // 'b_name':bank, 'Dist':dist,'br_name':branch      
    
  
        
    
module.exports=router