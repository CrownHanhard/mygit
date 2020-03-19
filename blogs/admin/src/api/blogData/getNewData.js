const { blogDatas } = require("./blogTable");
module.exports = function (req, res) {
    blogDatas.find({}).sort({ date: -1 }).limit(4)
        .then((result) => {
            res.send(result)
        }).catch((err) => {
            throw err;
        })
}