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
    header(Location:../web/index.html);
} else{

    if(isset($_POST['roomID'])){

        $roomID = $_POST['roomID'];
        $player2ID = $_SESSION['id'];

        require_once __DIR__ . '/DBConnect.php';

        //new PDO connection
        $dbcon = new DBConnect();

        $sql = "UPDATE lobby SET player2_id=?,status=playing WHERE id=?";

        $result = $dbcon->query($sql, array($player2ID, $roomID));

        if($result != null || $result != false) {
            echo "Succeed";

        } else {
            echo "Query failed";
        }

        //DB connection close
        $dbcon->close();
    } else {
        echo "No Post data";
    }
}

?>
