<?php
/*
*   Verify account is existed
*   @version 1.0
*/

if(isset($_POST['account'])){
    $account = $_POST['account'];

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();

    $sql = "SELECT count(id) FROM account WHERE account = ?";

    $result = $dbcon->query($sql , array($account));

    if($result != null || $result != false){
        echo $result->count(id);
    } else {
        echo 'query failed';
    }
} else {
    echo 'No Post variables';
}

?>
