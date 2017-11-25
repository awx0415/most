<%--
  Created by IntelliJ IDEA.
  User: pc
  Date: 2017-10-31
  Time: 22:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <title>Title</title>
    <script src="static/js/libs/jquery-3.2.1.min.js"></script>
    <script src="static/js/login/login.js"></script>
    <link rel="stylesheet" href="static/css/libs/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="static/css/libs/bootstrap-theme.min.css" type="text/css">
</head>
<body>
<div class="container" >
    <div class="row" style="background:url(static/img/login.jpg) no-repeat; height: 40em;" >
        <div style="margin-right: 50px;padding: 30px;margin-top:200px;border: 1px solid black;background:#ffffff;margin-left: 750px;">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" onclick="Login.register()" class="btn btn-default">Submit</button>
        </div>
    </div>
</div>
</body>
</html>
