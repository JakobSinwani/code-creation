import express from "express";
import transformText from "./router/transformText"
import {get_gematria} from "./utils/gematria/gematria";
import cors from 'cors'
const app = express()
const PORT = 8081
app.use(express.json())
app.use(cors())
app.use("/transform-text", transformText)

app.get("/", (req,res)=>{

})

app.post("/", (req,res)=> {
    console.log(req.body)
    res.send(req.body)
})

app.listen(PORT, ()=> {
    console.log("listen on port: " + PORT)
})
