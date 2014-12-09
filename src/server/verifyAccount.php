<?php

/*
*   Verify User Account
*   @verion 1.1
*/

session_start();

if(isset($_POST['account']) && isset($_POST['password'])){
    $account = $_POST['account'];
    $password = $_POST['password'];

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();

    $sql = "SELECT id FROM account WHERE account = ? AND password = ?";

    //call query method and set result as a object
    $result = $dbcon->query($sql,array($account,$password))->fetch(PDO::FETCH_OBJ);

    if($result != null || $result != false) {
        echo $result->id ;

        //session variables
        $_SESSION['login'] = true;
        $_SESSION['id'] = $result->id;
        $_SESSION['account'] = $account;

        //redirect to lobby
        header('Location:../web/lobby.html');
    } else {
        echo 'Query failed';
    }

    //DB connection close
    $dbcon->close();

} else {
    echo "No Post data";
}
?>
