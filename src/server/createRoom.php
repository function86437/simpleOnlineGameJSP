<?php

/*
*   Create room
*   @verion 1.1
*/

session_start();

//login session
if(!isset($_SESSION['login'])){

    //redirect to index.html
    header(Location:../web/index.html);
} else{


    if(isset($_POST['roomName']) && isset($_POST['gameMode'])) {

        $roomName = $_POST['roomName'];
        $gameMode = $_POST['gameMode'];
        $player1ID = $_SESSION['id'];


        require_once __DIR__ . '/DBConnect.php';

        //new PDO connection
        $dbcon = new DBConnect();

        $sql = "INSERT INTO lobby(room_name, game_mode, player1_id, player2_id, status) VALUES (?, ?, ?, ?, ?)";

        $result = $dbcon->query($sql, array($roomName, $gameMode, $player1ID, null, waiting));

        if($result != null || $result != false) {

            echo "Succeed";

            //roomID by last insert command
            $roomID = $result->lastInsertId();

            //set roomName as a session variable, one player can only create on room.
            $_SESSION['roomID'] = $roomName;

        } else {
            echo 'Query failed';
        }

        //DB connection close
        $dbcon->close();

    } else {
        echo "No Post data";
    }
}

?>
