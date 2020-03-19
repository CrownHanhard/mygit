const { blogDatas } = require("./blogTable");
module.exports = function (req, res) {

    if (req.body) {
        blogDatas.create({
            name: req.body.name,
            type: req.body.type,
            recommend: req.body.recommend,
            detail: req.body.detail,
            date: req.body.date
        }, (err) => {
            if(err) throw err
        })
    }
    res.send({
        code:200,
        msg:"成功"
    })
}