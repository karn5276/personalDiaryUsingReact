const express=require("express");
const app = express();
const mongoose=require("mongoose");
const diarySchema=require("./models/diary");
port=5276;

app.use(express.json());
app.use(express.urlencoded({extended:true}));



main()
.then(()=>console.log("database connected"))
.catch(()=>{console.log("database not connected")});

async function main(){
   await mongoose.connect("mongodb://127.0.0.1.27017/personalDiary");
};

// add content

app.get("/",async(req,res)=>{
    const data = await diarySchema.find({});
    res.send(data);
});

// here new content created

// app.get("/create",async(req,res)=>{
//     const content="hello my name is karn pable";
//     const data=   await diarySchema(content);
//     await data.save();
//     res.send("data send successfully");
// })

app.listen(port,()=>{
    console.log(`app is linsting on port ${port}`);
});