<?php
if (isset($_POST["submit"])){
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $email_subject = "New Form submission";

  $mailTo = "tischfussball@linh-tran.de"
  $email_from = "From: ".$visitor_email;
  $email_body = "You have received a new message from the user" .$name. ".\n".$message;

  mail($mailTo,$email_subject,$email_body,$email_from);
  header("Location: index.php?mailsend");
}
