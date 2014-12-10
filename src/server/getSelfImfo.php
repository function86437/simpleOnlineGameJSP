<?php
session_start();

$myself = array('id' => $_SESSION["id"], 'nickname' => $_SESSION["nickname"]);
//$myself = '{"id":' . $_SESSION["id"] . ',"nickname":' .$_SESSION["nickname"]. '}';
//$myself = json_encode($myself);
require_once __DIR__ . '/DBConnect.php';
echo $myself;
//new PDO connection
$dbcon = new DBConnect();
$sql = "SELECT * FROM lobby WHERE player1_id = ?";
$a = $_SESSION['id'];
//row count , if result = 1 , then had the same account
$result = $dbcon->query($sql , array($_SESSION['id']))->fetchAll(PDO::FETCH_ASSOC);

//$lobby = json_encode($result);


$arr = array('myself' => $myself, 'lobby' => $result);
$arr = json_encode($arr);
if($result != null || $result != false){
    echo $lobby;
        echo $arr;
} else {
    echo "false";
}

?>
