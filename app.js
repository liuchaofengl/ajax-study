var express = require("express")
var app = express()
var path = require("path")
var router = require("./router.js")

app.use(router)

//开放公共资源public，express.static 就是一个中间件
app.use("/public",express.static(path.join(__dirname,"/public/")))
//开放node_modules里面的资源
app.use("/node_modules",express.static(path.join(__dirname,"/node_modules/")))





app.listen(3000,function(){
	console.log("server is running...")
})
