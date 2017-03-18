$(function(){
	
	//提示框剩余字数提示
	$(".txt").on("input propertychange",function(){
		var numb = $(".txt").val().length;
		console.log(numb);
		$(".shuru").text(numb);
		$('.shengyu').text(200-numb)
	})
	
	//保存
	$(".list li").find("span").on("touchend",function(){
		console.log("dsa")
	})
})
