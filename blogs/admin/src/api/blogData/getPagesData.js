const { blogDatas } = require("./blogTable");
module.exports = async function (req, res) {
    let total1, total2, total3;
    if (req.body.pages == 0) {
        await blogDatas.find({ type: { $eq: 'xinde' } }).then((res) => {
            total1 = res.length
        })
        await blogDatas.find({ type: { $eq: 'jianshe' } }).then((res) => {
            total2 = res.length
        })
        await blogDatas.find({ type: { $eq: 'style' } }).then((res) => {
            total3 = res.length
        })
        res.send({
            total1: total1,
            total2: total2,
            total3: total3
        });
    }
}