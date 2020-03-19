const  request = require("request");
const {JSDOM} = require("jsdom");
const {singerDetailTable} = require("./singerDetailTable");
module.exports={
    getSingerDetailData:function (req,res,err) {
        let body= JSON.parse(Object.keys(req.body)[0]);//s 数据格式转化
        // eslint-disable-next-line no-console
        console.log(body);
        singerDetailTable.find({
            singer_mid:body.mid
        }).then((data)=>{
            // eslint-disable-next-line no-console
            console.log(Number(data));
            if (Number(data) === 0) {
                // eslint-disable-next-line no-console
                console.log("此时数据库中无数据");
                request({
                    method:"GET",
                    url:"https://i.y.qq.com/n2/m/share/details/singer.html",
                    qs:{
                        singermid:body.mid,
                        ADTAG:"myqq",
                        "from":"myqq",
                        channel:"10007100"
                    }
                },function (err,response,body) {
                    // eslint-disable-next-line no-console
                    //console.log(body)
                    //res.send(body);
                    let dom = new JSDOM(body,{runScripts:"dangerously"});
                    let firstPageData= dom.window.firstPageData;
                    let finalData={};
                    //基本的歌手信息
                    finalData.singer_name=firstPageData.singerData.singer_name;//歌手名称
                    finalData.singer_mid=firstPageData.singerData.singer_mid;//歌手mid
                    finalData.singer_id=firstPageData.singerData.singer_id;//歌手id
                    finalData.singerDesc=firstPageData.singerData.singerDesc;//歌手简介
                    finalData.songTotalNumber=firstPageData.singerData.songTotalNumber;//歌手歌曲总数
                    finalData.fansTotalNumber=firstPageData.singerData.fansTotalNumber;//歌手粉丝总数
                    //具体的歌曲信息
                    finalData.songList=[];//预存 歌曲信息列表
                    firstPageData.singerData.list.forEach((item)=>{
                        finalData.songList.push({
                            songName:item.songInfo.name,
                            songMid:item.songInfo.mid,
                            songAlbum:item.songInfo.album.name
                        })
                    })
                    res.send(finalData);
                    singerDetailTable.create(finalData).then(()=>{
                        // eslint-disable-next-line no-console
                        console.log("数据库写入成功");
                    });
                })
            } else {
                // eslint-disable-next-line no-console
                console.log("此时数据库中有数据");
                res.send(data);
            }
        })
    }
};

