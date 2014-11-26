<?php
    session_start();
    if(isset($_POST['account'] && $_POST['password'])){
        $account = $_POST['account'];
        $password = $_POST['password'];
    } else {
        echo "No Post value";
    }

    require_once __DIR__ . '/DBConnect.php';

    $db = new DB_CONNECT();

    $sql = mysqli_query("SELECT id FROM account WHERE account = '$account' and password = '$password'");

    if($sql != false){
        if(mysqli_num_rows($sql) > 0){
            $id = mysqli_result($sql,0);
            $_SESSION['user_id'] = $id;
            $_SESSION['user_account'] = $account;

            header("Location:lobby.html");
        }
    } else {
        header("Location:index.html");
    }
?>
