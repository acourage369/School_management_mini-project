import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//fix depracation warning
mongoose.set("strictQuery", false);

const MONGO_URI = "mongodb+srv://Brainyyawson:brainy369w@cluster0.kh2bvzh.mongodb.net/?retryWrites=true&w=majority"
console.log(process.env)

const DBCONNECT = async () => {
    try {
        await mongoose.connect(MONGO_URI,  {autoIndex: true});
        console.log("db connected Succesfully");
    }   catch (err) {
        console.log(err)
        process.exit();
    }
};

export {DBCONNECT};