<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<script type="text/javascript" src="<c:url value='/res/js/jquery.json-2.2.min.js'/>"></script>
<title>Insert title here</title>
</head>
<body onload='document.f.j_username.focus();'>
	<form name='f' action='/gd-micro-shop-admin/j_spring_security_check'
		method='POST'>
		<table>
			<tr>
				<td>用户名:</td>
				<td><input type='text' name='j_username' value=''></td>
			</tr>
			<tr>
				<td>密码:</td>
				<td><input type='password' name='j_password' /></td>
			</tr>
			<tr>
				<td><input type='checkbox' name='_spring_security_remember_me' /></td>
				<td>记住我</td>
			</tr>
			<tr>
				<td colspan="1"><input name="submit" type="submit" value="登录"/></td>
			</tr>
			
		</table>
	</form>
</body>
</html>