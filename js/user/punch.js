$(document).ready(function () {
//	domain = "http://112.74.190.67:8080/sleepTime";
    $.get(domain + "/sleepRecord/queryRecord", {},
        function (data, status) {
    						var responseCode = data.responseCode;
    						if(responseCode == "900001"){
    								alert("登录超时，请重新登录");
    							window.location = domain + "/html/login.html";
    						}
            var records = data.responseBody;
            for (var i = 0; i < records.length; i++) {
                var creat_date = records[i].create_date;
                var create_time = records[i].create_time;
                var actionType = records[i].actionType;
                var actionName;
                switch (actionType) {
                    case 0:
                        actionName = "起床";
                        break;
                    case 1:
                        actionName = "睡觉";
                        break;
                    case 2:
                        actionName = "午休睡";
                        break;
                    case 3:
                        actionName = "午休起";
                        break;
                    default:
                        actionName = "未知类型";
                }
                $("#recording").append("<tr><td>" + actionName + "</td><td>" + creat_date + "</td><td>" + create_time + "</td></tr>");
            }
            $("#recording").wrap("<table>");

            //添加系统时间
            var now = new Date();
            $("#footer").append(now.toLocaleString());
        });

    //给打卡单击事件的响应函数
    $("td[actionType]").click(function (event) {
        var a = event.target;
        console.log(a.getAttribute("actionType"));
        var actionType = a.getAttribute("actionType");
        $.get(domain + "/sleepRecord/addRecord", {
            actionType: actionType
        }, function (data, status) {
            // alert("打卡成功");
            var responseCodes = data.responseCode;
            if (responseCodes == 000000) {
                alert("打卡成功");
                window.location.reload(true);
            } else {
                alert("您已打卡，请勿重复打卡");
            }

        });
    });

});
