$(document).ready(function () {
    // domain = "http://112.74.190.67:8080/sleepTime";
    //设置输入响应
    $("#userName").focus(function () {
        $("#userName").val("");
    });
    $("#pwd").focus(function () {
        $("#pwd").val("");
    });
    $("#userName").blur(function () {
        if ($("#userName").val() == "用户名") {
            $("#userName").val("用户名");
        }
    });
    $("#pwd").blur(function () {
        if ($("#pwd").val() == "密码") {
            $("#pwd").val("密码");
        }

    });

    // 给登录按钮注册单击事件的响应函数
    $("#login").click(function () {
        var userName = $("#userName").val();
        var pwd = rsaUtil.enc($("#pwd").val());
        var objChk = document.getElementById("checkCookie").checked;
        console.log(objChk);
        if (objChk) {
            document.cookie = "userName=" + userName + "pwd=" + pwd;
            alert(pwd);
            var expdate = new Date();
            expdate.setTime(expdate.getTime() + 14 * (24 * 60 * 60 * 1000));
            SetCookie(userName, pwd, expdate);
            console.log("userName=" + userName + "pwd=" + pwd);
        }

        $.ajax({
            type: "POST",
            url: domain + "/user/login",
            data: {
                userName: userName,
                pwd: pwd
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                var responseCode = data.responseCode;
                if (responseCode == "000000") {
                    window.location = "punch.html";
                } else {
                    alert(data.responseBody);
                }

            },
            error: function () {
                alert("登录失败");
            }
        });
    });
});
