<?php

if(isset($_POST["get_staffprofile_funct"])){
	echo" <div class='row'>
	
	
	  <div class='col-md-3'>
	
	  
	  </div>
	  
	  
	 <div class='col-md-6'>
	
	
		   	<div class='card m-6' style='max-width:450px;font-size:30px;'>
    <div class='card-body' > 
	 <a class='nav-link' href='index.php'>
LOGOUT	<i class='far fa-arrow-alt-circle-right' style='font-size:38px;color:red'></i>
	   </a></div>
	   </div>
	
	
		   	<div class='card m-6' style='max-width:450px;font-size:30px;'>
    <div class='card-body'> 
	<a href='#' data-role='edit_staff_profile' data-staff_id='".$_SESSION["uid"]."' data-toggle='modal'  data-target='#editprofiledetailsModal'>
	PROFILE   <i class='fas fa-user-circle' style='font-size:30px;color:green;'></i>
		</a></div>
	   </div>
	
	
	  </div>
	  
	  
	  <div class='col-md-3'>
	
	  
	  </div>
	  </div>
	  
	  
	
   <!-- The Modal for profile -->
  <div class='modal' id='editprofiledetailsModal'>
    <div class='modal-dialog   modal-lg'>
      <div class='modal-content'>
      
        <!-- Modal Header -->
        <div class='modal-header'>
          <h4 class='modal-title'>MY PROFILE</h4>
          <button type='button' class='close' data-dismiss='modal'>&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class='modal-body'>
        
		<div class='row'>	
		<div class='col-sm-12 col-md-12'>
		 <span class='profilemodelupdate_error'></span>
			<div class='modelstaff_profile_body'>
		
	
		</div>
		
		</div>
 
 </div>
</div>
		
        </div>
        
        <!-- Modal footer -->
        <div class='modal-footer'>
          <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
        </div>
        
      </div>
    </div>  
	  
	  
	  
	  
	 
	  
   <!-- The Modal for profile -->
  <div class='modal' id='todaysalesModal'>
    <div class='modal-dialog   modal-xl'>
      <div class='modal-content'>
      
        <!-- Modal Header -->
        <div class='modal-header'>
          <h4 class='modal-title'>TODAY SUMMARY REPORT</h4>
          <button type='button' class='close' data-dismiss='modal'>&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class='modal-body'>
        
		<div class='row'>	
		<div class='col-sm-12 col-md-12'>
		 <span class='profilemodelupdate_error'></span>
			<div class='modelstaff_dayreport_body'>
		
	
		</div>
		
		</div>
 
 </div>
</div>
		
        </div>
        
        <!-- Modal footer -->
        <div class='modal-footer'>
          <button type='button' class='btn btn-danger' data-dismiss='modal'>Close</button>
        </div>
        
      </div>
    </div>  
	  
	  
	  
	  ";
	  
	  
}



if(isset($_POST['get_staffdetailsmodel'])){
$emp=$_POST['staff_id'];
	$cur_emp_type=$_SESSION["utype"];
		$sql="SELECT `staff_id`, `staff_firstname`, `staff_lastname`, `staff_phone`, `staff_idnumber`, `staff_bankaccount`, `staff_salary`, `staff_dept`, `staff_role`, `staff_startdate`, `staff_enddate`, `staff_username`, `staff_password`, `staff_status` FROM `adm_staff_tb`  WHERE `staff_id`='$emp'";
	$run_query=mysqli_query($conn,$sql);
if(mysqli_num_rows($run_query) > 0) {
	$no=0;
while($row=mysqli_fetch_array($run_query)){
$empl_ID=$row["staff_id"];
$empl_fname=$row["staff_firstname"];
$empl_lame=$row["staff_lastname"];
$empl_phone=$row["staff_phone"];
$empl_user=$row["staff_username"];
$empl_pass=$row["staff_password"];
$empl_role=$row["staff_role"];
$empl_state=$row["staff_status"];;
}}
	echo"<div class='col-sm-12 col-md-12'><div class='row'>	
		<div class='col-sm-12 col-md-6'>	
<div class='control-group'>
<label for='names'><H3><b>FIRST NAME</b></H3></label>
<input type='text' class='form-control' name='emfname' id='emfname' value='$empl_fname'  disabled/>
<label for='names'><H3><b>LAST NAME</b></H3></label>
<input type='text' class='form-control' name='emlname' id='emlname' value='$empl_lame' disabled/>
<label for='names'><H3><b>PHONE</b></H3></label>
<input type='text' class='form-control' name='emphone' id='emphone' value='$empl_phone' maxlength='10' disabled/>
</div>

 </div>

 		<div class='col-sm-12 col-md-6'>	
<div class='control-group'>
<label for='names'><H3><b>ROLE</b></H3></label>
<select class='form-control' id='emrole' name='emrole' value='' disabled>
<option value='$empl_role'>$empl_role</option>
</select><label for='names'><H3><b>USER NAME</b></H3></label>
<input type='text' class='form-control' name='myusername' id='myusername' value='$empl_user'/>
<label for='names'><H3><b>PASSWORD</b></H3></label>
<input type='password' class='form-control' name='myempass' id='myempass' value='$empl_pass'/><br/>
<button class='btn btn-lg btn-primary btn-block' id='updatemy_user_password' my_id='$empl_ID' type='submit' >CHANGE</button>
</div>

 </div>
 

</div></div>";
}

if(isset($_POST["update_myuserprofile_function"])){
$my_id=$_POST["my_id"];
$myusername=$_POST["myusername"];
$myempass=$_POST["myempass"];
$newinfo=md5($myusername."".$myempass);
$sql="UPDATE `adm_staff_tb` SET staff_username='$myusername', staff_password='$myempass' WHERE `staff_id`='$my_id'";
 if(mysqli_query($conn,$sql)or die(mysqli_errno($conn))){
	 $changeday=date("Y-m-d");
	  $changedaytime=date("Y-m-d H:i:s");
	 $sql="INSERT INTO `user_informationchange_tb`
	 (`user_informationchange_date`, `user_informationchange_by`, `user_informationchange_userid`, `user_informationchange_type`, `user_informationchange_comment`, `user_informationchange_datetime`) 
	 VALUES ('$changeday','$my_id','$my_id','CHANGE USERNAME OR PASSWORD','$newinfo','$changedaytime')";
	 if(mysqli_query($conn,$sql)){
	echo"<div class='alert alert-success'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>
	<b>INFORMATION UPDATED!</b></div>";
	 }else{
		  echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>
	<b>SAVE CHANGE INFORMATION FAIL!</b></div>";
	 }
 }else{
	 echo "<div class='alert alert-danger'>
	<a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>
	<b>INFORMATION NOT UPDATED!</b></div>";
}

}


?>