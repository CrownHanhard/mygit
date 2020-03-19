const {rankTable} = require("./rankTable");

module.exports={
    getRankData:function (req,res,err) {
        rankTable.find({
        }).then((data)=>{
            res.send(data)
        })
    }
}