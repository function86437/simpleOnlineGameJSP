<?php
/*
*   get score in leaderboad
*   @version 1.0
*/

require_once __DIR__ . '/DBConnect.php';

$dbcon = new DBConnect();

$sql = "SELECT * FROM score";

$result = $dbcon->query2($sql)->fetchAll(PDO::FETCH_ASSOC);

if($result != null || $result != false) {
    $result = json_encode($result);
    echo $result;
} else {
    echo 'Query failed';
}

?>
