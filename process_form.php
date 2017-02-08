<?php
include "nomoHeader.php";

$name=$_POST['fullname'];
$email=$_POST['email'];
$comment=$_POST['comment'];
$len=strlen($name);
print "<div id='formResponse'>";
print "<p>Success!<br>Thank you";
if(($name) != ' ') print ", $name";
print ".</p>";
print "<p>Your information <br>has been saved.</p>";
print "</div>";

?>




<script type="text/javascript" src="process.js"></script>
<?
include "nomoFooter.php";
?>