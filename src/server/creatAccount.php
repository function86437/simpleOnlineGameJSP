<?php
    if(isset($_POST['account']) && isset($_POST['password']) && isset($_POST['nickname']) && isset($_POST['birthday']) && isset($_POST['gender'])){
        $account = $_POST['account'];
        $password = $_POST['password'];
        $nickname = $_POST['nickname'];
        $birthday = $_POST['birthday'];
        $gender = $_POST['gender'];


        require_once __DIR__ . '/DBConnect.php';

        $db = new DB_CONNECT();


        $sql = mysqli_query($db->connect(),"INSERT INTO account(account, password, nickname, birthday, gender) VALUES('$account', '$password', '$nickname', '$birthday', '$gender')");

        if($sql != false){
                echo "<script>";
                echo "windows.onload = function(){alert('很不錯喔!');}";
                echo "</script>";
                header('Location: ../web/index.html');

        } else {
            echo "<script>";
            echo "windows.onload = function(){alert('資料錯誤，請再輸入一次!');}";
            echo "</script>";
            header('Location: ../web/index.html');
        }

    } else {
        echo "No Post value";
    }
?>
