const spiderRequest = require("spiderrequest");
const indexPage = require("../configs/spider/index");
const {URL} = require('url');
const path = require('path');
class PageData{
	static indexData(){
		return new Promise((resolve,reject)=>{
			new spiderRequest(indexPage).getContent()
				.then((data)=>{
					resolve(data);
				},(err)=>{
					reject(err);
				});
		});
	}
}
module.exports = PageData;