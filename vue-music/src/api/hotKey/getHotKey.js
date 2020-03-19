const request = require("request");

module.exports = {
    getHotKey:function (req,res,err) {
        request({
            url:'https://u.y.qq.com/cgi-bin/musicu.fcg',
            qs:{
                cgiKey: "GetHomePage",
                _: 1578158040729,
                data:`{"comm":{"g_tk":5381,"uin":3003436226,"format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"hotkey":{"module":"tencent_musicsoso_hotkey.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"remoteplace":"txt.miniapp.wxada7aab80ba27074","searchid":"1559616839293"}}}`
            }
        },function (err,response,body) {
            let searchKey=[];
            let data = JSON.parse(body);
            data.hotkey.data.vec_hotkey.forEach((item)=>{
                searchKey.push({
                    key:item.query,
                    score:item.score
                })
            })
            res.send(searchKey);
        })
    }
}