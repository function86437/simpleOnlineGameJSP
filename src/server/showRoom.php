<?php
    session_start();
    if(!isset($_SESSION['user_id']) && empty($_SESSION['user_id'])){
        header("Location:index.html");
    } else {
        require_once __DIR__ . '/DBConnect.php';
        $db = new DB_CONNECT();
        $sql = mysqli_query("SELECT * from lobby");

        if($sql != false){
        } else {
            echo "Query not found";
            header("Location:Lobby.php");
        }
    }

?>
