import express from "express";
const app = express()
import  studentRoute from "./routes/student.js";
import {DBCONNECT} from "./config/dbconnection.js"

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use("/api/v1", studentRoute)


app.listen(PORT, async () =>{
    try{
        await DBCONNECT()
        console.log(`server listening on port ${PORT}`)
    }catch(err){
        console.log(err)
    }
})