/**
 * 
 */

//门店配送时间设置模版html
var d_index=1; //模版递增索引

function getDeiveryTemplate(){
	var deiverty_time_setting_template = '';
	deiverty_time_setting_template += '<div class="form_group0">';
		deiverty_time_setting_template += '今日&nbsp;';
		deiverty_time_setting_template += '<input id="" class="input_samll" type="text" name="deliveryTime['+d_index+'].beginTime" value=""/>&nbsp;';
		deiverty_time_setting_template += '至&nbsp;';
		deiverty_time_setting_template += '<input id="" class="input_samll" type="text" name="deliveryTime['+d_index+'].endTime" value=""/>&nbsp;';
		deiverty_time_setting_template += '点前下单，预计&nbsp;';
		deiverty_time_setting_template += '<select name="deliveryTime['+d_index+'].arriveType" class="select_small">';
			deiverty_time_setting_template += '<option value="0">当日</option>';
			deiverty_time_setting_template += '<option value="1">次日</option>';
		deiverty_time_setting_template += '</select>&nbsp;';
		deiverty_time_setting_template += '<input id="" class="input_samll" type="text" name="deliveryTime['+d_index+'].arriveTime" value=""/>&nbsp;';
		deiverty_time_setting_template += '点前送达。&nbsp;';
		deiverty_time_setting_template += '<button type="button" class="btn_small del_deliverytime_btn" >删除</button>'; 		            				
	deiverty_time_setting_template += '</div>';
	return deiverty_time_setting_template;
}

$(function(){
	
	showLocation(); //省市区
	showBankLocation(); //开户省市
	
	/**
	 * 门店配送设置：添加更多时段
	 */
	$(".add_deliverytime_btn").on("click",function(){
		var deiverty_time_setting_template = getDeiveryTemplate();
		$(this).parent().after(deiverty_time_setting_template);
		d_index++;
	});
	
	/**
	 * 删除配送时间段
	 */
	$(".del_deliverytime_btn").live("click",function(){
		$(this).parent().remove();
		d_index--;
	});
	
});

function setTab(name,cursel){
	cursel_0=cursel;
	for(var i=1; i<=links_len; i++){
		var menu = document.getElementById(name+i);
		var menudiv = document.getElementById("con_"+name+"_"+i);
		if(i==cursel){
			menu.className="off";
			menudiv.style.display="block";
		}
		else{
			menu.className="";
			menudiv.style.display="none";
		}
	}
}

function Next(){                                                        
	cursel_0++;
	if (cursel_0>links_len)cursel_0=1
	setTab(name_0,cursel_0);
} 

var name_0='one';
var cursel_0=1;
//循环周期，可任意更改（毫秒）
var links_len,iIntervalId;
onload=function(){
	var links = document.getElementById("tab1").getElementsByTagName('li')
	links_len=links.length;
	for(var i=0; i<links_len; i++){
		links[i].onmouseover=function(){
			clearInterval(iIntervalId);
			this.onmouseout=function(){
				iIntervalId = setInterval(Next,ScrollTime);;
			}
		}
	}
	document.getElementById("con_"+name_0+"_"+links_len).parentNode.onmouseover=function(){
		clearInterval(iIntervalId);
		this.onmouseout=function(){
			iIntervalId = setInterval(Next,ScrollTime);;
		}
	}
	setTab(name_0,cursel_0);
	iIntervalId = setInterval(Next,ScrollTime);
}

