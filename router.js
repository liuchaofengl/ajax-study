var express = require("express")
var router = express.Router()
router.get("/first",(req,res)=>{
	res.send("ok")
})



module.exports = router
