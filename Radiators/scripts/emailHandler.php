<?php
    require_once "Phpmailer.php";
    require_once "Smtp.php";
    if(isset($_POST['name'])) {
        session_start();
        $mail = new PHPMailer();
        $mail->IsSMTP();
        $mail->Host = "ssl://smtp.gmail.com";
        $mail->SMTPAuth = true;
        $mail->Port = 465;
        $mail->CharSet = 'UTF-8';
        $mail->Username = "websitepaperforplotter@gmail.com";
        $mail->Password = "Gaponuk62";
        $mail->addAddress("fi07101953@gmail.com");
        $mail->Subject = "Website of radiators";
        $beginOfMessage = "Клиент по имени ".$_REQUEST["name"].", заказал:<br/>";
        $middleOfMessage = "";
        foreach($_REQUEST['goods'] as $key => $value) $middleOfMessage .= ($key + 1).". ".$value."<br/>";
        $endOfMessage = ($_REQUEST['answer'] === "true")? "От доставки не отказались" : "От доставки отказались";
        $endOfMessage .= (isset($_REQUEST['text']))? "<br/><br/> Сообщение: ".$_REQUEST['text']."<br/><br/>" : "<br/><br/>";
        $endOfMessage .= "Контакты:<br/>Тел: ".$_REQUEST['tel']."<br/>Email: ".$_REQUEST['email'];
        $resultMessage = "".$beginOfMessage."".$middleOfMessage."".$endOfMessage;
        $mail->msgHTML($resultMessage);
        if(!$mail->send()) {
            $_SESSION['flag'] = false;
            header("Location: /index.php");
        }
        else {
            $_SESSION['flag'] = true;
            header("Location: /index.php");
        }
    } else {
        header("HTTP/1.1 400 Bad Request");
        header("Location: /index.php");
    }
?>