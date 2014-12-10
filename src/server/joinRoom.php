<?php
/*
*
*   join room
*   @verion 1.0
*/

session_start();

//login session
if(!isset($_SESSION['login'])){

    //redirect to index.html
    header("Location:../web/index.html");
} else{

    if(isset($_POST['player1_id'])){

        $player1Acc = $_POST['player1_id'];
        $player2ID = $_SESSION['id'];

        require_once __DIR__ . '/DBConnect.php';

        //new PDO connection
        $dbcon = new DBConnect();

        $sql = "SELECT lobby.id FROM lobby,account WHERE lobby.player1_id=account.id and account.account=?";

        $resultRo = $dbcon->query($sql, array($player1Acc))->fetchAll(PDO::FETCH_COLUMN);
        echo $resultRo[0];

        $sql = "UPDATE lobby SET player2_id=?,state=? WHERE id=?";

        $result = $dbcon->query($sql, array($player2ID, "playing", $resultRo[0]));

        if($result != null || $result != false) {
            echo "true";

        } else {
            echo "false";
        }

        //DB connection close
        $dbcon->close();
    } else {
        echo "No Post data";
    }
}

?>
