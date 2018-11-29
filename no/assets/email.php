<?php

    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $message = $_POST['message'];

    $to      = "xxx@xxx.xxx";
    $subject = "";
    $message = "";
    $headers = "From: $email";

    if( mail($to,$subject,$message,$headers) )
    {
        echo "<h2>Thank you for your comment</h2>";
    }
    else
    {
        echo "<h2>Sorry, there has been an error</h2>";
    }

?>