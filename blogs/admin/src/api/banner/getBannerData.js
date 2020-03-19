const { bannerDatas } =require("./bannerTable");
module.exports=function(req, res) {
    bannerDatas.find((err,result)=>{
        if(err)throw err;
        res.send(result)
    })
}