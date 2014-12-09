<?php
/*
*   createAccount
*   @version 1.1
*/

if(isset($_POST['account']) && isset($_POST['password']) && isset($_POST['email']) && isset($_POST['nickname']) && isset($_POST['birthday']) && isset($_POST['gender'])){

    $account = $_POST['account'];
    $password = $_POST['password'];
    $email = $_POST['email'];
    $nickname = $_POST['nickname'];
    $birthday = $_POST['birthday'];
    $gender = $_POST['gender'];

    require_once __DIR__ . '/DBConnect.php';

    //new PDO connection
    $dbcon = new DBConnect();
    $sql = "SELECT * FROM account WHERE account = ?";

    //row count , if result = 1 , then had the same account
    $result = $dbcon->query($sql , array($account))->rowCount();


    if($result != null || $result != false){
        if($result == 1){
            echo "false";
            //echo "Duplicate account";
        }
    } else {

        // insert account
        $sql = "INSERT INTO account(account, password, email, nickname, birthday, gender) VALUES (?, ?, ?, ?, ?, ?)";

            $resultInsert = $dbcon->query($sql, array($account, $password, $email, $nickname, $birthday, $gender));
            if($resultInsert != null || $resultInsert != false) {
                echo "true";
            } else {
                echo "false";
                //echo "Insert account query failed";
            }
    }


    //DB connection close
    $dbcon->close();
} else {
    echo "false";
    //echo "No Post data";
}




?>
