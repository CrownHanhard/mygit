const path = require('path')
const fs = require('fs')
const { bannerDatas } = require("./bannerTable");
module.exports = function (req, res) {
    let needDeleteData = req.body.title;
    let needDeleteFile = req.body.name;
    bannerDatas.deleteOne({
        "title": needDeleteData
    }, (err) => {
        if(err) throw err;
        fs.unlinkSync(path.join(__dirname, `bannerimage/${needDeleteFile}`))
        res.send({
            code:200,
            msg:"删除成功"
        })
    })
   
}