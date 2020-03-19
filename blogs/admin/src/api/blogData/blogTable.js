const mongoose=require("mongoose");
const Schema=mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/blogs",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err)throw err;
    console.log('数据库链接成功')
})
let blogSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    recommend:{
        type:Boolean,
        required:true
    },
    detail:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
});
let blogDatas=mongoose.model("blogDatas",blogSchema);
module.exports={
    blogDatas:blogDatas
}