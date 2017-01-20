<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>获得客户端数据</title>
</head>
<body>
<%
//这里设置的字符集要跟index.html中的charset一致
request.setCharacterEncoding("utf-8");
String[] text=request.getParameterValues("post_data");
for(String t : text){
out.print(t+"<br>");
}
%>
</body>
</html>
