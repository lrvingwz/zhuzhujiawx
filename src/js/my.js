$(function(){
	$.ajax({
		url:"http://192.168.0.100/user",
		type:"get",
		dataType:"json",
		processData: false,
		contentType: 'application/json',
		data:JSON.stringify({
			
		}),
		headers:{
			"authToken":"Q0IeuWoE6Hgn1hBRz2PYDBnSBAqX0J+HdEnoJGmCckAxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
		},
		success:function(res){
			if (res.response.header.rc == 0) {
				console.log(res.response.body);
				//用户头像
				if (res.response.body.headimgurl == null) {
					$(".head-m").find("a").find("img").attr("src","../img/399482166860371159.png");
				}else{
					$(".head-m").find("a").find("img").attr("src",res.response.body.headimgurl);
				}
				//用户名字
				if (res.response.body.username == null) {
					$(".head-name").text("匿名");
				}else{
					$(".head-name").text(res.response.body.username);
				}
				//用户性别
				if (res.response.body.source == null) {
					$(".head-type").find("img").remove("img");
					$(".head-type").text("未知");
				} else{
					$(".head-type").find("img").attr("src","../img/74721549155448446.png");
				}
			}else{
				console.log(res.response.header.rm);
				
			}
		}
	});
})
