const mongoose=require("mongoose");


const diarySchema=new mongoose.Schema({
    content:String},
    {
    timestamps:true 
    }
);

const Diary=mongoose.model("Diary",diarySchema);

module.exports=Diary;