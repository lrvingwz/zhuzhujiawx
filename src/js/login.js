$(function(){
	
	/*保存用户的登录信息到cookie中。当登录页面被打开时，就查询cookie*/  
//  var userNameValue = getCookieValue("userName");  
//  $(".ipt-tel").val(userNameValue);
//  var userPassValue = getCookieValue("userPass");  
//  $(".ipt-pasd").val(userPassValue);
	
	$(".logBtn").on("touchend",function(){
		var userName =  $(".ipt-tel").val();
	    if(userName == ''){  
	        $(".popup").html("请输入用户名").fadeIn();
	        popup()
	        return;  
	    }  
	    var userPass =  $(".ipt-pasd").val();
	    if(userPass == ''){  
	         $(".popup").html("请输入密码").fadeIn();
	         popup()
	        return;  
	    }  
		console.log("2323")
//	    //添加cookie  
//      addCookie("userName",userName,7,"/");  
//      addCookie("userPass",userPass,7,"/");  
		var cookie = getCookieValue("authToken"); 
		console.log(cookie)
        $.ajax({
        	type:"post",
        	url:"http://192.168.0.100/auth/mobile/login",
        	async:true,
        	dataType:"json",
			processData: false,
			contentType: 'application/json',
        	data:JSON.stringify({
        		"mobilePhone":userName,
        		"password":userPass,
        	}),
        	success:function(res){
        		console.log(res);
     
				if(res.response.header.rc == 0){
					alert("登录成功！")
//      		    window.location.href = "../index.html"
				}else{
					alert(res.response.header.rm)
				}
        	},
        	error:function(){
        		alert("登录失败！")
        	}
        });
	})
	
	function addCookie(name,value,days,path){   /**添加设置cookie**/  
	    var name = escape(name);  
	    var value = escape(value);  
	    var expires = new Date();  
	    expires.setTime(expires.getTime() + days * 3600000 * 24);  
	    path = path == "" ? "" : ";path=" + path; 
	    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();  
	    document.cookie = name + "=" + value + _expires + path;  
	}  
	function getCookieValue(name){  /**获取cookie的值，根据cookie的键获取值**/  
	    var name = escape(name);  
	    var allcookies = document.cookie;  
	    name += "=";  
	    var pos = allcookies.indexOf(name);    
	    if (pos != -1){                                             
	        var start = pos + name.length;                 
	        var end = allcookies.indexOf(";",start);        
	        if (end == -1) end = allcookies.length;       
	        var value = allcookies.substring(start,end); 
	        return (value);                          
	    }else{  
	        return "";  
	    }  
	}  
	function deleteCookie(name,path){   
	    var name = escape(name);  
	    var expires = new Date(0);  
	    path = path == "" ? "" : ";path=" + path;  
	    document.cookie = name + "="+ ";expires=" + expires.toUTCString() + path;  
	}  
	//弹出提示窗
	function popup(){
		setTimeout(function(){
			$(".popup").fadeOut();
		},2000)
	}
	
	 
	
	
});
