if ($.fn.pagination){
	$.fn.pagination.defaults.beforePageText = '第';
	$.fn.pagination.defaults.afterPageText = '页';
	$.fn.pagination.defaults.displayMsg = '<span style="margin-right: 20px;">显示 {from} 到 {to} 条</span>';
	$.fn.pagination.defaults.layout=['first','prev','sep','manual','sep','next','refresh'];
}