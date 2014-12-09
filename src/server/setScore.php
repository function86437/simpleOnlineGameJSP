<?php
/*
*   set player's score
*   $version 1.1
*/

session_start();

//login session
if(!isset($_SESSION['login'])){

    //redirect to index.html
    header(Location:../web/index.html);
} else{

    if(isset($_POST['player1_score']) && isset($_POST['player2_score']) && isset($_POST['winner_id'])) {

        $player1_score = $_POST['player1_score'];
        $player2_score = $_POST['player2_score'];
        $winner_id = $_POST['winner_id'];
        $roomID = $_SESSION['roomID'];

        require_once __DIR__ . '/DBConnect.php';

        $dbcon = new DBConnect();

        $sql = "SELECT * FROM lobby WHERE id=?";

        $result = $dbcon->query($sql,array($roomID));

        if($result != null || $result != false) {

            $sql = "INSERT INTO score(game_mode, player1_id, player1_score, player2_id, player2_score, winner_id, date) VALUES(?, ?, ?, ?, ?, ?, ?)"

            $resultInert = $dbcon->query($sql,array($result->game_mode, $result->player1_id, $player1_score, $result->player2_id, $player2_score, $winner_id, date('Y-m-d H:i:s')));

            if($resultInert != null || $resultInert != false) {
                echo "true";
                //echo "succeed";
            } else {
                echo "false";
                //echo 'Insertion Query failed';
            }

            //DB connection close
            $dbcon->close();

        } else {
            echo "false";
            //echo 'Query failed';
        }

    } else {
        echo "false";
        //echo "No Post data";
    }
}


?>
