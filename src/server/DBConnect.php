<?php
/*
*   Connect to database by PDO
*   @version 1.0
*
*/

class DBConnect {
    public $con = null;

    //construct
    function __construct() {

        // connect to database
        $this->connect();

    }

    //destruct
    function __destruct() {

        // close db connection
        $this->close();
    }

    /*
    * function to connect with database
    */
    function connect() {

        //import database conncetion variables
        require_once __DIR__ . '/DBConfig.php';

        //connecting to database
        try{
            $this->con = new PDO(DB_SERVER_CONFIG,DB_USER,DB_PASSWD);
        } catch (PDOException $e) {
            printf("DatabaseError: %s ", $e->getMessage());
        }


    }

    /*
    *   query function
    *   @param $sql query command
    *   $param $exepara query data
    */
    function query($sql , $exepara){

        //In order to avoid sql injection , pdo send twice time for one transcation
        //first time is sql command
        $stmt = $this->con->prepare($sql);

        //second time is data
        $stmt->execute($exepara);

        return $stmt;

    }

    function query2($sql){

        //In order to avoid sql injection , pdo send twice time for one transcation
        //first time is sql command
        $stmt = $this->con->prepare($sql);

        //second time is data
        $stmt->execute();

        return $stmt;

    }

    function close() {

        //close db connection
        $con = null;
    }


}


?>
