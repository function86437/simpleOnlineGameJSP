<?php

/*
*   Verify User Account
*   @verion 1.2
*/

session_start();

if(isset($_POST['account']) && isset($_POST['password'])){
    $account = $_POST['account'];
    $password = $_POST['password'];

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();

    $sql = "SELECT * FROM account WHERE account = ? AND password = ?";

    //call query method and set result as a object
    $result = $dbcon->query($sql,array($account,$password))->fetch(PDO::FETCH_OBJ);

    if($result != null || $result != false) {
        echo $result->id ;

        //add to onlineuser list
        $sql = "INSERT INTO onlineuser(account_id) VALUES (?)";

        $resultInsert = $dbcon->query($sql, array($result->id));

        if($resultInsert != null || $resultInsert != false) {
            //session variables
            $_SESSION['login'] = true;
            $_SESSION['id'] = $result->id;
            $_SESSION['nickname'] = $result->nickname;
            $_SESSION['account'] = $account;

            //redirect to lobby
            header('Location:../web/lobby.php');

        } else {

            header("refresh:1;url=../web/index.html");
            echo 'Query failed';
        }


    } else {
        header("refresh:1;url=../web/index.html");
        echo 'Query failed';
    }

    //DB connection close
    $dbcon->close();

} else {
    echo "No Post data";
}
?>
