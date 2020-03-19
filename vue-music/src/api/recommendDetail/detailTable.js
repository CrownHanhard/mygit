const mongoose = require("mongoose");
const Schema=mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/qiyuan",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("链接数据库成功")
});
let detailSchema=new Schema({
    id:{//后期数据识别
        required:true,
        type:String
    },
    cover:{//封面
        required:true,
        type:String
    },
    title:{
        required:true,
        type:String
    },
    tag:[{
        id:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    }],
    songList:[
        {
            mid:{//音乐id
                type:String,
                required:true
            },
            name:{//歌曲名称
                type:String,
                required:true
            }
        }
    ],
    singer:[{
        id:{
            type:Number,
            required:true
        },
        mid:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        }
    }]
}) 
let detailData=mongoose.model("detailTables",detailSchema);
module.exports={
    detailTable:detailData
}