<?PHP
include "nomoHeader.php";

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
			$errors['email']="Invalid email address.";
		}
	} else {
		$errors['email']="This field is required.";
	}
	
	// Memo
	if(!empty($_POST['memo']))
		$memo=$_POST['memo'];
	
	// Show errors
	$errorCount=count($errors);
	if($errorCount==0)
		$validation="Success";		
	
}

if($validation=="Success") {
	// Set up variables for db connection
	$host='localhost';
	$user='lunches';
	$pwd='lunches';
	$database='c3';
	$date=date('Y-m-d');
	$memo=addslashes($memo);
	$name=addslashes($name);
	
	// Connect to the database
	$db=mysqli_connect($host, $user, $pwd, $database);
	
	// Send query to db
	$query="INSERT INTO contacts (name, email, note, date) VALUES ('$name', '$email', '$memo', '$date')";
	
	$result=mysqli_query($db, $query);
	if(!$result) {
		$errmsg=mysqli_error($db);
		print("Insert Error: $errmsg <br />");
	}
	
	
	print "<script>turnOn();</script>";
	print "<div id='formResponse'>";
	print "<p>Success!<br><br>Thank you,<br>$name.</p>";
	print "<p>Your information <br>has been saved.</p>";
	print "</div>";
} else {

?>
<form id='contactForm' action="" method='post'>
Name <br><input type='text' name='name' value="<?php echo isset($_POST['name']) ? $_POST['name']: ''; ?>"  required="required"><br>
<small class="errorText"><?php echo array_key_exists('name', $errors) ? $errors['name'] : ""; ?></small><br>
Email* <input type='email' name='email' value="<?php echo isset($_POST['email']) ? $_POST['email'] : ''; ?>"required="required"><br>
<small class="errorText"><?php echo array_key_exists('email', $errors) ? $errors['email'] : ""; ?></small><br>
Message <textarea name='memo' placeholder='Enter comments here.' ><?php echo isset($_POST['memo']) ? $_POST['memo']: '' ?></textarea><br>
<input type='submit' name='submit' value='Submit' formnovalidate>
<p id='disclaimer'>*Only James will see your email</p>
</form>


<?PHP
}
print "<script type='text/javascript' src='./contactScript.js'></script>";
include "nomoFooter.php"
?>