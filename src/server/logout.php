<?php
/*
*   logout
*   @version 1.0
*/

session_start();

//login session
if(!isset($_SESSION['login'])){

    //redirect to index.html
    header("Location:../web/index.html");
} else{
    echo $_SESSION['nickname'];
    $id = $_SESSION['id'];

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();

    $sql = "DELETE FROM onlineuser WHERE account_id=?";

    $result = $dbcon->query($sql,array($id));

    if($result != null || $result != false) {

        echo "true";
        //DB connection close
        $dbcon->close();
    } else {
        echo "false";
    }

    session_destroy();

    //redirect to index.html
    header("Location:../web/index.html");
}


?>
