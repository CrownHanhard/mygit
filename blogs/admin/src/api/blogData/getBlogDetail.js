const { blogDatas } = require("./blogTable");
module.exports=function(req, res) {
    // console.log(req.body)
    blogDatas.find({
        date:{
            $eq:req.body.id
        }
    }).then((data)=>{
        res.send(data)
    }).catch((err)=>{
        if(err)throw err;
    })
}