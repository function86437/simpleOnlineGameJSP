<?php
    session_start();
if($_SESSION['login'] === true){

}else{
    header('Location:../web/index.html');
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Lobby - Simple Online Game</title>
    <link rel="stylesheet" href="asset/css/main.css">
    <link rel="stylesheet" href="asset/css/lobby.css">
    <script type="text/javascript" src="asset/js/generalAjax.js"></script>
    <script src="asset/js/lobby.js"></script>
    <script src="asset/js/user_list.js"></script>
</head>

<body>
    <div id="title">LOBBY</div>
    <div id="room-panel">
        <div id="room-list">
            <div id="row" class="list-title pool">
                <div class="list number">number</div>
                <div class="list game-mode">game-mode</div>
                <div class="list room-name">room name</div>
                <div class="list host">host</div>
                <div class="list state">state</div>
            </div>

        </div>
        <div id="control">
            <input type="text" id="createRoomName" placeholder="Room name">
            <button id="create-room-btn">Create Room</button>
            <button id="refresh-list-btn">Refresh List</button>
            <button id="leaderboard-btn">Leaderboard</button>
            <button id="logout-btn" onclick="logout();">Logout</button>
        </div>

        <div id="user-list">
            <div id="user-list-title">
                <h3>Online user</h3>
            </div>
            <div id="scroll">

            </div>
        </div>
    </div>
    <div class="alert">
        <div id="alert-box">
            <div id="alert-title"></div>
            <button id="alert-btn">OK</button>
        </div>
    </div>
</body>

</html>
