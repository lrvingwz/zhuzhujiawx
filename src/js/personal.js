$(function(){
	//上传头像
//	$(".nav").on("touchend",function(e){
//		e.stopPropagation(); 
//		if ($(".nav-list").hasClass("foot-popup")) {
//			$(".nav-list").removeClass("foot-popup");
//			$(".mask").hide();
//		}else{
//			$(".nav-list").addClass("foot-popup").siblings().removeClass("foot-popup");
//			$(".mask").show();
//		}
//		return false;
//	})
	//添加和人信息列表
		console.log($(".list1").find("li"));
		var personalList = $(".list1").find("li");
		$.each(personalList, function(idx,item) {
			console.log(item)
			if (idx == 0) {//昵称
				$(this).on("touchend",function(){
					if ($(".nichen").hasClass("foot-left")) {
						$(".nichen").removeClass("foot-left");
						
					}else{
						$(".nichen").addClass("foot-left");
						
					};
				});
			};
			if (idx == 1) {//个人简介
				$(this).on("touchend",function(){
					if ($(".brief").hasClass("foot-left")) {
						$(".brief").removeClass("foot-left");
						
					}else{
						$(".brief").addClass("foot-left");
						
					};
				});
			};
			if (idx==2) {//性别
				$(this).on("touchend",function(e){
						e.stopPropagation(); 
					if ($(".nav-sex").hasClass("foot-popup")) {
						$(".nav-sex").removeClass("foot-popup");
						$(".mask").hide();
					}else{
						$(".nav-sex").addClass("foot-popup").siblings().removeClass("foot-popup");
						$(".mask").show();
					};
					return false;
				});
			};
			if (idx == 4) {//昵称
				$(this).on("touchend",function(){
					if ($(".zhiye").hasClass("foot-left")) {
						$(".zhiye").removeClass("foot-left");
						
					}else{
						$(".zhiye").addClass("foot-left");
						
					};
				});
			};
			if (idx==5) {//星座
				$(this).on("touchend",function(e){
					e.stopPropagation(); 
					if ($(".nav-star").hasClass("foot-popup")) {
						$(".nav-star").removeClass("foot-popup");
						$(".mask").hide();
					}else{
						$(".nav-star").addClass("foot-popup").siblings().removeClass("foot-popup");
						$(".mask").show();
					};
					return false;
				});
			};
			if (idx==6) {//血型
				$(this).on("touchend",function(e){
					e.stopPropagation(); 
					if ($(".nav-blood").hasClass("foot-popup")) {
						$(".nav-blood").removeClass("foot-popup");
						$(".mask").hide();
					}else{
						$(".nav-blood").addClass("foot-popup").siblings().removeClass("foot-popup");
						$(".mask").show();
						return false;
					};
				});
			};
			if (idx == 7) {//故乡
				$(this).on("touchend",function(){
					if ($(".hometown").hasClass("foot-left")) {
						$(".hometown").removeClass("foot-left");
						
					}else{
						$(".hometown").addClass("foot-left");
						
					};
				});
			};
		});
		//选择性别
//		$(".nav-sex").find("li");
		$.each($(".nav-sex").find("li"), function(idx,item) {
			console.log(item);
			if (idx<2) {
				$(this).on("touchend",function(){
					console.log($(this).text());
					$(".sex").text($(this).text())
				})
			}
			if(idx==2){
				$(this).on("touchend",function(){
					$(".nav-sex").removeClass("foot-popup");
					$(".mask").hide();
				})
			}
		});
		//选择星座
		var a = {};
		$.each($(".nav-star").find("li"), function(idx,item) {
			console.log(idx);
			var moved = false;
			
			if (idx>0) {
				$(this).on("touchmove",function(){
					moved = true;
				})
				$(this).on("touchend",function(e){
					e.preventDefault();
					a.va = $(this).text();
					console.log(a.va)
				})
			}
		});
		$(".left-span").on("touchend",function(){
			$(".nav-star").removeClass("foot-popup");
			$(".mask").hide();
		});
		$(".right-span").on("touchend",function(){
			$(".nav-star").removeClass("foot-popup");
			$(".mask").hide();
			$(".zhiye-nm").text(a.va)
		});
		//选择血型
		$.each($(".nav-blood").find("li"), function(idx,item) {
			if (idx == 4) {
				$(this).on("touchend",function(){
					console.log($(this));
					$(".nav-blood").removeClass("foot-popup");
					$(".mask").hide();
				})
			}
			$(this).on("touchend",function(){
				console.log($(this));
				$(".xuexin-nm").text($(this).text())
			})
			
		});
//		$("body").on("touchstart", function(e) {
//			 e.preventDefault();
//			 startX = e.originalEvent.changedTouches[0].pageX,
//			 startY = e.originalEvent.changedTouches[0].pageY;
//		});
//		$(".nav-star").on("touchmove", function(e) {
//			 e.preventDefault();
//			 moveEndX = e.originalEvent.changedTouches[0].pageX,
//			 moveEndY = e.originalEvent.changedTouches[0].pageY,
//			 X = moveEndX - startX,
//			 Y = moveEndY - startY;
//			   
//			 if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
//			  	alert("left 2 right");
//			 }
//			 else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
//			  	alert("right 2 left");
//			 }
//			 else if ( Math.abs(Y) > Math.abs(X) && Y > 0) {
//			  	alert("top 2 bottom");
//			 }
//			 else if ( Math.abs(Y) > Math.abs(X) && Y < 0 ) {
//			  	alert("bottom 2 top");
//			 }
//			 else{
//			  	alert("just touch");
//			 }
//		});
		//个人简介/故乡,向右移动按钮
		$(".list-right").on("touchend",function(){
			if ($(".brief").hasClass("foot-left")||$(".hometown").hasClass("foot-left")) {
				$(".brief").removeClass("foot-left");
				$(".hometown").removeClass("foot-left");
			};
		});
		//昵称向右移动按钮
		$(".nichen-right").on("touchend",function(){
			if ($(".nichen").hasClass("foot-left")) {
				$(".nichen").removeClass("foot-left");
			};
		});
		//职业向右移动按钮
		$(".zhiye-right").on("touchend",function(){
			if ($(".zhiye").hasClass("foot-left")) {
				$(".zhiye").removeClass("foot-left");
			};
		});
		//市级向右移动按钮
		$(".city-right").on("touchend",function(){
			if ($(".city").hasClass("foot-left")) {
				$(".city").removeClass("foot-left");
			};
		});
		//昵称保存
		$(".nichen-save").on("touchend",function(){
			$(".nichen-nm").text($("#nichen").val());
			$(".nichen").removeClass("foot-left");
		});
		//职业保存
		$(".zhiye-save").on("touchend",function(){
			$(".zhiye-nm").text($("#zhiye").val());
			$(".zhiye").removeClass("foot-left");
		});
		//个人简介保存
		$(".brief-save").on("touchend",function(){
			console.log($(".txt").val());
			$(".brief-span").text($(".txt").val());
			$(".brief").removeClass("foot-left");
			
		});
		$(".guangdong").on("touchend",function(){
			console.log("22")
			if ($(".city").hasClass("foot-left")) {
				$(".city").removeClass("foot-left");
				
			}else{
				$(".city").addClass("foot-left");
				
			};
		});
		
		//点击空白处隐藏上滑动栏
		$(document).click(function (e) { 
		    var navSex = $('.nav-sex');
		    var navStar = $(".nav-star");
		    var navBlood = $(".nav-blood");
		    if(!navSex.is(event.target) && navSex.has(event.target).length === 0 ||!navStar.is(event.target) && navStar.has(event.target).length === 0 ||!navBlood.is(event.target) && navBlood.has(event.target).length === 0 ){ 
			    navSex.removeClass("foot-popup");
			    navStar.removeClass("foot-popup");
			    navBlood.removeClass("foot-popup");
			    $(".mask").hide();
		    };
		});
	 $.ajax({
        	type:"PUT",
        	url:"http://192.168.0.100/user",
        	async:true,
        	dataType:"json",
			processData: false,
			contentType: 'application/json',
        	data:JSON.stringify({
//      		"headimgurl":  //头像
			    "username":"老王",//名字
			    "mobilePhone":"15885065915", //手机号
			    "sex":"男",//性别
			   	"introduction":"无",//介绍
			    "blood":"A",//血型
			    "constellation":"狮子座",//星座
			    "job":"非洲开荒",//职业
			    "age":"18",//年龄
				"address":"赞比亚"//故乡
        	}),
        	headers:{
        		"authToken":"Q0IeuWoE6Hgn1hBRz2PYDBRi931lu/cWxA4SO9U6oA8xKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMly/zHhqogyb2vSH5ZYpL71IaxlqHZf0mkMI7xbhOq4Vy1f2EDux61+J7Ky8t/17YtgGaKvG1rsmenqsQ1isitHw="
        	},
        	success:function(res){
        		console.log(res);
     
				if(res.response.header.rc == 0){	
					console.log("上传成功!")
//      		    window.location.href = "../index.html"
				}else{
					alert(res.response.header.rm)
				};
        	},
        	error:function(){
//      		alert("登录失败！")
        	}
        });
});
