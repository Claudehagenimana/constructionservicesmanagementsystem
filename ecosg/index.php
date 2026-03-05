<?php
session_start();
session_unset();
	 session_destroy();
include('db.php');
	$sql="SELECT  `comp_id`, `comp_name`, `comp_tin`, `comp_tel`, `comp_email`, `comp_address`, `comp_pobox` FROM `adm_company_info_tb`";
	$run_query=mysqli_query($conn,$sql);
if(mysqli_num_rows($run_query) > 0) {
if($row=mysqli_fetch_array($run_query)){
$campany_name=$row["comp_name"];
}}



?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>::<?php echo$campany_name;?></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.slim.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>
   <!---offline link-->
  
  <link rel="stylesheet" href="links/bootstrap.min.css">
 <link rel="stylesheet" href="links/cloudflare.css">
  <script src="links/jquery.slim.min.js"></script>
  <script src="links/jquery.min.js"></script>
  <script src="links/popper.min.js"></script>
   <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
  <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
  <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
  <script src="links/bootstrap.bundle.min.js"></script>
    <!---offline link-->
  <!--<script src="main.js"></script>-->
  <!--help jquery to update automaticaly-->
  <script src="main.js?v=<?php echo time(); ?>"></script>


</head>
<body style="background-image: url('img/background1.png');background-repeat: no-repeat;background-attachment: fixed;background-size: cover;">

<div class="container-fluid">


  <div class="row">
    <div class="col d-none d-md-block"></div>
    <div class="col">
	 <div class="col-12 mt-4 pt-4">
	<div class="shadow-sm p-4 mb-2 bg-white"> <h3  class="font-weight-info"><?php echo$campany_name;?></h3></div>
	<div class="login shadow-lg p-4 mb-4 bg-white">
	<span class="log_error"></span>
	<div class="row">
	  <form action="#" method="post" class="was-validated">
    <div class="form-group m-3">
      <label for="uname">Username:</label>
      <input type="text" class="form-control" id="uname" placeholder="Enter username" name="uname"  maxlength="10"   autocomplete='off' required>
    </div>
    <div class="form-group m-3">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd"   autocomplete='off' required>
   
    </div>

  </form>  </div>
  <div class="row">
  
    <input type="submit" class="btn-block btn-primary" id="login">
  </div> </div>
	
	</div>
	
	</div>
    <div class="col d-none d-md-block">
	</div>
  </div>
</div>

</body>
</html>
