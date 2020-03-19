const { blogDatas } = require("./blogTable");
module.exports=function(req, res) {
    blogDatas.find((err,result)=>{
        if(err)throw err;
        res.send(result)
        // 第一阶段没做limit 处理 默认返回了全部数据
    })
}