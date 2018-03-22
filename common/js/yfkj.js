//var Serverurl = "http://admin.miaofq.com"
//var Serverurl = "http://mfqadmin.777-666.com/"
//var Serverurl = "http://192.168.1.108/"
var Serverurl = "http://192.168.1.105/"
function getuerinfo()//获取用户信息
{
    //alert(appcan.locStorage.getVal("userinfo"));
    return JSON.parse(appcan.locStorage.getVal("userinfo"));
}

function getphone() {
    var userinfo = getuerinfo();
    if (userinfo == null) {
        return -1;
    } else {
        return userinfo.Fphone;
    }
}
//
//function getsubstate() {
//	if (appcan.locStorage.getVal("fsubtag") == null) {
//		return 0;
//	}
//	return appcan.locStorage.getVal("fsubtag");
//}
//
//function offsubstate() {
//	appcan.locStorage.setVal("fsubtag", 1);
//}
//
//function opensubstate() {
//	appcan.locStorage.setVal("fsubtag", 0);
//}

function getuserid()//获取用户ID
{
    var userinfo = getuerinfo();
    if (userinfo == null) {
        return -1;
    } else {
        return userinfo.FuserId;
    }
}

function getuserstat() {

    var userinfo = getuerinfo();
    if (userinfo == null) {
        return -1;
    } else {
        return userinfo.FuserState;
    }
}

function getuserpassword() {
    var userinfo = getuerinfo();
    if (userinfo == null) {
        return -1;
    } else {
        return userinfo.Fpassword;
    }
}

function getuserFauthenticationLevel() {

    var userinfo = getuerinfo();
    if (userinfo == null) {
        return 0;
    } else {
        return userinfo.FauthenticationLevel;
    }
}

function cheackstat() {
    var userid = getuserid();
    if (userid == -1) {
        appcan.window.alert({
            title : "提示",
            content : "您没有登陆或者注册",
            buttons : ['取消', '去完成'],
            callback : function(err, data, dataType, optId) {
                if (data == 1) {
                    appcan.window.open({
                        name : "login",
                        aniId : 1,
                        data : "../login/login.html",
                    });
                }
            }
        });
        return 0;
    }
    var useralevel = getuserFauthenticationLevel();
    var userstat = getuserstat();
    if (useralevel == 0) {
        if (userstat == -1) {
            appcan.window.alert({
                title : "提示",
                //content: "您没有完成认证，是否去认证",
                content : "学生分期额度认证，自己付无需认证，是否去认证",
                buttons : ['取消', '去完认证'],
                callback : function(err, data, dataType, optId) {
                    if (data == 1) {
                        appcan.window.open({
                            name : "approve",
                            aniId : 1,
                            data : "../applay/approve/approve.html",
                        });
                    }
                }
            });
            return 0;
        } else {
            appcan.window.alert({
                title : "提示",
                content : "等待认证",
                buttons : ['知道了']
            });
            return 0;
        }
    }
}

function cheackPaystat() {
    var userid = getuserid();
    if (userid == -1) {
        appcan.window.alert({
            title : "提示",
            content : "您没有登陆或者注册",
            buttons : ['取消', '去完成'],
            callback : function(err, data, dataType, optId) {
                if (data == 1) {
                    appcan.window.open({
                        name : "login",
                        aniId : 1,
                        data : "../../login/login.html",
                    });
                }
            }
        });
        return 0;
    }
    var useralevel = getuserFauthenticationLevel();
    var userstat = getuserstat();
    if (useralevel == 0) {
        if (userstat == -1) {
            appcan.window.alert({
                title : "提示",
                //content: "您没有完成认证，是否去认证",
                content : "学生分期额度认证，自己付无需认证，是否去认证",
                buttons : ['取消', '去完认证'],
                callback : function(err, data, dataType, optId) {
                    if (data == 1) {
                        appcan.window.open({
                            name : "approve",
                            aniId : 1,
                            data : "../../applay/approve/approve.html",
                        });
                    }
                }
            });
            return 0;
        } else {
            appcan.window.alert({
                title : "提示",
                content : "等待认证",
                buttons : ['知道了']
            });
            return 0;
        }
    }
}

