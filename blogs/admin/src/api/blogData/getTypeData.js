const { blogDatas } = require("./blogTable");
module.exports = async function (req, res) {
    let data = {};
    await blogDatas.find({
        type: {
            $eq: req.body.type1
        }
    }).limit(7).then((result) => {
        data.type1 = result

    }).catch((err) => {
        throw err;
    })
    await blogDatas.find({
        type: {
            $eq: req.body.type2
        }
    }).limit(7).then((result) => {
        data.type2 = result
    }).catch((err) => {
        throw err;
    })
    await blogDatas.find({
        type: {
            $eq: req.body.type3
        }
    }).limit(7).then((result) => {
        data.type3 = result
    }).catch((err) => {
        throw err;
    })
    res.send(data)
}