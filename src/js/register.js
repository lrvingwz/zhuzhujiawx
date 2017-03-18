$(function(){
	
	//表单注册
	 $("#form-btn").on("touchend",function(){
		var formObj = {};
		var telephone=$(".tel").val();
	    var telephone1=/^[1]{1}[0-9]{10}/;
	    if(telephone.length==0){
	        $(".popup").html("电话不可以为空").fadeIn();
	        popup()
	        return false;
	    }else if(!telephone1.test(telephone)){
	        $(".popup").html("请输入合法电话").fadeIn();
	        popup()
	        return false;
	    }else{
	    	formObj.tel = telephone;
	    };
	    
	    var txt = $(".txt").val();
		if(txt != " "){
	    	formObj.txt = txt;
	    	
	    	console.log("re")
		}else{
			$(".popup").html("验证码不能为空").fadeIn();
			popup()
	    };
	    
	    var password=$(".paswd").val();
	    var password1=/^[0-9]{6,10}/;
	    if(password.length==0){
	        $(".popup").html("密码不可以为空").fadeIn();
	        popup()
	        return false;
	    }else if(!password1.test(password)){
	        $(".popup").html("请输入6-10位的数字密码").fadeIn();
	        popup()
	        return false;
	    }else{
	    	formObj.paswd = password;
	    };
	    
		var cpassword = $(".cpaswd").val();
		if(password != cpassword){
			$(".popup").html("重复次密码不一致").fadeIn();
			popup()
			$(".cpaswd").val("");
			return false;
		}else{
	    	formObj.cpaswd = cpassword;
	   };
	   console.log(formObj);
	   $.ajax({
			url:"http://192.168.0.100/auth/register",
			type:"post",
			dataType:"text",
			processData: false,
			contentType: 'application/json',
			data: JSON.stringify({
				"mobilePhone":formObj.tel,
				"code":formObj.txt,
				"password":formObj.paswd,
				"confirmPwd":formObj.cpaswd
			}),
			success:function(res){
				var item= JSON.parse(res);
					console.log(item)
				if (item.response.header.rc == 0) {
					console.log(item)
				}else{
					alert(item.response.header.rm);
				}
				console.log(res);
				console.log(item);
			},
			error:function(){
				console.log("提交失败")
			}
		});
	   
	});
	
	
	$(".ctxt").on("touchend",function(){
		console.log("dainji");
		var tel = $(".tel").val();
		if (tel == ""|| tel == null) {
			console.log("dadsa")
			$(".popup").html("请输入手机号").fadeIn()
			popup();
		}
		else{
			$(".popup").html("验证码发送成功").fadeIn();
			popup();
			$.ajax({
				url:"http://192.168.0.100/sms/code/"+tel+"/registry",
				type:"get",
				dataType:"text",
				processData: false,
				contentType: 'application/json',
				success:function(res){
					console.log(res)
				}
			});	
		}

	});
	$("#form-log").on("touchend",function(){
		window.location.href="../tpl/login.html";
	});
	function addCookie(name,value,days,path){   /**添加设置cookie**/  
	    var name = escape(name);  
	    var value = escape(value);  
	    var expires = new Date();  
	    expires.setTime(expires.getTime() + days * 3600000 * 24);  
	    path = path == "" ? "" : ";path=" + path; 
	    var _expires = (typeof days) == "string" ? "" : ";expires=" + expires.toUTCString();  
	    document.cookie = name + "=" + value + _expires + path;  
	};
	//弹出提示窗
	function popup(){
		setTimeout(function(){
			$(".popup").fadeOut();
		},2000)
	}
});
	