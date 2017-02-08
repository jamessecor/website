<?PHP
include "nomoHeader.php";
?>

<form id='contactForm' action='process_form.php' method='post'>
Name <input type='text' name='fullname' value=" <?php echo isset($_POST['fullname']) ? $_POST['fullname']: ""; ?>"  required><br>
Email* <input type='email' name='email' required><br>
Message <textarea name='comment' placeholder='Enter comments here.'></textarea><br>
<input type='submit' name='submit' value='Submit'>
<p id='disclaimer'>*Only the artist will see your email</p>
</form>

<script type="text/javascript" src="./contactScript.js"></script>
<?PHP
include "nomoFooter.php"
?>