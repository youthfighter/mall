const http = require("http");
const path = require("path");
const url=require('url');
const PageData = require("./controllers/pageData"); 
const PORT = 5757;

http.createServer((request, response)=>{
	let pathname = url.parse(request.url).pathname;
	if(pathname.startsWith("/api")){
		PageData.indexData()
			.then((data)=>{
				response.write(JSON.stringify(data));
	    		response.end();
			},(err)=>{
				response.end("error");
			});
	}else{
		response.end("error");
	}

}).listen(PORT);