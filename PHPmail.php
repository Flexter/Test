
<?php

	$to = 'mr.novakov@hotmail.com';
	
	$subject = 'My First Mail';


	$message=$_POST['message'];

	$header= "$email";

	$feedback = 'Yes yes';

	if ($_POST) {

	mail($to, $subject, $message, $header)

	}

?>

