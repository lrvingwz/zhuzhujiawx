$(function(){
	$.ajax({
		url:"http://192.168.0.100/collection/query",
		type:"post",
		dataType:"json",
		processData: false,
		contentType: 'application/json',
		headers:{
			"authToken":"Q0IeuWoE6Hgn1hBRz2PYDIlg/lyO2rgxghLmZxuVuRAxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
		},
		data:JSON.stringify({
			
		}),
		success:function(res){
			if (res.response.header.rc == 0) {
				console.log(res.response.body);
				$.each(res.response.body, function(idx,item) {
					console.log(item)
					//上
					var fotImgDiv = $("<div/>").append($("<a/>").append($("<img />").attr("src","http://www.zuzuja.com/hotelpic/"+item.picurl)));
					var partImg1 = $("<img />").attr("src","../img/log-register/761130809719430481.png");
					var partImg2 = $("<img />").attr("src","../img/log-register/396450384565528913.png");
					var partDiv = $("<div/>").addClass("fot-tu").append([partImg1,partImg2])
					var fotPart = $("<div/>").addClass("fot-part").append(partDiv);
					var fotImgPic = $("<div/>").addClass("fot-img-pic").append($("<span>"+"￥"+'<span>'+item.lowPrice+'</span>'+"/晚"+"</span>"));
					var fotImgCos = $("<div/>").addClass("fot-img-cos").append($("<a/>").append($("<img />").attr("src","../img/timg.jpg")));
					var fotImgUser = $("<div/>").addClass("fot-img-user").append([fotImgPic,fotImgCos]);
					var fotImg = $("<div/>").addClass("fot-img").append([fotImgDiv,fotPart,fotImgUser]);
					
					//下
					var p1 = $("<p/>").text(item.name);
					var p2 = $("<p/>").text(item.address);
					var span1 = $("<span/>").text("不错："+item.score+"分");
					var span2 = $("<span/>").text("订");
					var span3 = $("<span/>").text("情侣约会")
					var p3 = $("<p/>").append([span1,span2,span3]);
					var fotNearby = $("<div/>").addClass("fot-nearby").append([p1,p2,p3]);
					var div = $("<div/>").append(fotNearby);
					//总
					var jiuDian = $("<div/>").addClass("fot-jiudian").append([fotImg,div]);
					$("article").append(jiuDian);
					
					partImg2.on("touchend",function(){
						console.log($(this).css("background"))
						if ($(this)[0].src =="http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/396450384565528913.png") {
							$(this).attr("src","http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/634328392788238768.png");
							$.ajax({
								url:"http://192.168.0.100/collection/"+item.id,
								type:"delete",
								dataType:"json",
								processData: false,
								contentType: 'application/json',
								headers:{
									"authToken":"Q0IeuWoE6Hgn1hBRz2PYDIlg/lyO2rgxghLmZxuVuRAxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
								},
								success:function(res){
									console.log(res)
									alert("取消收藏")
								
								},
								error:function(){
									console.log("提交失败")
								}
							});
						}else{
							$(this).attr("src","http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/396450384565528913.png");
						};
						$(this).parent().parent().parent().parent().remove();
					});
				});
			}else{
				alert(res.response.header.rm)
			}
		
		},
		error:function(){
			console.log("提交失败")
		}
	});
});
