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
            <div id="row1" class="list-row pool">
                <div class="list number" id="number1">1</div>
                <div class="list game-mode" id="game-mode1">normal</div>
                <div class="list room-name" id="room-name1">This is room name.</div>
                <div class="list host" id="host1">player name</div>
                <div class="list state" id="state1">wait/playing</div>
            </div>
            <div id="row2" class="list-row pool">
                <div class="list number" id="number2">2</div>
                <div class="list game-mode" id="game-mode2">normal</div>
                <div class="list room-name" id="room-name2">This is room name.</div>
                <div class="list host" id="host2">player name</div>
                <div class="list state" id="state2">wait/playing</div>
            </div>
        </div>
        <div id="control">
            <input type="text" placeholder="Room name">
            <button>Creat Room</button>
            <button>Refresh List</button>
            <button>Leaderboard</button>
            <button id="logout">Logout</button>
        </div>

        <div id="user-list">
            <div id="user-list-title">
                <h3>Online user</h3>
            </div>
            <div id="scroll">
                <p>username</p>
                <p>username</p>
                <p>username</p>
                <p>username</p>
            </div>
        </div>
    </div>
</body>

</html>