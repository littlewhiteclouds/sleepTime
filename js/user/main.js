define(function() {
	return {
		init : function() {
			this.bind1();
			this.bind2();
		},
		//给输入框设定响应事件
		bind1 : function() {
			domain = "http://112.74.190.67:8080/sleepTime";
//			domain = "http://192.168.43.253:8080/sleepTime";
			$("#userName").focus(function() {
				$("#userName").val("");
			});
			$("#pwd").focus(function() {
				$("#pwd").val("");
			});
			
			$("#userName").blur(function() {
				if ($("#userName").val() == "用户名") {
					$("#userName").val("用户名");
				}
			});
			$("#pwd").blur(function() {
				if ($("#pwd").val() == "密码") {
					$("#pwd").val("密码");
				}
			});
		},
		//给注册按钮设置响应事件
		bind2 : function() {
			$("#register").click(function() {
				var userName = $("#userName").val();
				var pwd = $("#pwd").val();

				$.ajax({
					type : "POST",
					url : domain + "/user/createUser",
					data : {
						userName : userName,
						pwd : pwd,
					},
					dataType : "json",
					success : function(data) {
						var responseCode = data.responseCode;
						if (responseCode == "000000") {
							alert("注册成功");
							window.location = "login.html";
						} else {
							alert(data.responseBody);
						}

					},
					error : function() {
						alert("注册失败");
					}
				});
			});
		}

	}
})
