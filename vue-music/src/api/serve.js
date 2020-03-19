const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { getRecommendData } = require("./recommend/getRecommendData");
const { getDetailData } = require("./recommendDetail/setDetailData");
const { getSingerData } = require("./singer/getSingerData");
const { getSingerDetailData } = require("./singerDetails/getSingerDetailData")
const { getSongDetail } = require("./songDetail/getSongDetail")
const { getLyric } = require("./lyric/getLyric");
const { getRankData } = require("./rank/getRankData");
const { getRankDetail } = require("./rankDetail/getRankDetail");
const { getHotKey } = require("./hotKey/getHotKey")
const { getSearchResult } = require("./search/getSearchData");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.all("*", function (req, res, next) { //解决跨域请求问题
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json; charset=utf-8'
    });
    if (req.method === "OPTIONS") {
        res.status(200).send("OK")
        // eslint-disable-next-line no-console
        console.log("has option")
    } else {
        next()
    }
});
app.get('/api/recommenddata', getRecommendData)
app.get("/api/recommendDetail/:id", getDetailData)
app.get("/api/getSingerData", getSingerData)
app.post("/api/getSingerDetailData", getSingerDetailData);
app.post("/api/getSongDetailData", getSongDetail);
app.post("/api/getLyric", getLyric);
app.get("/api/getRankData", getRankData);
app.get("/api/getRankDetailData/:id", getRankDetail);
app.get("/api/getHotKey", getHotKey);
app.get("/api/getSearchResult/:id", getSearchResult);
app.listen(8023, () => {
    console.log('App listening on port 8023!');
});