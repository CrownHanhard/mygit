const { blogDatas } = require("./blogTable");
module.exports = function (req, res) {
    blogDatas.find({
        recommend: {
            $eq: true
        }
    }).limit(7).then((result) => {
        res.send(result)
        // 第一阶段没做limit 处理 默认返回了全部数据
    }).catch((err) => {
        throw err;
    })
}