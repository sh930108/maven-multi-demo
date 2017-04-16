/**
 * 删除oss文件
 */
function deleteFileByName(fileName){
    return;
    /*  取消oss重复上传，删除原来文件
	if(fileName){
		Matrix.JSON({
			val: {fileName : fileName},
			url: root + "/oss/deleteFileByName.do"
		});
	}*/
}

/**
 * 获取最近几天日期
 * @param n
 * @returns {String}
 */
function getBeforeDate(n) {
    var n = n;
    var d = new Date();
    var year = d.getFullYear();
    var mon = d.getMonth() + 1;
    var day = d.getDate();
    var s;
    if (day <= n) {
        if (mon > 1) {
            mon = mon - 1;
        } else {
            year = year - 1;
            mon = 12;
        }
    }
    d.setDate(d.getDate() - n);
    year = d.getFullYear();
    mon = d.getMonth() + 1;
    day = d.getDate();
    s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
    return s;

}


//确认操作
function checkDel(msg){
    if(confirm(msg)){
        return true;
    }else{
        return false;
    }
}