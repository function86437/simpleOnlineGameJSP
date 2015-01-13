<%@page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%
	HttpSession sess = request.getSession();    
	if(sess != null && !sess.isNew()){

    }else{
    	
        response.sendRedirect("./index.html");
    }
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game - Simple Online Game</title>
    <link rel="stylesheet" href="asset/css/main.css">
    <link rel="stylesheet" href="asset/css/game.css">
    <script src="asset/js/fancywebsocket.js"></script>
    <script src="asset/js/game.js"></script>
</head>
<body>
    <div id="title">Game</div>
<div id="panel">
   <div id="battlefield" class="pool">
       <div id="player1" class="battlefield-card">
        <div class="battlefield-title">Player1</div>
        <div class="battlefield-content">?</div>
    </div>
    <div id="score" class="battlefield-card">
        <div id="score-title" class="battlefield-title">VS</div>
        <div id="score-content" class="battlefield-content">0/0</div>
        <div id="round">round:
            <span id="round-turn">0/5</span>
        </div>
    </div>
    <div id="player2" class="battlefield-card">
        <div class="battlefield-title">Player2</div>
        <div class="battlefield-content">?</div>
    </div>
   </div>
    <div id="control" class="pool">
        <div></div>
        <div id="rock" class="card choose">��</div>
        <div id="paper" class="card">��</div>
        <div id="scissors" class="card">��</div>
        <div id="send">Send</div>
    </div>
</div>
    <div class="alert">
        <div id="alert-box">
            <div id="alert-title"></div>
            <button id="alert-btn">Cancel</button>
        </div>
    </div>
</body>
</html>
