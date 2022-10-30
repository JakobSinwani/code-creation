import {Router} from "express";
import {book} from "../../utils/transform_file/transform_txt_file";
const router = Router();
const HARRY_POTTER = "harry-potter"
const WAR_AND_PEACE = "war-and-peace"

router.get("/",async (req,res)=> {
    const result = await book(`assets/${HARRY_POTTER}/combine1.txt`, WAR_AND_PEACE)
    res.send(result)
})

router.post("/", (req,res)=> {
    console.log("start")
    console.log(req.body)
    res.send("hello!!!")
})

export default router;
