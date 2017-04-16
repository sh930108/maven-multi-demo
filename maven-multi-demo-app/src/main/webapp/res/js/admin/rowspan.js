/**
 * 合并行单元格
 * 调用传入列值 eg: $(".window_table").rowspan(0); 第1列
 */
jQuery.fn.rowspan = function(colIdx) { //封装的一个JQuery小插件 
        return this.each(function(){ 
        	var that; 
       		 $('tr', this).each(function(row) { 
                $('td:eq('+colIdx+')', this).filter(':visible').each(function(col) { 
                if (that!=null && $(this).html() == $(that).html()) { 
                	rowspan = $(that).attr("rowSpan"); 
                    if (rowspan == undefined) { 
                        $(that).attr("rowSpan",1); 
                        rowspan = $(that).attr("rowSpan"); } 
                        rowspan = Number(rowspan)+1; 
                        $(that).attr("rowSpan",rowspan); 
                        $(this).hide(); 
                     } else { 
                        that = this; 
                     } 
                }); 
            }); 
        }); 
    } 