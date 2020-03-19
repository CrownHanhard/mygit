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

let singerShema = new Schema({
    "singer_id": String, // 歌手的id
    "singer_mid": String,//方便后期获取歌手的详细信息
    "singer_name": String,
    "singer_pic": String,
});

let singer=mongoose.model("singer",singerShema);

module.exports={
    singerTable:singer
};