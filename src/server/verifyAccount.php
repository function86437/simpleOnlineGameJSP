<?php
    session_start();
    if(isset($_POST['account']) && isset($_POST['password'])){
        $account = $_POST['account'];
        $password = $_POST['password'];
        $password = md5($password);

        require_once __DIR__ . '/DBConnect.php';

        $db = new DB_CONNECT();

        $sql = mysqli_query($db->connect(),"SELECT id FROM account WHERE account = '$account' and password = '$password'");

        if($sql != false){
            if($rows = mysqli_num_rows($sql)){
                $_SESSION['user_id'] = $rows['id'];
                $_SESSION['user_account'] = $rows['account'];

                header("Location:../web/lobby.html");
            } else {
            echo "<script>alert('帳號或密碼有誤!');</script>";
            header("Location:../web/index.html");
            }
        } else {
            echo "<script>alert('帳號或密碼有誤!');</script>";
            header("Location:../web/index.html");
        }

    } else {
        echo "No Post value";
    }
?>
