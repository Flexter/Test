
<?php

$to = 'mr.novakov@hotmail.com';
$subject = 'My First Mail';


$name = $-POST['name'];

$email=$_POST['email'];

$message=$_POST['message'];

$message = "";

$header= "$email";

$subject = 'Some text here' ;

if ($_POST) {

mail($to, $subject, $message, $header)

$feedback = 'Yes yes';

}

?>



<html>
<head>
	<title>Mail</title>
</head>
<body>


<p id="feedback"><?php echo $feedback; ?></p>

<form action="?" method="post">
	<ul>

			<li>
 				
					<label for="name">name</label>	
					<input type="text" name="name" id="name">

			</li>	

			<li>
 				
					<label for="email">Email</label>	
					<input type="text" name="name" id="email">

			</li>

			<li>
 				
					<label for="topic">Topic</label>

						<select id="topic">
						
							<option value="Ponies">Ponies</option>
							<option value="Mexican">Mexiacan</option>
							<option value="Winer">Winer</option>

						</select>
			</li>

			<li>
 				
					<label for="message">Give me email !!!</label>	
					
			</li>

	</ul>




</body>
</html>