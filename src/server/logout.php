<?php
/*
*   logout
*   @version 1.0
*/

session_start();

//login session
if(!isset($_SESSION['login'])){

    //redirect to index.html
    header("Location:../web/index.html");
} else{

    session_destroy();

    //redirect to index.html
    header("Location:../web/index.html");
}


?>
