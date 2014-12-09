<?php

/*
*   Verify User Account
*   @verion 1.0
*/

session_start();

if(isset($_POST['account']) && isset($_POST['password'])){
    $account = $_POST['account'];
    $password = $_POST['password'];

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();

    $sql = "SELECT id FROM account WHERE account = ? AND password = ?";

    //call query method
    $result = $dbcon->query($sql,array($account,$password));

    if($result != null || $result != false) {
        echo $result->id ;

        //session variables
        $_SESSION['id'] = $result->id;
        $_SESSION['account'] = $account;

    } else {
        echo 'Query failed';
    }

    $dbcon->close();

} else {
    echo "No Post data";
}
?>
