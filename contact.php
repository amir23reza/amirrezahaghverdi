<?php 
	header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET");
    header("Access-Control-Max-Age: 86400");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    $_POST = json_decode(file_get_contents("php://input"),true);
    $to = "amir.reza.haghverdi.khu@gmail.com";
    $subject = "contact me form : ".$_POST["email"];
    $txt = "name : ".$_POST["name"]."\nemail : ".$_POST["email"]."\nphoneNumber : ".$_POST['phone']."\ncompany : ".$_POST['company']."\nmessage : ".$_POST['message'];

    if($_POST){
        $mail = mail($to,$subject,$txt);
        echo $mail;
    }
?>