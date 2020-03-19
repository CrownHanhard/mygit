const mongoose=require("mongoose");
const Schema=mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/blogs",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(err)throw err;
    console.log('数据库链接成功')
})
let bannerSchema=new Schema({
    src:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
});
let bannerDatas=mongoose.model("bannerDatas",bannerSchema);
module.exports={
    bannerDatas:bannerDatas
}