const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    psrd:{
        type:String,
        required:true
    },
    admin:{
        type:String,
        default:false
    },
    mmid:{
        type:String
    },
    actv:{
        type:Boolean
    },
    crts:{
        createdat: String 
          
    },
    crus:{
        createdby:String
    },
    mots:{
        modifiedat:String
        
    },
    mous:{
        modifiedby:String
    }
    
   
 
})

mongoose.model("User",userSchema)