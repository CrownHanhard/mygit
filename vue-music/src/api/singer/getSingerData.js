
const {singerTable} = require("./singerTable");

// app.get("/api/getSingerData",function (req,res,err) {
//     singerTable.find({},{
//         _id:false,
//         __v:false
//     }).then((data)=>{
//         res.send(JSON.stringify(data));
//     })
// })

module.exports={
    getSingerData:function (req,res,err) {
        singerTable.find({},{
            _id:false,
            __v:false
        }).then((data)=>{
            res.send(JSON.stringify(data));
        })
    }
}