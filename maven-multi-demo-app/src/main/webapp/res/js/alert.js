(function($) {                                         
	$.fn.showAlert = function(o) {
		o = $.extend({
			hasTitle: false,
			titleText: '标题',
			text: '内容',
			ms: 2000
		}, o || {});
	
		var show = function(element){
			var divName = 'alert';
			var divAlert;
			if(!o.hasTitle){
				divAlert = "<div class='" + divName + "'>" + o.text + "</div>";
			}else{
				divAlert = "<div class='" + divName + "'><p>" + o.titleText + "</p>" + o.text + "</div>";
			}
			element.append(divAlert);
			letDivCenter('.' + divName);
			reLetDivCenter('.' + divName);
			setTimeout(function(){
				$('.' + divName).remove();
			}, o.ms);
		};
		
		var letDivCenter = function(divName){   
			var top = ($(window).height() - $(divName).height())/2;    
			var left = ($(window).width() - $(divName).width())/2;   
			$(divName).css( { position : 'fixed', 'top' : top, left : left } ).show();  
		}
		var reLetDivCenter = function(divName){
			window.onresize = function(){
			    letDivCenter(divName);
		    }
		}
		
		return show($(this));	
	};	
	
})(window.jQuery || window.Zepto);
