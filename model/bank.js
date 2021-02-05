const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types

const bankSchema = new mongoose.Schema(
    {
    b_name: {
        type: String,
        
    },
    br_name: {
        type: String,

    },
    state: {
        type: String,
      
    },
    ifsc: {
        type: String,
      
    },
    micr: {
        type: String,
     
    },
    Dist: {
        type: String,
        
    },
    Addr:{
        type:String
    }

}
)

mongoose.model("Bank", bankSchema)