function tlpay(ext1, orderAmount, orderNo, ext2) {
    tlpayparm = "";
    tlpayparm = "orderNo=" + orderNo + "&orderAmount=" + orderAmount + "&ext2=" + ext2 + "&ext1=" + ext1;
    url = "http://admin.miaofq.com/tl/pay?" + tlpayparm;
    if (uexWidgetOne.getPlatform() == '0') {
        //IOS设备
        appcan.locStorage.setVal("tlurl", url);
        appcan.window.open("tl", "../tl/tl.html");
        //uexWidget.loadApp(url);
    } else {
        //android设备
        appcan.locStorage.setVal("tlurl", url);
        appcan.window.open("tl", "../tl/tl.html");
        //uexWidget.loadApp('android.intent.action.VIEW','text/html',url);
    }
}

function tlpayproduct(ext1, orderAmount, orderNo, ext2, productName, productDesc) {
    tlpayparm = "";
    tlpayparm = "orderNo=" + orderNo + "&orderAmount=" + orderAmount + "&ext2=" + ext2 + "&ext1=" + ext1 + "&productName=" + productName + "&productDesc=" + productDesc;
    url = "http://admin.miaofq.com/tl/pay?" + tlpayparm;
    if (uexWidgetOne.getPlatform() == '0') {
        //IOS设备
        appcan.locStorage.setVal("tlurl", url);
        appcan.window.open("tl", "../tl/tl.html");
        //uexWidget.loadApp(url);
    } else {
        //android设备
        appcan.locStorage.setVal("tlurl", url);
        appcan.window.open("tl", "../tl/tl.html");
        //uexWidget.loadApp('android.intent.action.VIEW','text/html',url);
    }
}

function sendmsg(monry) {

    var d = new Date();
    var str = '';
    str += d.getFullYear() + '年';
    str += d.getMonth() + '月';
    str += d.getDate() + '日';
    str += d.getHours() + '时';
    var msg = '【妙分期】亲爱的同学，您于' + str + '进行' + monry.toFixed(2) + '元还款，还款已成功，请登录应用查看。感谢您的使用，祝您生活愉快！';
    // alert(msg);
    // alert(getphone());
    appcan.ajax({
        url : Serverurl + "/user/sendmsg",
        type : "POST",
        dataType : 'json',
        data : {
            msg : msg,
            Fphone : getphone()
        },
        success : function(result) {
            // alert(result);

        },
        error : function(e) {

        }
    });
}

function getversion() {
    appcan.ajax({
        url : Serverurl + "/user/geta",
        type : "POST",
        dataType : 'json',
        success : function(result) {
            msg = result.Msg;
            if (msg == 1) {
                sversion = result.Data[0].Fversion;
            }
            if (version < sversion) {
                appcan.window.alert({
                    title : "提示",
                    content : "您的版本过低，请升级至最新版本",
                    buttons : ['马上升级'],
                    callback : function(err, data, dataType, optId) {
                        if (uexWidgetOne.getPlatform() == '0') {
                            //IOS设备
                            uexWidget.loadApp("https://appsto.re/cn/KNpvcb.i", '', '');
                            uexWidgetOne.exit(0);
                        } else {
                            //android设备
                            uexWidget.startApp("1", "android.intent.action.VIEW", '{"data":{"mimeType":"text/html","scheme":"http://android.myapp.com/myapp/detail.htm?apkName=com.dyzb.mfq"}}');
                            uexWidgetOne.exit(0);
                        }
                    }
                });
            }
        },
        error : function(e) {
            if (version < sversion) {
                appcan.window.alert({
                    title : "提示",
                    content : "您的版本过低，请升级至最新版本",
                    buttons : ['马上升级'],
                    callback : function(err, data, dataType, optId) {
                        if (uexWidgetOne.getPlatform() == '0') {
                            //IOS设备
                            uexWidget.loadApp("https://appsto.re/cn/KNpvcb.i", '', '');
                            uexWidgetOne.exit(0);
                        } else {
                            //android设备
                            uexWidget.startApp("1", "android.intent.action.VIEW", '{"data":{"mimeType":"text/html","scheme":"http://android.myapp.com/myapp/detail.htm?apkName=com.dyzb.mfq"}}');
                            uexWidgetOne.exit(0);
                        }
                    }
                });
            }
        }
    });
}

