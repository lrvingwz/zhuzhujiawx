$(function(){
	//底部导航栏提交菜单
	$(".col3").on("touchend",function(){
		$('.order ul li').remove();
		$.ajax({
			url:"http://192.168.0.100/order/query",
			type:"post",
			dataType:"json",
			processData: false,
			contentType: 'application/json',
			data:JSON.stringify({
				"state":null
			}),
			headers:{
				"authToken":"Q0IeuWoE6Hgn1hBRz2PYDIkW1vSXMYks5VPOk0YY3ssxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nq09IxM+ctpVft+PD3yJ7urp5eTNBr/uVjiURzKPXfbOo="
			},
			success:function(res){
				console.log(res);
				if (res.response.header.rc ==0) {
					$.each(res.response.body, function(idx,item) {
						console.log(idx);	
						if (idx ==0) {
							console.log(item);
							$(".list1").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<p>待付款</p>'+
												'<a>付款</a>'+
												'<span>取消订单</span>'+
											'</div>'+
										'</div>'+
									'</li>'
							])

						}
						if (idx ==1) {
							console.log(item);
							$(".list1").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<p>待入住</p>'+
											'</div>'+
										'</div>'+
									'</li>'
							])
						}
						if (idx ==2) {
							console.log(item);
							$(".list1").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<p>待评价</p>'+
												'<span>去评论</span>'+
											'</div>'+
										'</div>'+
									'</li>'
							])
						}
						if (idx ==3) {
							console.log(item);
							$(".list1").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<span style="margin-top:1rem">退订</span>'+
											'</div>'+
										'</div>'+
									'</li>'
							])
						}
					});
				}else{
					alert(res.response.header.rm)
				};
	
			},
			error:function(){
				console.log("提交失败")
			}
				
		});
	})
	
	$(".title-list").on("touchend","li",function(){
    	var i = $(this).index();
    	$(this).addClass('select').siblings().removeClass('select');
		$('.order ul li').remove();
		console.log(i-1);
		i = i-1;
		if (i<0) {
			i = null;
		};
		$.ajax({
			url:"http://192.168.0.100/order/query",
			type:"post",
			dataType:"json",
			processData: false,
			contentType: 'application/json',
			data:JSON.stringify({
				"state":i
			}),
			headers:{
				"authToken":"Q0IeuWoE6Hgn1hBRz2PYDIkW1vSXMYks5VPOk0YY3ssxKvkuWo+jsT6yztY/4qgfs0+zxoAUFGeoGuEktdhMl4D6fDQw0XS57qsyTdicZdFiGYN0Tc7O6nMjnE1Rc5nq09IxM+ctpVft+PD3yJ7urp5eTNBr/uVjiURzKPXfbOo="
			},
			success:function(res){
				if (res.response.header.rc ==0) {
					$.each(res.response.body, function(idx,item) {
//						console.log(item);	
						if (item.state == 0) {
							$("ul").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<p>待付款</p>'+
												'<a>付款</a>'+
												'<span>取消订单</span>'+
											'</div>'+
										'</div>'+
									'</li>'
							]);
						}
						if (item.state == 1) {
							$("ul").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<p>待入住</p>'+
											'</div>'+
										'</div>'+
									'</li>'
							])
						}
						if (item.state == 2) {
							$("ul").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<p>待评价</p>'+
												'<span>评价</span>'+
											'</div>'+
										'</div>'+
									'</li>'
							])
						}
						if (item.state == 3) {
							$("ul").append([
									'<li>'+
										'<div class="list-cont">'+
											'<div class="list-details clear">'+
												'<div class="detail-lt">'+
													'<a><img src="http://www.zuzuja.com/hotelpic/'+item.hotel.picurl+'"/></a>'+
												'</div>'+
												'<div class="detail-rt">'+
													'<p>'+item.hotel.name+'</p>'+
													'<span>数量<span>1</span>间</span>'+
													'<span><span>'+TimeDay(item.intoTime)+'至'+TimeDay(item.leaveTime)+'(共'+'<span>'+differDay(item.leaveTime,item.intoTime)+'</span>'+'晚)'+'</span></span>'+
													'<span>'+'总价:'+'<span>'+item.totalPrice+'</span></span>'+
												'</div>'+
											'</div>'+
											'<div class="pic-btn clear">'+
												'<span style="margin-top:1rem">退订</span>'+
											'</div>'+
										'</div>'+
									'</li>'
							])
						}

					});
				}else{
					alert(res.response.header.rm)
				};

			},
			error:function(){
				console.log("提交失败")
			}
				
		});
	
    	
      
	})	
	//时间戳转换为xxxx-xx-xx时间格式
	function TimeDay(time){
		var timestamp = parseInt(String(time).substring(0,10));
		var newDate = new Date();
		newDate.setTime(timestamp * 1000);
		return newDate.toISOString().substring(5,10);
	}
	//相差天数
	function differDay(a,b){
		var differ = a-b;
		return parseInt(differ/1000/60/60/24);
	}
	console.log(TimeDay(1481936713000))
	//弹出提示窗
	function popup(){
		setTimeout(function(){
			$(".popup").fadeOut();
		},2000)
	}
	
});


  

