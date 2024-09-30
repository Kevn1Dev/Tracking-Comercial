<?php
    //Conectando la base de datos mySQL a php
    $db_server = "localhost";
    $db_user = "root";
    $db_password = "";
    $db_name = "tracking-comercial";
    $connection = "";

    try{
        $connection = mysqli_connect(
            $db_server,
            $db_user,
            $db_password,
            $db_name
        );
    }
    catch (mysqli_sql_exception) {
        echo "Estas desconectado";
    }

    if ($connection) {
        echo "Estas conectado";
    } 


?>