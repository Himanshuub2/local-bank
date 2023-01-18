import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    branch : {type:String},
    account:{type:String,},
    accountdetails:{type:String},
    accountnumber:{type:String},
    first:{type:String},
    middle:{type:String},
    last:{type:String},
    address:{type:String},
    city:{type:String},
    
    suggestion:{type:String}


  

})


export const Model =mongoose.models.Bankuser || mongoose.model("Bankuser",userSchema);
