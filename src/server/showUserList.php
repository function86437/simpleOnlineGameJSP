<?php
/*
*   show users list
*   @version 1.0
*/

require_once __DIR__ . '/DBConnect.php';

//new PDO connection
$dbcon = new DBConnect();

$sql = "SELECT * FROM onlineuser,account WHERE onlineuser.account_id=account.id";

$result = $dbcon->query2($sql)->fetchAll(PDO::FETCH_ASSOC);



if($result != null || $result != false) {

    $json = json_encode($result);

    echo $json;

    //DB connection close
    $dbcon->close();
} else {
    echo "false";
}


?>
