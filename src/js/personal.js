$(function(){
	//上传头像
	$(".nav").on("touchend",function(){
		
		console.log($(this).html())
	})
	//添加和人信息列表
	$(".list1").on("touchend","li",function(){
		
		console.log($(this).html())
	})
	
});
