
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$dates = file_get_contents("php://input");
$array1 = json_decode($dates, true);

$mail = new PHPMailer(true);                              
try {
    //$mail->SMTPDebug = 4;                               // Habilitar el debug

    $mail->isSMTP();                                      // Usar SMTP
    $mail->Host = 'mail.gmail.com';  // Especificar el servidor SMTP reemplazando por el nombre del servidor donde esta alojada su cuenta
    $mail->SMTPAuth = true;                               // Habilitar autenticacion SMTP
    $mail->Username = 'maaaik.dev@gmail.com';               // Nombre de usuario SMTP donde debe ir la cuenta de correo a utilizar para el envio
    $mail->Password = 'Maa@ik2020da2';                           // Clave SMTP donde debe ir la clave de la cuenta de correo a utilizar para el envio
    $mail->SMTPSecure = 'ssl';                            // Habilitar encriptacion
    $mail->Port = 465;                                    // Puerto SMTP                     
    $mail->Timeout       =   30;
	$mail->AuthType = 'LOGIN';
	
	//Inputs
	$name = $array1['name'];
	$email = $array1['email'];
	$phone = $array1['phone'];
	$company = $array1['company'];
	$message = $array1['message'];

	$modal = "";

	//Recipients   

    $mail->setFrom('maaaik.dev@gmail.com');     //Direccion de correo remitente (DEBE SER EL MISMO "Username")
    $mail->addAddress('maaaik.dev@gmail.com');     // Agregar el destinatario
    $mail->addReplyTo('maaaik.dev@gmail.com');     //Direccion de correo para respuestas     

    //Content
    $mail->isHTML(true);                                  
    $mail->Subject = 'Mensaje de GEOS';
	// $mail->Body    = 'Este es solo un mensaje de ejemplo <b>en HTML!</b>';
	$mail->Body = "
	<html>
		<body> 
			<h3>Recibiste un nuevo mensaje desde el formulario de contacto de GEOS</h3>
			<p>Informaci&oacute;n enviada por el usuario de la web:</p>
			<p>Nombre: {$name}</p>
			<p>Correo electr&oacute;nico: {$email}</p>
			<p>M&oacute;vil: {$phone}</p>
			<p>Empresa: {$company}</p>
			<p>Mensaje: {$message}</p>
		</body> 
	</html>

	<br />";
    
    $mail->send();
	echo 'El mensaje ha sido enviado';
	$modal = '<script>
		$(document).ready(function()
		{
		// id de nuestro modal
		$("#modalInicio").modal("show");
		});
	</script>';
	// $modal = "$('#exampleModal').show();";

} catch (Exception $e) {
    echo 'El mensaje no pudo ser enviado. Mailer Error: ', $mail->ErrorInfo;
}