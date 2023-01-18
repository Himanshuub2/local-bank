import mongoose from "mongoose";


const connectionDB = async()=>{
    
    console.log("mongodb+srv://admin:himanshu@cluster0.thkmk.mongodb.net/?retryWrites=true&w=majority")
    await mongoose.connect("mongodb+srv://admin:himanshu@cluster0.thkmk.mongodb.net/?retryWrites=true&w=majority",{
        useUnifiedTopology:true,
        useNewUrlParser:true,
    })

   

  
}

export default connectionDB;