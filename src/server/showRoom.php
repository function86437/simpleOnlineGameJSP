<?php
/*
*   show room
*   @version 1.0
*/

session_start();

//login session
if(!isset($_SESSION['login'])){

    //redirect to index.html
    header("Location:../web/index.html");
} else{

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();

    $sql = "SELECT lobby.*,`nickname` FROM `account`,`lobby` WHERE account.id=lobby.player1_id";

    $result = $dbcon->query2($sql)->fetchAll(PDO::FETCH_ASSOC);

    if($result != null || $result != false) {

        //encode result as a json type
        $json = json_encode($result);

        echo $json;



    } else {
        echo 'Query failed';
    }

    //DB connection close
    $dbcon->close();

}
?>
