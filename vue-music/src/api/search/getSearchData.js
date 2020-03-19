const request = require("request");
module.exports = {
    getSearchResult:function (req,res,err) {
        let searchStr = req.params.id;
        request({
            url: `https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp`,
            qs: {
                _: 1578160128524,
                g_tk: 5381,
                uin: 3003436226,
                format: 'json',
                inCharset: 'utf-8',
                outCharset: 'utf-8',
                notice: 0,
                platform: 'h5',
                needNewCode: 1,
                w: searchStr,
                zhidaqu: 1,
                catZhida: 1,
                t: 0,
                flag: 1,
                ie: 'utf-8',
                sem: 1,
                aggr: 0,
                perpage: 20,
                n: 20, // 搜索结果个数
                p: 1,
                remoteplace: 'txt.mqq.all'
            },
            headers:{
                referer: "https://y.qq.com/m/index.html"
            }
        },function (err,response,body) {
            let finalData= {
                songlist:[],
                zhida:{}
            };
            let data= JSON.parse(body);
            data.data.song.list.forEach((item)=>{
                finalData.songlist.push({
                    songAlbum:item.albumname,
                    songMid:item.songmid,
                    songName:item.songname
                })
            });
            finalData.zhida=data.data.zhida;
            res.send(finalData);
        })
    }
}
