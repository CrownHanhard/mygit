const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = require("body-parser")
const path = require('path')
const fs = require('fs')
// banner 模块
const setBannerData = require("./banner/setBannerData")
const getBannerData = require("./banner/getBannerData")
const deleteBannerData = require("./banner/deleteBannerData")
//blog 模块
const setBlogData = require("./blogData/setBlogData")
const getBlogData = require("./blogData/getBlogData")
const getBlogDetail = require("./blogData/getBlogDetail")

//推荐
const getRecommendData = require("./blogData/getRecommendData")
const getNewData=require("./blogData/getNewData");

//blog类型获取
const getTypeData = require("./blogData/getTypeData")

//分页获取
const getPagesData = require("./blogData/getPagesData")

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
// 上传文件请求代码块
{
    const upload = multer({ dest: './banner/bannerimage/' })
    app.use(upload.any())
    app.post('/api/setBannerData', setBannerData)
}
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.post('/api/setBlogData', setBlogData)
}

// 初始化请求模块
{
    app.get('/api/getBannerData', getBannerData)
    app.get('/api/getBlogData', getBlogData)
    app.get('/api/getRecommendData', getRecommendData)
    app.get('/api/getNewData', getNewData)
}
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.post('/api/getTypeData', getTypeData);
    app.post('/api/getBlogDetail',getBlogDetail);
    app.post('/api/getPagesData',getPagesData);

}
//删除文件请求代码块
{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.post('/api/deleteBannerData', deleteBannerData)
}
app.listen(1116);