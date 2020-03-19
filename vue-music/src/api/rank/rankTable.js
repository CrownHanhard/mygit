const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect("mongodb://127.0.0.1:27017/qiyuan", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    // eslint-disable-next-line no-console
    console.log("连接成功")
}).catch(() => {
    // eslint-disable-next-line no-console
    console.log("连接失败")
});
let rankShema = new Schema({
    picUrl:{
        type:String,
        required:true
    },
    intro:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    topId:{
        type:Number,
        required:true
    },
    songlist:[
        {
            songName:{
                type:String,
                required:true
            },
            albumMid:{
                type:String,
                required:true
            },
            singerName:{
                type:String,
                required:true
            },
            singerMid:{
                type:String,
                required:true
            }
        }
    ]

})
let rankData = mongoose.model("rankDatas", rankShema);
module.exports={
    rankTable:rankData
}