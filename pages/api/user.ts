import React from "react"
import { Model } from "../../lib/schema.js";
import  connectionDB  from "../../lib/mongodb.js";
import { NextApiRequest, NextApiResponse } from "next";



export default async function handler(req:NextApiRequest, res:NextApiResponse){
    await connectionDB();

    try{


        if(req.method==="POST"){
            // console.log(process.env.NEXT_PUBLIC_MONGODB_URI)
            try{
                const user = JSON.parse(req.body);
                console.log(user);
                const validUser = await  new Model(user);
                console.log(validUser);
                try{
                    if(validUser){
                        await validUser.save();
            
                        res.status(200).json({message:"User Saved succesfully",validUser})
                    }
                    else{
                        res.status(501).json({message:"Invalid User details"})
                    }

                }catch(err){
                        console.log("error with schema or model",err)
                }
               
            }
            catch(err){
                res.status(501).json({message:"Error with POST---------",err})
                console.log(err);
            }
        
            }
           
           
    
        if(req.method==="GET"){
    
            const requiredData = await Model.find({});
            if(requiredData){
    
                res.status(200).json(requiredData)
            }
            else{
                res.status(400).json({message:"Error with Connectino GET"})
            }
        }


    }

    catch(err){
        res.status(501).json({message:"Error with Handler Function----------",err})
    }

  
    

}

