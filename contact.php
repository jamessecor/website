<?PHP
include "nomoHeader.php";
// Include script for onload
print "<script type='text/javascript' src='./contactScript.js'></script>";

$validation="failed";
$name="";
$email="";
$memo="";
$errors=array();

if(isset($_POST['submit'])) {
	// Name
	if(!empty($_POST['name'])) {
		$name=$_POST['name'];
		if(strlen(trim($name))==0)
			$errors['name']="Name cannot be blank.";
		else if(!preg_match("/^[a-zA-Z '-.]+$/", $name))
			$errors['name']="Name cannot include special characters.";
	} else {
		$errors['name']="This field is required.";
	}
	
	// Email
	if(!empty($_POST['email'])) {
		$email=$_POST['email'];
		if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$errors['email']="Enter a valid email address.";
		}
	} else {
		$errors['email']="This field is required.";
	}
	
	// Show errors
	$errorCount=count($errors);
	if($errorCount==0)
		$validation="Success";		
	else
		print "<small class='errorText'>There are $errorCount errors. <br>Please make corrections and try again</small>";		
}

if($validation=="Success") {
	print "<script>turnOn();</script>";
	//$len=strlen($name); don't need this, right?
	print "<div id='formResponse'>";
	print "<p>Success!<br><br>Thank you,<br>$name.</p>";
	print "<p>Your information <br>has been saved.</p>";
	print "</div>";
} else {

?>
<form id='contactForm' action="" method='post'>
Name <input type='text' name='name' value="<?php echo isset($_POST['name']) ? $_POST['name']: ''; ?>"  required="required"><br>
<small class="errorText"><?php echo array_key_exists('name', $errors) ? $errors['name'] : ""; ?></small><br>
Email* <input type='email' name='email' value="<?php echo isset($_POST['email']) ? $_POST['email'] : ''; ?>"required="required"><br>
<small class="errorText"><?php echo array_key_exists('email', $errors) ? $errors['email'] : ""; ?></small><br>
Message <textarea name='memo' placeholder='Enter comments here.' ><?php echo isset($_POST['memo']) ? $_POST['memo']: '' ?></textarea><br>
<input type='submit' name='submit' value='Submit' formnovalidate>
<p id='disclaimer'>*Only the artist will see your email</p>
</form>


<?PHP
}
include "nomoFooter.php"
?>