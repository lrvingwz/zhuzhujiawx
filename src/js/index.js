$(function(){
	// 头部轮播
	var mySwiper = new Swiper('.swiper-container',{
		autoplay : 5000,
		autoplayDisableOnInteraction : false,
		loop : true,
	});
	
	
	//数据请求
//	$.ajax({
//		url:"http://192.168.0.100/hotel/home",
//		dataType : "json",
//		headers:{
//			"authToken":"Q0IeuWoE6Hgn1hBRz2PYDDEMQCYohD2oDpbzpOvC+jcxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nqVDjyHkw/oFZY4BcxDHJNJmM2v9v9LRNgtj5cLECyeqM="
//		},
//		success:function(result){
//			console.log(result);
//			console.log(result.response.header.rc)
//			if(result.response.header.rc == 401){
//				alert("请登录！")
////				window.location.href = "tpl/login.html"
//			}
//			if (result.response.header.rc == 400) {
//				alert(result.response.header.rm)
//			}
//			if (result.response.header.rc == 0) {
//				console.log("登录成功!");
//				//主体列表
//				$.each(result.response.body.hotelTyles, function(idx,hoteles) {
//					console.log(idx,hoteles);
//					var nacLi = $("<li/>").addClass("col-xs-3");
//					var div = $("<div/>").addClass("nav-li").attr("id",idx).append(a);
//					var a = $("<a/>")
//					a.append($("<img/>").attr("src",hoteles.image));
//					a.append($("<span/>").text(hoteles.name));
//					div.append(a);
//					nacLi.append(div);
//					$(".nav-list").append(nacLi)
//				});
//				//精品推荐
//				$.each(result.response.body.hotels, function(idx,hots) {
////					console.log(idx,hots);
//					var li = $("<li/>").addClass("tj-li").attr("id",hots.id);
//					var tjFirst = $("<div/>").addClass("tj-first");
//					var tjImg = $("<div/>").addClass("tj-img");
//					var tjPicIdx = $("<div/>").addClass("tj-pic-idx");
//					var tjPic = $("<div/>").addClass("tj-pic");
//					
//					var tjPcLt = $("<div/>").addClass("tj-pc-lt");
//					var tjPcLtSp1 =$("<span>"+'￥'+'<span class="tj-pc-nub">' + hots.area + '</span>'+'/晚'+"</span>");
//					var tjPcLtSp2 = $("<span/>").attr("title",hots.address).text(hots.address);
//					tjPcLt.append([tjPcLtSp1,tjPcLtSp2])
//					var tjPcRt = $("<div/>").addClass("tj-pc-rt");
//					var tjPcRtImg = $("<img/>").attr("src","img/timg.jpg")
//					var tjPcRtA = $("<a/>").append(tjPcRtImg)
//					tjPcRt.append(tjPcRtA)
//					tjPic.append([tjPcLt,tjPcRt])
//					var tjImgimg = $("<img/>").attr("src","http://www.zuzuja.com/hotelpic/"+hots.picurl).addClass("tj-img-rt");
//					var tjImgA= $("<a/>").append(tjImgimg);
//					var spanImg = $("<img/>").attr("src","img/timg.jpg");
//					var tjspan = $("<span/>").append(spanImg);
//					
//					var tjLast = $("<div/>").addClass("tj-last");
//					var div1 = $("<div/>").append($("<span/>").text(hots.name));
//					var div2 = $("<div/>").addClass("tj-last-int").append($("<span/>").text("整套出租/3张床铺/宜居四人"));;
//					var div3 = $("<div/>");
//					var lastSpanImg2 = $("<img />").attr("src","img/timg.jpg")
//					var lastSpanImg3 = $("<img />").attr("src","img/timg.jpg")
//					var lastSpan1 =$("<span>"+'<img src="img/timg.jpg" />'+'速订'+"</span>");
//					var lastSpan2 =$("<span>"+'<img src="img/timg.jpg" />'+'实拍'+"</span>");
//					var lastSpan3 =$("<span>"+'<img src="img/timg.jpg" />'+'验证'+"</span>");
//					div3.append([lastSpan1,lastSpan2,lastSpan3])
//					tjImg.append([tjImgA,tjspan])
//					tjLast.append([div1,div2,div3])
//					tjFirst.append([tjImg,tjPicIdx,tjPic]);
//					li.append([tjFirst,tjLast]);
//					$(".tj-list").append(li);
//					
//				});
//				//系统公告
//				$.each(result.response.body.topNewsTourism, function(idx,tps) {
//	//				console.log(idx,tps);
//					var div = $("<div/>").addClass("swiper-slide nav-list-li").attr("id",idx);
//					var span = $("<span/>").addClass("nav-list-left").text(tps.title);
//					var a = $("<a/>").addClass("nav-list-a");
//					var span1 = $("<span/>").text(tps.content);
//					var img = $("<img/>").attr("src",tps.Images);
//					img.appendTo(a)
//					a.append(span1)
//					div.append(span);
//					div.append(a);
//					$(".comm").append(div);
//				});
				// 系统公告轮播
				var mySwiper1 = new Swiper('#swiper-container1',{
					autoplay : 2000,
					direction : 'vertical',
					autoplayDisableOnInteraction : false,
					loop : true,
				});
//			}
//		},
//		error:function(){
//			console.log("请求失败")
//		}
//		
//	});
	
})
