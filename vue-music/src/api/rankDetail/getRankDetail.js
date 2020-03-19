const  request = require("request");
const  {JSDOM} = require("jsdom");
// const fs = require("fs")
module.exports={
    getRankDetail:function (req,res,err) {
        let topId = req.params.id;
        request({
            url:"https://i.y.qq.com/n2/m/share/details/toplist.html",
            qs:{
                ADTAG:"myqq",
                "from":"myqq",
                channel:10007100,
                id:topId
            }
        },function (err,response,body) {
            let dom = new JSDOM(body,{runScripts:"dangerously"});
            let data=dom.window.firstPageData;
            let finailData= {};
            finailData.headPicUrl=data.toplistData.headPicUrl;//歌单封面
            finailData.titleDetail=data.toplistData.titleDetail;// 歌单,名称
            finailData.songlist=[];
            data.songInfoList.forEach((item)=>{
                finailData.songlist.push({
                    songAlbum:item.album.name,
                    songMid:item.mid,
                    songName:item.title
                })
            })
            res.send(finailData);
        })
    }
}