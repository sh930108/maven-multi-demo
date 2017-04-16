/*商品类目三级联动*/
//二级
function ch1(){
	$.get(root+"/goods/queryFirstType.do", {
	}, function(data) {
		data = eval("(" + data + ")");
		 var albumData = data;
		  $.each(albumData, function(i, n) {
			  var albumData = data;
			  var str = '<option value=\"0\">请选择</option>';
			  $.each(albumData, function(i, n) {
			  	str += "<option value='"+n.gtId+"'>"+n.gtName+"</option>";
			  });
			  $('#t1').html(str);
		  });
	});
}
function ch2(id){
		if(id=="0"){
			alert("请选择类目");
			return ;
		}
		$.get(root+"/goods/queryId.do", {
			'id' : id
		}, function(data) {
			data = eval("(" + data + ")");
			 var albumData = data;
			  $.each(albumData, function(i, n) {
				  var albumData = data;
				  var str = '<option value=\"0\">请选择</option>';
				  $.each(albumData, function(i, n) {
				  	str += "<option value='"+n.gtId+"'>"+n.gtName+"</option>";
				  });
				  $('#t2').html(str);
				  $('#t3').val(0);
			  });
		});
	}
	function ch3(id){
		if(id=="0"){
			alert("请选择类目");
			return ;
		}
		$.get(root+"/goods/queryId.do", {
			'id' : id
		}, function(data) {
			data = eval("(" + data + ")");
			 var albumData = data;
			  var str = '<option value=\"0\">请选择</option>';
			  $.each(albumData, function(i, n) {
			  	str += "<option value='"+n.gtId+"'>"+n.gtName+"</option>";
			  });
			  $('#t3').html(str);
		});
	}
$(function(){
	ch1();
});