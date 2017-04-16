// 自动填写省市区;
var ajaxPrv = Matrix.tools.search("prvNumId") || Matrix.tools.search("orderProvince") || Matrix.tools.search("shopProvince");
var ajaxCity = Matrix.tools.search("cityNumId") || Matrix.tools.search("orderCity") || Matrix.tools.search("shopCity");
var ajaxArea = Matrix.tools.search("cityAreaNumId") || Matrix.tools.search("orderDistrict") || Matrix.tools.search("shopDistrict");
// 有省信息加载;
if(ajaxPrv){
	showCity(ajaxPrv, ajaxCity);	
}
// 有城市信息时加载地区信息;
if(ajaxCity){
	showArea(ajaxCity, ajaxArea);
}
// 有地区信息时加载门店信息;
if(ajaxArea){
	showShop(ajaxArea);
}


/***
 * 获取所有的省份
 * @returns
 * <select id="prv" onchange="showCity(this.value)">
 *		<option value="-1">请选择省份</option>
 *  </select>
 */
function getMyPrv(){
	$.ajax({
	  type: "GET",
	  url: root + "/activity/getMyPrv.do",
		dataType: "json",
		success: function(msg){
			var arr = [],albumData=msg;
			//arr.push("<option value='"+msg.prvNumId+"' selected>"+msg.prvName+"</option>");
			
			arr.push('<option value="">选择省份</option>');
			$.each(albumData, function(i, n) {
				arr.push("<option value='"+n.prvNumId+"'>"+n.prvName+"</option>");
			});
			
			$('#prv').html(arr.join('')).val(ajaxPrv);
			//showCity(msg.prvNumId, ajaxCity);
		},
		error: function(e){
			console.log(e);
		}
	});
};

/***
 * 获取所有的省份
 * @returns
 * <select id="prv" onchange="showCity(this.value)">
 *		<option value="-1">请选择省份</option>
 *  </select>
 */
function getPrv(defaultValue,target){
	$.ajax({
	  type: "GET",
	  url: root + "/activity/showPrv.do",
		dataType: "json",
		success: function(msg){
	    var albumData = msg, arr = [];
			arr.push('<option value="">选择省份</option>');
			$.each(albumData, function(i, n) {
				arr.push("<option value='"+n.prvNumId+"'>"+n.prvName+"</option>");
			});
			//console.log(defaultValue);
			var _target = target ? (typeof target === 'string' ? $(target) : target) : $("#prv");
			_target.html(arr.join('')).val(defaultValue);
			//$('#city').html('<option value="">全部</option>');
			//$('#area').html('<option value="">全部</option>');
		},
		error: function(e){
			console.log(e);
		}
	});
};
/***
 * 根据省份id获取城市
 * @param prvId：省份id
 * @returns
 * <select id="city" onchange="showArea(this.value)">
 *		<option value="-1">全部</option>
 *   </select>
 * 
 */
function showCity(prvId, defaultValue,self){
	if(prvId ==""||prvId == -1){ return}
	$.ajax({
	  type: "GET",
	  url: root + "/activity/showCity.do",
		data: {"prvId": prvId},
		dataType: "json",
		success: function(msg){
	    var albumData = msg, arr = [];
			arr.push('<option value="">请选择市</option>');
			$.each(albumData, function(i, n) {
				arr.push("<option value='"+n.cityNumId+"'>"+n.cityName+"</option>");
			});
			var _next = $('#city');
			if(self){
				_next = $(self).next();
			}
			_next[0] && _next.html(arr.join('')).val(defaultValue);
			//$('#area').html('<option value="">全部</option>');
		},
		error: function(e){
			console.log(e);
		}
	});
};
/***
 * 根据城市id获取区域
 * @param cityId
 * @returns
 * <select id="area" onchange="showShop(this.value)">
 *		<option value="-1">全部</option>
 *</select>
 */
