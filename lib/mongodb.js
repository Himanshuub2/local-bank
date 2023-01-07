import {MongoClient} from "mongodb"


const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB = process.env.MONGODB;

if(!MONGODB_URI){
    throw new Error ("No Mongo DB URI")
}

if(!MONGODB){
    throw new Error("No Database in Mongodb")
}

let cachedClient = null;
let cachedDb = null;


const connectToDb = async()=>{

    if(cachedClient && cachedDb){
        return {
            client:cachedClient,
            db:cachedDb
        }
    }

    let client = new MongoClient(MONGODB_URI,{
        newUrlParser:true,
        newUnifiedTopology:true,
    })

    await client.connect();

    let db = client.db(MONGODB);

    cachedClient = client;
    cachedDb= db;

    return{
        client:cachedClient,
        db:cachedDb
    }
}

export default connectToDb;