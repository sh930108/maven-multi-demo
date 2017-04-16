$(function(){
	tabClose();
	tabCloseEven();
})

var _menus;
function initLeftMenu(_params,userType,first) {
	if(first) {
		if(userType==1) {
			_menus = {"menus":[
				{"menuid":"baseInfo","icon":"icon-sys","menuname":"乘客信息","url":root+"/message/base_info.htm?userType=1&receiveId="}
			]};
		}else{
			_menus = {"menus":[
				{"menuid":"baseInfo","icon":"icon-sys","menuname":"司机信息","needParams":["receiveId"],"url":root+"/message/base_info.htm?userType=2"},
				{"menuid":"orderInfo","icon":"icon-sys","menuname":"订单信息","needParams":["driverId","driverMob"],"url":root+"/report/order/msg_order_info.htm?ps=5"}
			]};
		}
		var menulist="";
	    $.each(_menus.menus, function(i, n) {
	    	var iframe = '<iframe id="iframe'+n.menuid+'" scrolling="auto" frameborder="0" style="height:100%;width:100%;" src=""></iframe>';
	        menulist += '<div title="'+n.menuname+'" icon="'+n.icon+'" style="overflow:auto;">'+iframe+'</div>';
	    })
		$(".easyui-accordion").append(menulist);
		$(".easyui-accordion").accordion();
	}else {
		$.each(_menus.menus, function(i, n) {
			var paramStr = "";
			var needParams = n.needParams;
			for(var num=0;num < needParams.length;num++) {
				paramStr += "&" + needParams[num] + "=" + _params[needParams[num]];
			}
			$("#iframe"+n.menuid).attr("src",n.url+paramStr);
	    })
	}
}

var tabNum = 0;
function addTab(subtitle,url,receiveId){
	if(!$('#tabs').tabs('exists',receiveId)){
		if(tabNum >= 10) {
			alert("最多只能打开10个对话框");
			return;
		}
		tabNum++;
		$('#tabs').tabs('add',{
			title:subtitle,
			content:createFrame(url,receiveId),
			receiveId:receiveId,
			closable:true,
			width:$('#mainPanle').width()-10,
			height:$('#mainPanle').height()-50
		});
	}else{
		$('#tabs').tabs('select',receiveId);
	}
	tabClose();
}

function createFrame(url,receiveId)
{
	var s = '<iframe id="mainFrame'+receiveId+'" name="mainFrame'+receiveId+'" scrolling="no" frameborder="0"  src="'+url+'" style="width:100%;height:100%;"></iframe>';
	return s;
}

function closeAllTab() {
	$('.tabs-inner').each(function(i,n){
		var liId = $(n).parent().attr("id");
		$('#tabs').tabs('close',liId);
	});	
}

function closeTabById(liId) {
	$('#tabs').tabs('close',"tab"+liId);
}
function tabClose()
{
	/*双击关闭TAB选项卡*/
	$(".tabs-inner").dblclick(function(){
		var id = $(this).parent().attr("id");
		//var subtitle =$(this).children("span").text();
		$('#tabs').tabs('close',id);
	})

	$(".tabs-inner").bind('contextmenu',function(e){
		$('#mm').menu('show', {
			left: e.pageX,
			top: e.pageY
		});
		var id = $(this).parent().attr("id");
		//var subtitle =$(this).children("span").text();
		$('#mm').data("currtab",id);
		
		return false;
	});
}
//绑定右键菜单事件
function tabCloseEven()
{
	//关闭当前
	$('#mm-tabclose').click(function(){
		var liId = $('#mm').data("currtab");
		$('#tabs').tabs('close',liId);
	})
	//全部关闭
	$('#mm-tabcloseall').click(function(){
		closeAllTab();
	});
	//关闭除当前之外的TAB
	$('#mm-tabcloseother').click(function(){
		var liId = $('#mm').data("currtab");
		$('.tabs-inner').each(function(i,n){
			var t = $(n).parent().attr("id");
			if(t!=liId)
				$('#tabs').tabs('close',t);
		});	
	});
	//关闭当前右侧的TAB
	$('#mm-tabcloseright').click(function(){
		var nextall = $('.tabs-selected').nextAll();
		if(nextall.length==0){
			//msgShow('系统提示','后边没有啦~~','error');
			alert('后边没有啦~~');
			return false;
		}
		nextall.each(function(i,n){
			var t=$(n).attr("id");
			$('#tabs').tabs('close',t);
		});
		return false;
	});
	//关闭当前左侧的TAB
	$('#mm-tabcloseleft').click(function(){
		var prevall = $('.tabs-selected').prevAll();
		if(prevall.length==0){
			alert('到头了，前边没有啦~~');
			return false;
		}
		prevall.each(function(i,n){
			var t=$(n).attr("id");
			$('#tabs').tabs('close',t);
		});
		return false;
	});

	//退出
	$("#mm-exit").click(function(){
		$('#mm').menu('hide');
	})
}

//弹出信息窗口 title:标题 msgString:提示信息 msgType:信息类型 [error,info,question,warning]
function msgShow(title, msgString, msgType) {
	$.messager.alert(title, msgString, msgType);
}

function clockon() {
    var now = new Date();
    var year = now.getFullYear(); //getFullYear getYear
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    var week;
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    week = arr_week[day];
    var time = "";
    time = year + "年" + month + "月" + date + "日" + " " + hour + ":" + minu + ":" + sec + " " + week;

    $("#bgclock").html(time);

    var timer = setTimeout("clockon()", 200);
}
