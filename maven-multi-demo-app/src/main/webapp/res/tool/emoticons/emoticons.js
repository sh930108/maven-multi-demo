var emoticonsPath = root + "/res/tool/emoticons/images/", allowPreview = true, currentPageNum = 1;
var rows = 5, cols = 3, total = 16, startNum = 1, cells = rows * cols, 
pages = Math.ceil(total / cells), 
colsHalf = Math.floor(cols / 2),
elements = [],
wrapperDiv = $(".ke-plugin-emoticons");
var previewDiv = $(".ke-preview"),
previewImg = $(".ke-preview-img");
if (allowPreview) {
    previewDiv.css('right', 0);
    previewImg.attr("src",emoticonsPath+ "01.png");
}
function bindCellEvent(cell, j, num) {
	var imgName;
    if(num <10 ){
    	imgName = "0"+num;
    }else {
    	imgName = num;
    }
    if (previewDiv) {
        cell.mouseover(function() {
            if (j > colsHalf) {
                previewDiv.css('left', 0);
                previewDiv.css('right', '');
            } else {
                previewDiv.css('left', '');
                previewDiv.css('right', 0);
            }
            if(num <= total) {
            	 previewImg.attr('src', emoticonsPath + imgName + '.png');
            	$(this).addClass('ke-on');
            }
        });
    } else {
        cell.mouseover(function() {
            $(this).addClass('ke-on');
        });
    }
    cell.mouseout(function() {
        $(this).removeClass('ke-on');
    });
    cell.click(function(e) {
    	if(num > total) {
    		return;
    	}
    	// 发送表情
    	$("#txtSend").val("[em"+imgName+"]");
        chat.send(5);
       	$("#emoticonsDiv").toggle();
    });
}
function createEmoticonsTable(pageNum, parentDiv) {
    var table = document.createElement('table');
    parentDiv.append(table);
    if (previewDiv) {
        $(table).mouseover(function() {
            previewDiv.show('block');
        });
        $(table).mouseout(function() {
            previewDiv.hide();
        });
        elements.push($(table));
    }
    table.className = 'ke-table';
    table.cellPadding = 0;
    table.cellSpacing = 0;
    table.border = 0;
    var num = (pageNum - 1) * cells + startNum;
    for (var i = 0; i < rows; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < cols; j++) {
            var cell = $(row.insertCell(j));
            cell.addClass('ke-cell');
            bindCellEvent(cell, j, num);
            var imgName;
            if(num <10 ){
            	imgName = "0"+num;
            }else {
            	imgName = num;
            }
            var span;
            if(num <= total) {
            	span = $('<span class="ke-img"></span>').css('background-image', 'url(' + emoticonsPath + imgName +'.png)');
            }else{
            	span = $('<span class="ke-img"></span>');
            }
            cell.append(span);
            elements.push(cell);
            num++;
        }
    }
    return table;
}
var table = createEmoticonsTable(currentPageNum, wrapperDiv);
function removeEvent() {
    $.each(elements, function() {
        this.unbind();
    });
}
var pageDiv;
function bindPageEvent(el, pageNum) {
    el.click(function(e) {
        removeEvent();
        table.parentNode.removeChild(table);
        pageDiv.remove();
        table = createEmoticonsTable(pageNum, wrapperDiv);
        createPageTable(pageNum);
        currentPageNum = pageNum;
        e.stop();
    });
}
function createPageTable(currentPageNum) {
    pageDiv = $('<div class="ke-page"></div>');
	wrapperDiv.append(pageDiv);
    for (var pageNum = 1; pageNum <= pages; pageNum++) {
        if (currentPageNum !== pageNum) {
            var a = $('<a href="javascript:;">[' + pageNum + ']</a>');
            bindPageEvent(a, pageNum);
            pageDiv.append(a);
            elements.push(a);
        } else {
            pageDiv.append('[' + pageNum + ']');
        }
    }
}
createPageTable(currentPageNum);