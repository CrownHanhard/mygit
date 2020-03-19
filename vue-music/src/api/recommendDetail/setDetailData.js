const request=require("request");
const express=require("express");
const {JSDOM}=require("jsdom");
const fs=require("fs");
const {detailTable}=require("./detailTable")
module.exports={
    getDetailData:function(req,res){
    request({
        method:"GET",
        url:"https://i.y.qq.com/n2/m/share/details/taoge.html",
        qs:{
            ADTAG:"newyqq.taoge",
            id:req.params.id
        }
    },function(err,response,body){
        let dom=new JSDOM(body,{runScripts:"dangerously"});
        let songlist=dom.window.firstPageData;
        // console.log(songlist)
       detailTable.find({
           id:req.params.id
       }).then((data)=>{
        //    console.log(data)
           if(data.length===0){
               let finalData={};//存储待添加到数据库的数据
               finalData.id=songlist.taogeData.id;//设置歌单id
               finalData.cover=songlist.taogeData.picurl||songlist.taogeData.picurl2;//设置歌单id
               finalData.title=songlist.taogeData.title;//设置歌单id
               finalData.tag=songlist.taogeData.tag;
               finalData.songlist=[];
               songlist.taogeData.songlist.forEach((item)=>{
                   let singer=item.singer;
                    finalData.songlist.push({
                        singer:singer,
                        mid:item.mid,
                        name:item.name
                    })
               })
               detailTable.create(finalData).then(()=>{
                   console.log("创建成功")
               });
               res.send(JSON.stringify(finalData));
           }else{
               res.send(JSON.stringify(data));
           }
       })
    })
}}
// app.listen(1235);