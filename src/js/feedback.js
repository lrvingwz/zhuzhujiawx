$(function(){
	
	$(".form-btn").on("touchend","input",function(){
		var texts = $("textarea").val();
		var email = $("[type='email']").val();
		var tel = $("[type='tel']").val();
		console.log(texts,email,tel)
		 $.ajax({
	    	type:"post",
	    	url:"http://192.168.0.100/feedback",
	    	async:true,
	    	dataType:"json",
			processData: false,
			contentType: 'application/json',
	    	headers:{
	    		"authToken":"Q0IeuWoE6Hgn1hBRz2PYDI6b+GZcsNqPey5XRB9MOcwxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
	    	},
	    	data:JSON.stringify({
		  		"content":texts,
		  		"email":email,
		  		"phoneNumber":tel
	    	}),
	    	success:function(res){
	  			console.log(res);
				if(res.response.header.rc == 0){
					
				}else{
					alert(res.response.header.rm)
				}
	    	},
	    	error:function(){
	    		alert("登录失败！")
	    	}
	    });
		
	})
});