function showArea(cityId,defaultValue,self){
	if(cityId ==""||cityId == -1){ return}
	$.ajax({
	  type: "GET",
	  url: root + "/activity/showArea.do",
		data: {"cityId": cityId},
		dataType: "json",
		success: function(msg){
			var albumData = msg, arr = [];
			arr.push('<option value="">请选择区</option>');
			$.each(albumData, function(i, n) {
				arr.push("<option value='"+n.cityAreaNumId+"'>"+n.cityAreaName+"</option>");
			});
			var _next = $('#area');
			if(self){
				_next = $(self).next();
			}
			_next[0] && _next.html(arr.join('')).val(defaultValue);
		},
		error: function(e){
			console.log(e);
		}
	});
};
/***
 * 根据区域id获取门店
 * @param areaId
 * @returns
 * <select id="shop">
 *		<option value="-1">全部</option>
 *</select>
 * 
 */
function showShop(areaId){
	if(areaId ==""||areaId == -1){ return Toast.show("请选择区域");}
	$.ajax({
	  type: "GET",
	  url: root + "/activity/showShop.do",
		data: {"areaId": areaId},
		dataType: "json",
		success: function(msg){
	    var albumData = msg, arr = [];
			arr.push('<option value="">全部</option>');
			$.each(albumData, function(i, n) {
				arr.push("<option value='"+n.subUnitNumId+"'>"+n.subUnitName+"</option>");
			});
			$('#shop').html(arr.join(''));
		},
		error: function(e){
			console.log(e);
		}
	});
};
/***
 * 根据区域id，公司id，获取门店
 * @param areaId
 * @returns
 * <select id="shop">
 *		<option value="-1">全部</option>
 *</select>
 * 
 */
function showShopByCompany(areaId,companyId,defaultValue){
	$.ajax({
	  type: "GET",
	  url: root + "/activity/showShopByCompany.do",
		data: {'areaId':areaId,'companyId':companyId},
		dataType: "json",
		success: function(msg){
	    var albumData = msg, arr = [];
			arr.push('<option value="">全部</option>');
			$.each(albumData, function(i, n) {
				arr.push("<option value='"+n.subUnitNumId+"'>"+n.subUnitName+"</option>");
			});
			$('#shop').html(arr.join('')).val(defaultValue);
		},
		error: function(e){
			console.log(e);
		}
	});
}
///***
// * 根据分公司id获取门店
// * @param areaId
// * @returns
// * <select id="shop">
// *		<option value="-1">全部</option>
// *</select>
// * 
// */
//function showShopByCompanyId(companyId){
//		if(areaId == -1){
//			alert("请选择分公司！！！");
//			return false;
//		}
//		$.get(root+"/cortSubUnit/querySubUnitByCompanyId.do", {
//			'companyId':companyId
//    		}, function(ret) {
//    			if(!ret.success || ret.total == 0){
//    				alert(ret.msg);
//    				$("#shop").html("<option value='0'>门店名称</option>");
//    			}else{
//    				var data = ret.data;
//    				var opts = "<option value='0'>门店名称</option>";
//    				$.each(data,function(i,o){
//    					opts += "<option value="+o.subUnitNumId+">"+o.subUnitName+"</option>";
//    				});
//    				$('#shop').html(opts);
//    			}
//    		});
//}
///***
// * 根据区域获取分公司
// * @param areaId
// * @returns
// * <select id="companyId">
// *		<option value="-1">全部</option>
// *</select>
// * 
// */
//function showCompanyByAreaId(areaId){
//		if(areaId == -1){
//			alert("请选择区域！！！");
//			return false;
//		}
//		$.get(root+"/gb/company/getCompanyByAreaId.do", {
//			'areaId':areaId
//    		}, function(ret) {
//    			if(!ret.success || ret.total == 0){
//    				alert(ret.msg);
//    				$("#companyId").html("<option value='-1'>公司名称</option>");
//    			}else{
//    				var data = ret.data;
//    				var opts = "<option value='-1'>公司名称</option>";
//    				$.each(data,function(i,o){
//    					opts += "<option value="+o.divNumId+">"+o.divName+"</option>";
//    				});
//    				$('#companyId').html(opts);
//    			}
//    		});
//}
