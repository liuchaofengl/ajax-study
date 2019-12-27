function ajax(options){
	var xhr = new XMLHttpRequest()
	var params = ''
	
	for(var key in options.data){
		result+= "?" + key +"=" +options.data[key] + "&"
	}
	var result = result.substring(0,result.length-1)
	
	if(options.type == "get"){
		options.url = options.url + params
		xhr.open(options.type,options.url)
		xhr.send()
	}
		
	if(options.type == "post"){
		var contentType = options["Content-Type"]
		xhr.setRequestHeader("Content-Type",contentType)
		if(contentType == "application/x-www-form-urlencoded"){
			xhr.send(params)
		}else{
			xhr.send(JSON.stringify(options.data))
		}
		
	}
	

	
	xhr.onload = function(){
		var responseText =xhr.responseText
		var contentType = xhr.getResponseHeader()
		if(contentType == "application/json"){
			console.log(JSON.parse(responseText))
		}else{
			console.log(responseText)
		}
		
	}
}


