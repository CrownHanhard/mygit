const path = require('path')
const fs = require('fs')
const { bannerDatas } =require("./bannerTable");
 module.exports=function(req, res) {
		var extname = path.extname(req.files[0].originalname);
		//拼接新的文件路径，文件加上后缀名
		var newPath = req.files[0].path + extname;
	
		//重命名
		fs.rename(req.files[0].path, newPath, function (err) {
			if (err) {
				res.send('上传失败')
			} else {
				bannerDatas.create({
					src:newPath,
					title:req.files[0].filename
				})
				res.send('上传成功')
			}
		})
	}

