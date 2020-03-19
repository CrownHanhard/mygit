// const express=require("express");
const { recommendTable } = require("./recommendTable");
// let app=express(); 
// app.get('/api/recommenddata', (req, res) => {
//     recommendTable.find({},{
//         __v:false,
//         _id:false
//     }).then((data)=>{
//         res.send(JSON.stringify(data));
//     }).catch((err)=>{
//         if(err)throw err;
//     });
// });
// app.listen(9527);

module.exports = {
    getRecommendData: (req, res) => {
        recommendTable.find({}, {
            __v: false,
            _id: false
        }).then((data) => {
            res.send(JSON.stringify(data));
        }).catch((err) => {
            if (err) throw err;
        });
    }
}