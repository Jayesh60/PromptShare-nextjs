import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () =>{
    if (isConnected){
        console.log("database is already connected")
        return;

    }
    try {
        mongoose.set("strictQuery", true)
        mongoose.connect(
            process.env.MONGO_URI,{
                dbName: "share-prompt",
                useNewUrlParser :true,
                useUnifiedTopology: true
            }
        )
        isConnected = true;
        console.log("database connected")
    } catch (error) {
        console.log(error)
    }
}