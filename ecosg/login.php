<?php
 include('db.php');
session_start();
//login
if(isset($_POST["userlogin"])){
	$email=mysqli_real_escape_string($conn,$_POST["userEmail"]);
	//$password=md5($_POST["userpassword"]);
	$password=$_POST["userpassword"];
	
	if(empty($email)&&empty($password)){
		echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>username And Pasword are required!</b></div>";
	}
	else if(empty($email)){
		echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>username is required!</b></div>";
	}
	else if(empty($password)){
		echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Password is required!</b></div>";
	}else{
		//$passwordsave=md5($password);
			$log_date=gmdate("l jS \of F Y h:i:s A");
			$sql="SELECT `staff_id`, `staff_firstname`, `staff_lastname`, `staff_phone`, `staff_idnumber`, `staff_bankaccount`, `staff_salary`, `staff_dept`, `staff_role`, `staff_startdate`, `staff_enddate`, `staff_username`, `staff_password`, `staff_status` FROM `adm_staff_tb` WHERE `staff_username`='$email' AND `staff_password`= '$password'";

$run_query=mysqli_query($conn,$sql);
$count=mysqli_num_rows($run_query);
if($count== 1){
	
	$row=mysqli_fetch_array($run_query);
	if($row["staff_status"]==0){
		
		echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Your Account had been Locked..!</b></div>";
	
	}else{
		$testuser=$row["staff_id"];
		$sql="INSERT INTO `adm_logs_tb`(`log_user`, `login_date`)VALUES ('$testuser','$log_date')";
 if(mysqli_query($conn,$sql)or die(mysqli_errno($conn))){
	 
		/*$sql="UPDATE `staff_tb` SET `staff_status`='1' WHERE `staff_id`='$testuser'";
 if(mysqli_query($conn,$sql)or die(mysqli_errno($conn))){*/
		$_SESSION["uid"]=$row["staff_id"];
	$_SESSION["fname"]=$row["staff_firstname"];
	$_SESSION["lname"]=$row["staff_lastname"];
	$_SESSION["utype"]=$row["staff_role"];
echo 1;

// }
 
 }
	}
	}else{
	 	echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Login Fail Please Try Again..!</b></div>";
}
	
	
}}

?>