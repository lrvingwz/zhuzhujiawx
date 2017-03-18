$(function(){
	
	$.ajax({
		type:"get",
//		url:"http://192.168.0.100/hotel/"+1,
		url:"../js/particulars.json",
		async:true,
		dataType:"json",
		processData: false,
		contentType: 'application/json',
		headers:{
			"authToken":"Q0IeuWoE6Hgn1hBRz2PYDIlg/lyO2rgxghLmZxuVuRAxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
		},
		success:function(res){
			console.log(res);
			console.log(res.response.body.hotel.ifCollection)
			//是否已经收藏
			if (res.response.body.hotel.ifCollection ==true) {
				$(".head-top-collect").find("img").attr("src","http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/396450384565528913.png");
			}else{
				$(".head-top-collect").find("img").attr("src","http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/634328392788238768.png");
			}
			$(".head-top").css("background","url(http://www.zuzuja.com/hotelpic/"+res.response.body.hotel.picurl+") no-repeat");
			$(".head-top").css("background-size",100+"%",100+"%");
			$(".head-address").text(res.response.body.hotel.name);//酒店名字
			$(".comment").text(res.response.body.hotel.commentList.length);//评论数
			$(".head-bottom-grade").text(res.response.body.hotel.score+"分");//评分
			$(".head-bottom-nm").text(res.response.body.hotel.address);//酒店地址
			$(".sect-nub").text("["+res.response.body.hotel.roomList.length+"]");//酒店类型数量
			$.each(res.response.body.hotel.facillitiesList, function(idx,item) {//酒店服务设施类型
				$(".serve").append($("<span>"+item.name+"</span>"));
			});
			$.each(res.response.body.hotel.roomList[0].roomType, function(idx,item) {//价格	
				$(".sect-name").text(item);
				$(".price").text(res.response.body.hotel.roomList[0].price);
			});
			$.each(res.response.body.hotHotels, function(idx,item) {//附近酒店
//				console.log(item);
				if (idx <= 1) {
					var picUrl = $("<a/>").append($("<img/>").attr("src","http://www.zuzuja.com/hotelpic/"+item.picurl));
						var span = $("<span>"+'￥'+'<span>'+item.area+'</span>'+'起'+"</span>");
						var a1 = $("<a>"+'<img src="../img/log-register/247374650953056219.png" />'+"</a>");
						var p1 = $("<p/>").text(item.name);
						var p2 = $("<p/>").text(item.address);
						var span1 = $("<span/>").text("不错："+item.score+"分");
						var span2 = $("<span/>").text("订");
						var span3 = $("<span/>").text("情侣约会")
						var p3 = $("<p/>").addClass("tese").append([span1,span2,span3]);
						var fotImgPic = $("<div/>").addClass("fot-img-pic").append(span);
						var fotImgCos = $("<div/>").addClass("fot-img-cos").append(a1);
						var fotImg2 = $("<div/>").addClass("fot-img-user").append([fotImgPic,fotImgCos]);
						var fotImg1 = $("<div/>").append(picUrl);
						var fontImg= $("<div>").addClass("fot-img").append([fotImg1,fotImg2]);
						var fotNearbyDiv = $("<div>").append([p1,p2,p3]);
						var fotNearby = $("<div/>").addClass("fot-nearby").append(fotNearbyDiv);
						var fotJiudian = $("<div/>").addClass("fot-jiudian").append([fontImg,fotNearby]);
						$("footer").append(fotJiudian);
				}else{
					$(".fot-all").on("touchstart",function(){
						var picUrl = $("<a/>").append($("<img/>").attr("src","http://www.zuzuja.com/hotelpic/"+item.picurl));
						var span = $("<span>"+'￥'+'<span>'+item.area+'</span>'+'起'+"</span>");
						var a1 = $("<a>"+'<img src="../img/log-register/247374650953056219.png" />'+"</a>");
						var p1 = $("<p/>").text(item.name);
						var p2 = $("<p/>").text(item.address);
						var span1 = $("<span/>").text("不错："+item.score+"分");
						var span2 = $("<span/>").text("订");
						var span3 = $("<span/>").text("情侣约会")
						var p3 = $("<p/>").addClass("tese").append([span1,span2,span3]);
						var fotImgPic = $("<div/>").addClass("fot-img-pic").append(span);
						var fotImgCos = $("<div/>").addClass("fot-img-cos").append(a1);
						var fotImg2 = $("<div/>").addClass("fot-img-user").append([fotImgPic,fotImgCos]);
						var fotImg1 = $("<div/>").append(picUrl);
						var fontImg= $("<div>").addClass("fot-img").append([fotImg1,fotImg2]);
						var fotNearbyDiv = $("<div>").append([p1,p2,p3]);
						var fotNearby = $("<div/>").addClass("fot-nearby").append(fotNearbyDiv);
						var fotJiudian = $("<div/>").addClass("fot-jiudian").append([fontImg,fotNearby]);
						$("footer").append(fotJiudian);
						$(".fot-all").css("display","none");
					})
				}
			
			});
			//收藏
			$(".head-top-collect").on("touchend",function(){
				if ($(this).find("img")[0].src =="http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/634328392788238768.png") {
					$(".popup").html("收藏成功").fadeIn();
					popup()
					$(this).find("img").attr("src","http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/396450384565528913.png");
					$.ajax({
						url:"http://192.168.0.100/collection",
						type:"post",
						dataType:"json",
						processData: false,
						contentType: 'application/json',
						headers:{
							"authToken":"Q0IeuWoE6Hgn1hBRz2PYDIlg/lyO2rgxghLmZxuVuRAxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
						},
						data:JSON.stringify({
							"hotelId":res.response.body.hotel.id
						}),
						success:function(res){
							if (res.response.header.rc == 0) {
								console.log(res)
								alert("收藏成功");
								
							}else{
								alert(res.response.header.rm)
							}
						
						},
						error:function(){
							console.log("提交失败")
						}
					});
				}else{
					$(this).find("img").attr("src","http://127.0.0.1:8020/zhuzhuja_webapp/src/img/log-register/634328392788238768.png");
					$(".popup").html("取消收藏").fadeIn();
					popup();
					$.ajax({
						url:"http://192.168.0.100/collection/"+res.response.body.hotel.id,
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
				}

			
			})
			//评论列表
//			$(".head-bottom-pic").on("touchstart",function(){
//				$.each(res.response.body.hotel.commentList, function(idx,item) {
//					console.log(idx,item);
//						
//					
//				});
//			})
			
		}
	});
	$(".sect-time").on("touchend",function(){
		$(".ta_date").animate({height:"3rem"},1000);
		$(".mask").css("display","block");
	})
//	$(document).on('touchend', function(e) {  
//          var e = e || window.event; //浏览器兼容性   
//          var elem = e.target || e.srcElement;  
//          while (elem) { //循环判断至跟节点，防止点击的是div子元素   
//              if (elem.id && elem.id == 'div_date1') {  
//                  return;  
//              }  
//              elem = elem.parentNode;  
//          }  
//          $(".ta_date").animate({height:"0"},1000);
//  });  
	
	//弹出提示窗
	function popup(){
		setTimeout(function(){
			$(".popup").fadeOut();
		},2000)
	}
});
