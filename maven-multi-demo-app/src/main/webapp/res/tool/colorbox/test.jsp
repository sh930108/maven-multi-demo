<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>调用测试</title>
<link rel="stylesheet" href="colorbox.css" />
<script src="../../js/jQuery.js"></script>
<script src="jquery.colorbox.js"></script>

<script type="text/javascript">
	$(function(){
		$(".upload").colorbox({
			width:"25%", 
			height:"25%"
		});
		
	});

</script>
</head>
<body>
	<a class="upload" href="../../../admin/ossUpload.html" title="文件上传">上传文件</a>
</body>
</html>