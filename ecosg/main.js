$(document).ready(function(){
	
	//login
		$("body").delegate("#login","click",function(){
	var email=$("#uname").val();
	var pass=$("#pwd").val();
	$.ajax({
			url:"login.php", 
			method:"POST",
			data:{userlogin:1,userEmail:email,userpassword:pass},
			success:function(data){
					 if(data==1){
					window.location.href="dashboard.php";
				}else{
				$(".log_error").html(data);
			}}
		})
	})
//---------------------company setting-----------------

$("body").delegate("#company_setting","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_companysetting_funct:1},
			success:function(data){
				$(".main_body").html(data);
				$("#setting_panel_title").html("<H5>COMPANY SETTING</H5>");
			}
			})
})

$("body").delegate("#get_companyprofile_list","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_companylist_funct:1},
			success:function(data){
				$("#setting_panel_title").html("<H5>COMPANY PROFILE</H5>");
				$(".company_body").html(data);
			}
			})
})


function load_compnay_data(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_companylist_funct:1},
			success:function(data){
				$("#setting_panel_title").html("<H5>COMPANY PROFILE</H5>");
				$(".company_body").html(data);
			}
			})
}

$("body").delegate(".admin_editcomp","click",function(){

var comp_up=$(this).attr('comp_up');
comp_up=Number(comp_up);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_companydata_function:1,comp_up:comp_up},
			success:function(data){
				
			$("#setting_panel_title").html("<H5>UPDATE COMPANY PROFILE</H5>");
				$(".company_body").html(data);
			}
		})

})

$("body").delegate("#update_company","click",function(){
	 
var comp_up=$(this).attr('company_up_id');
comp_up=Number(comp_up);

 var compname=$("#compname").val();	
 var companytin=$("#companytin").val();	
 var companyphone=$("#companyphone").val();		
 var momo_code=$("#momo_code").val();	
 var momo_codename=$("#momo_codename").val();	
 var acc1_no=$("#acc1_no").val();
 var acc1_name=$("#acc1_name").val();
 var acc1_bank=$("#acc1_bank").val();
 var acc2_no=$("#acc2_no").val();
 var acc2_name=$("#acc2_name").val();
 var acc2_bank=$("#acc2_bank").val();

	if(compname==""){
		$("#compname").css("background-color","yellow");
	}else if(companytin==""){
		$("#companytin").css("background-color","yellow");
	}else if(companyphone==""){
		$("#companyphone").css("background-color","yellow");
	}else{
		 $('#updateemployee').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{update_companydata_function:1,comp_up:comp_up,compname:compname,companytin:companytin,companyphone:companyphone,momo_code:momo_code,momo_codename:momo_codename,acc1_no:acc1_no,acc1_name:acc1_name,acc1_bank:acc1_bank,acc2_no:acc2_no,acc2_name:acc2_name,acc2_bank:acc2_bank},
			success:function(data){
				
				alert(data);
				load_compnay_data();
			}
		})}
	})
	
	//---------------staff profile------------------
$("body").delegate("#userprofile_setting","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_staffprofile_funct:1},
			success:function(data){
				$(".main_body").html(data);
			
			}
			})
})



	$(document).on('click','a[data-role=edit_staff_profile]',function(){
		var staff_id=$(this).data('staff_id');
	staff_id=Number(staff_id);
		//alert(staff_id);
		if(staff_id<=0){
		alert("Please Logout And Login Again!");
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_staffdetailsmodel:1,staff_id:staff_id},
			success:function(data){
			
				$(".modelstaff_profile_body").html(data);
				
			}
	})}
	})
	
	function load_myprofile_update(myid){
				var staff_id=myid;
	staff_id=Number(staff_id);
		//alert(staff_id);
		if(staff_id<=0){
		alert("Please Logout And Login Again!");
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_staffdetailsmodel:1,staff_id:staff_id},
			success:function(data){
			
				$(".modelstaff_profile_body").html(data);
				
			}
	})}
	}
	

	
	
	
	
$("body").delegate("#updatemy_user_password","click",function(){
	 
var my_id=$(this).attr('my_id');
my_id=Number(my_id);

 var myempass=$("#myempass").val();	
 var myusername=$("#myusername").val();
 //---------CLEAR MESSAGE------
	$(".profilemodelupdate_error").html("");
		
	if(my_id<=0){
		$(".profilemodelupdate_error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>STAFF DATANOT FOUND</b></div>");
		
	}else if(myusername.trim().length<=0){
			$(".profilemodelupdate_error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>STAFF USERNAME CAN'T BE Empty</b></div>");
		
	}else if(myempass.trim().length<=0){
		$(".profilemodelupdate_error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>STAFF PASSWORD CAN'T BE Empty</b></div>");
		
	}else if(myempass.trim().length<4){
		$(".profilemodelupdate_error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>STAFF PASSWORD CAN'T BE LESS THAN 4 CHARACTERS</b></div>");
		
	}else{
		if (confirm("Are You Sure To Change Information? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{update_myuserprofile_function:1,myempass:myempass,myusername:myusername,my_id:my_id},
			success:function(data){
				$(".profilemodelupdate_error").html(data);
				load_myprofile_update(my_id);
			}
	})}}
	})
	
	
	
	//------------------get personal day report------------------
	
	$(document).on('click','a[data-role=my_today_sales]',function(){
		var staff_id=$(this).data('staff_id');
	staff_id=Number(staff_id);
		//alert(staff_id);
		if(staff_id<=0){
		alert("Please Logout And Login Again!");
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_staff_reportdetailsmodel:1,staff_id:staff_id},
			success:function(data){
			
				$(".modelstaff_dayreport_body").html(data);
				
			}
	})}
	})
	
	
//---------------staff------------------
$("body").delegate("#staff_setting","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_staff_funct:1},
			success:function(data){
				$(".main_body").html(data);
				$("#staff_panel_title").html("<H5>EMPLOYEES LIST</H5>");
			}
			})
})



$("body").delegate("#get_stafflist","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_stafflist_funct:1},
			success:function(data){
				$("#staff_panel_title").html("<H5>EMPLOYEES LIST</H5>");
				$(".staff_body").html(data);
			}
			})
})

function load_staff(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_stafflist_funct:1},
			success:function(data){
				$("#staff_panel_title").html("<H5>EMPLOYEES LIST</H5>");
				$(".staff_body").html(data);
			}
			})
}

$("body").delegate("#add_newstaff","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newstaffform_funct:1},
			success:function(data){
				$("#staff_panel_title").html("<H5>EMPLOYEES FORM</H5>");
				$(".staff_body").html(data);
			}
			})
})


$("body").delegate("#addemployee","click",function(event){
	event.preventDefault();//prevent refresh of page
	
		
 var emfname=$("#emfname").val();	
 var emlname=$("#emlname").val();	
 var emphone=$("#emphone").val();		
 var emrole=$("#emrole").val();	
 var emusername=$("#emusername").val();	
 var empass=$("#empass").val();
	if(emfname==""){
		$("#emfname").css("background-color","yellow");
	}else if(emlname==""){
		$("#emlname").css("background-color","yellow");
	}else if(emphone==""){
		$("#emphone").css("background-color","yellow");
	}else if(emusername==""){
		$("#emusername").css("background-color","yellow");
	}else if(empass==""){
		$("#empass").css("background-color","yellow");
	}else{
		if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		 $('#addemployee').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{saveemplo_function:1,emfname:emfname,emlname:emlname,emphone:emphone,emrole:emrole,emusername:emusername,empass:empass},
			success:function(data){
				alert(data);
				load_staff();
			}
	})}}
	})


$("body").delegate(".admin_editemp","click",function(){
		//alert();
		var empl_id=$(this).attr('emp_up');
		//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{editemp_form:1,empl_id:empl_id},
			success:function(data){
			$("#staff_panel_title").html("<H5>UPDATE EMPLOYEES</H5>");
			$(".staff_body").html(data);
			}
		})
})

$("body").delegate("#updateemployee","click",function(event){
	event.preventDefault();//prevent refresh of page
	var emp_up_id=$(this).attr('emp_up_id');
 var emfname=$("#emfname").val();	
 var emlname=$("#emlname").val();	
 var emphone=$("#emphone").val();		
 var emrole=$("#emrole").val();	
 var emusername=$("#emusername").val();	
 var empass=$("#empass").val();
	if(emfname==""){
		$("#emfname").css("background-color","yellow");
	}else if(emlname==""){
		$("#emlname").css("background-color","yellow");
	}else if(emphone==""){
		$("#emphone").css("background-color","yellow");
	}else if(emusername==""){
		$("#emusername").css("background-color","yellow");
	}else if(empass==""){
		$("#empass").css("background-color","yellow");
	}else{
		 $('#updateemployee').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{updateemplo_function:1,emp_up_id:emp_up_id,emfname:emfname,emlname:emlname,emphone:emphone,emrole:emrole,emusername:emusername,empass:empass},
			success:function(data){
				
				alert(data);
				load_staff();
			}
		})}
	})

$("body").delegate(".admin_editemp_stat","click",function(event){
	//event.preventDefault();//prevent refresh of page
	
	var emp_up_id=$(this).attr('emp_up');
 var emstat=$(this).attr('emp_val');
 //alert(emstat);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{updateemplo_status:1,emp_up_id:emp_up_id,emstat:emstat},
			success:function(data){
				
					alert(data);
				load_staff();
			}
		})
	})
		
		
$("body").delegate("#menu_list","click",function(){
		
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{menu_list:1},
			success:function(data){
	$("#staff_panel_title").html("<H5>MENU_LIST</H5>");
				$(".staff_body").html(data);
			}
		})
})		
		
	
$("body").delegate("#logs_list","click",function(){
		
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{logs_list:1},
			success:function(data){
	$("#staff_panel_title").html("<H5>STAFFS_LOGS_LIST</H5>");
				$(".staff_body").html(data);
			}
		})
})	

	
$("body").delegate(".admin_accessemp","click",function(){
		//alert();
		var empl_id=$(this).attr('emp_up');
		//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{editaccessemp_form:1,empl_id:empl_id},
			success:function(data){
	$("#staff_panel_title").html("<H5>EMPLOYEE ACCESS</H5>");
				$(".staff_body").html(data);
			}
		})
})
	
	
	$("body").delegate(".admin_deletemenu","click",function(){
		//alert();
		var menu_deleteid=$(this).attr('menu_deleteid');
	var menu_user=$(this).attr('menu_user');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{delete_access:1,menu_deleteid:menu_deleteid,menu_user:menu_user},
			success:function(data){
	$("#staff_panel_title").html("<H5>EMPLOYEE ACCESS</H5>");
				$(".staff_body").html(data);
			}
		})
})


	$("body").delegate("#access_emp_btn","click",function(){
		//alert();
		var emplo_id=$(this).attr('emp_id');
	var menu_id=$("#menu_ID").val();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{addnew_access:1,emplo_id:emplo_id,menu_id:menu_id},
			success:function(data){
	$("#staff_panel_title").html("<H5>EMPLOYEE ACCESS</H5>");
				$(".staff_body").html(data);
			}
		})
})


//-----------------stock ------------------

$("body").delegate("#stock_setting","click",function(){
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_stock_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".main_body").html(data);
				$("#stock_panel_title").html("<H5>STOCK PANEL</H5>");
			}
	})}
})

$("body").delegate("#bg_category","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_bgcategory_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>BG LIST</H5>");
				$(".stock_body").html(data);
			}
			})
})

function load_bg_category(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_bgcategory_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>BG LIST</H5>");
				$(".stock_body").html(data);
			}
			})
}
$("body").delegate("#new_bg","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewbg_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW BG FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})

$("body").delegate("#addbg","click",function(){
var bg_name=$("#bg_name").val();	
 var bg_code=$("#bg_code").val();
	if(bg_name==""){
		$("#bg_name").css("background-color","yellow");
	}else if(bg_code==""){
		$("#bg_code").css("background-color","yellow");
	}else{if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		 $('#addbg').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newbg_funct:1,bg_name:bg_name,bg_code:bg_code},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>BG LIST</H5>");
				load_bg_category();
			}
	})}}

	})
		
	
$("body").delegate("#edit_bg","click",function(){
	
		var bg_id=$(this).attr('bg_id')
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_editbg_funct:1,bg_id:bg_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>UPDATE BG FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})
	



$("body").delegate("#updatebg","click",function(){
	var bg_up=$(this).attr('bg_up')
var bg_name=$("#bg_name").val();	
 var bg_code=$("#bg_code").val();
	if(bg_name==""){
		$("#bg_name").css("background-color","yellow");
	}else if(bg_code==""){
		$("#bg_code").css("background-color","yellow");
	}else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{update_bg_funct:1,bg_up:bg_up,bg_name:bg_name,bg_code:bg_code},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>BG LIST</H5>");
				load_bg_category();
			}
	})}

	})
	


$("body").delegate("#itmatt_category","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_itmattcategory_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>IT/MATT LIST</H5>");
				$(".stock_body").html(data);
			}
			})
})

function load_itmatt_category(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_itmattcategory_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>IT/MATT LIST</H5>");
				$(".stock_body").html(data);
			}
			})
}

$("body").delegate("#new_itmatt","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewitmatt_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW IT/MATT FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})

$("body").delegate("#addit","click",function(){
var it_name=$("#it_name").val();	
 var it_code=$("#it_code").val();
	if(it_name==""){
		$("#it_name").css("background-color","yellow");
	}else if(it_code==""){
		$("#it_code").css("background-color","yellow");
	}else{if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#addit').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newit_funct:1,it_name:it_name,it_code:it_code},
			success:function(data){
				alert(data);
				load_itmatt_category();
			}
	})}}

	})


$("body").delegate("#edit_it","click",function(){
	
		var it_id=$(this).attr('it_id')
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_editit_funct:1,it_id:it_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>UPDATE IT FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})




$("body").delegate("#updateit","click",function(){
	
var it_upid=$(this).attr('it_upid')
var it_name=$("#it_name").val();	
 var it_code=$("#it_code").val();
 var bg_name=$("#bg_name").val();
	if(it_name==""){
		$("#it_name").css("background-color","yellow");
	}else if(it_code==""){
		$("#it_code").css("background-color","yellow");
	}else if(bg_name<=0){
		$("#bg_name").css("background-color","yellow");
	}else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updateit_funct:1,it_upid:it_upid,it_name:it_name,it_code:it_code,bg_name:bg_name},
			success:function(data){
				alert(data);
				load_itmatt_category();
			}
	})}

	})
//----------------------------------------------

$("body").delegate("#coil_stock","click",function(){
	//alert();
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coillist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL LIST</H5>");
				$(".stock_body").html(data);
			}
	})}
})

function load_coillist(check_mysession){
	
	var check_sessesion_id=check_mysession;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coillist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL LIST</H5>");
				$(".stock_body").html(data);
			}
			})
}
	
	
$("body").delegate("#search_coil","keyup",function(){
	var search_coil=$("#search_coil").val();
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_funct:1,search_coil:search_coil,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".coil_body").html(data);
			}
	})}
})
	
	//-----------search by status---------
	
	$("body").delegate("#coil_sortby_status","click",function(){
	var coil_sortby_status=$("#coil_sortby_status").val();
	coil_sortby_status=Number(coil_sortby_status);
	if(coil_sortby_status<=0){
	}else{
		
		if(coil_sortby_status==1){
			coil_by_status='New';
		}else if(coil_sortby_status==2){
			
			coil_by_status='Processing';
		}else if(coil_sortby_status==3){
			
			coil_by_status='Completed';
		}else{
			coil_by_status='';
		}
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_bystatus_funct:1,coil_by_status:coil_by_status,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".coil_body").html(data);
			}
	})}}
})
	
	
	
	$("body").delegate("#new_coil","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewcoil_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW COIL FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})	
	
	
	
	
		$("body").delegate("#bg_name","click",function(){
	var mybg_name_id=$("#bg_name").val();
	mybg_name_id=Number(mybg_name_id);
	if(mybg_name_id<=0){
		
	}else{
		

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_it_by_bgname_funct:1,mybg_name_id:mybg_name_id},
			success:function(data){
				$(".my_bg_it").html(data);
			}
	})}
})	


$("body").delegate("#savenewcoil","click",function(){
var bg_name=$("#bg_name").val();
var bg_group=$("#bg_group").val();
 var coil_no=$("#coil_no").val();	
 var coil_color=$("#coil_color").val();	
 var netweigth=$("#netweigth").val();	
 var grossweigth=$("#grossweigth").val();	
 var meter=$("#meter").val();	

 var coil_date=$("#coil_date").val();
var coil_invoice=$("#coil_invoice").val();
 bg_name=Number(bg_name);
 bg_group=Number(bg_group);
 coil_color=Number(coil_color);
 netweigth=Number(netweigth);
 grossweigth=Number(grossweigth);
 meter=Number(meter);
 
 var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
	if(bg_name<=0){
		alert('Select BG');
	}else if(bg_group<=0){
		alert('Select BG GROUP');
	}else if(coil_no==""){
		$("#coil_no").css("background-color","yellow");
	}else if(coil_color<=0){
		alert("Select Color");
	}else if(netweigth<=0){
		$("#netweigth").css("background-color","yellow");
	}else if(grossweigth<=0){
		$("#grossweigth").css("background-color","yellow");
	}else if(meter<=0){
		$("#meter").css("background-color","yellow");
	}else if(coil_date==""){
		$("#coil_date").css("background-color","yellow");
	}else if(coil_invoice==""){
		$("#coil_invoice").css("background-color","yellow");
	}
	else{if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#savenewcoil').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_coil_funct:1,bg_name:bg_name,bg_group:bg_group,coil_no:coil_no,coil_color:coil_color,netweigth:netweigth,grossweigth:grossweigth,meter:meter,coil_date:coil_date,coil_invoice:coil_invoice},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>COIL LIST</H5>");
				load_coillist(check_sessesion_id);
			}
	})}}}

	})

//----------------------------PRODUCTION ITEMS--------------------		
	$("body").delegate("#production_items","click",function(){
	//var coil_viewid=$(this).attr('bg_id')
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coilexpectedoutput_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL PRODUCTION ITEMS LIST</H5>");
				$(".stock_body").html(data);
			}
			})
})
	
	function load_outputitem_list(){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coilexpectedoutput_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL PRODUCTION ITEMS LIST</H5>");
				$(".stock_body").html(data);
			}
			})
	}
	$("body").delegate("#remove_outputitem","click",function(){
	var itemout_id=$(this).attr('itemout_id')
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{remove_outputitem_funct:1,itemout_id:itemout_id},
			success:function(data){
				alert(data);
				load_outputitem_list();
			}
			})
})
	
	
$("body").delegate("#add_outputitem","click",function(){
	
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newoutputitem_formfunct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW PRODUCTION ITEMS FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})
	
	
	
	$("body").delegate("#saveoutputitem","click",function(){
var item_id=$("#item_id").val();	
 var item_productiontype=$("#item_productiontype").val();
var item_productionlevel=$("#item_productionlevel").val();
var item_production_grouping=$("#item_production_grouping").val();
   var itemid=$("#item_id");
  var itemname =itemid.find(':selected').data('itemname');
 item_id=Number(item_id);
	if(item_id<=0){
		alert('Select Items');
	}else{if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#saveoutputitem').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newoutput_funct:1,item_id:item_id,itemname:itemname,item_productiontype:item_productiontype,item_productionlevel:item_productionlevel,item_production_grouping:item_production_grouping},
			success:function(data){
			alert(data);
				load_outputitem_list();
			}
	})}}

	})
//------------------coil output------------------


		$("body").delegate("#coil_output","click",function(){
		var coilup_id=$(this).attr('coilup_id');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewcoil_funct:1,coilup_id:coilup_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL INFORMATIONS</H5>");
				$(".stock_body").html(data);
				load_coilproduction_list(coilup_id)
			}
			})
})

//------------view produced product only--------


	$("body").delegate("#coil_viewlistproduct","click",function(){
		var coilup_id=$(this).attr('coilup_id');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewcoilproduct_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL INFORMATIONS</H5>");
				$(".stock_body").html(data);
				load_getcoilproducedproduct(coilup_id);
			}
			})
})

function load_getcoilproducedproduct(mycoil){
	var coilup_id=mycoil;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_loadviewcoilproduct_funct:1,coilup_id:coilup_id},
			success:function(data){
				
				$(".produced_details_forcoil").html(data);
			}
			})
}



$("body").delegate("#search_coilproduct","keyup",function(){
	var search_coilproduct=$("#search_coilproduct").val();

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_produceddetailsfunct:1,search_coilproduct:search_coilproduct},
			success:function(data){
					$(".produced_details_forcoil").html(data);
			}
	})
})


//---------------------search by product-----------------
$("body").delegate("#product_report_type","click",function(){
	var search_coilproduct=$("#search_coilproduct").val();
var product_datefrom=$("#product_datefrom").val();

  //var product_datefromcount=product_datefrom.length;
  
var product_dateto=$("#product_dateto").val();
var product_report_type=$("#product_report_type").val();
 product_report_type=Number(product_report_type);
 if(product_report_type==1){
	 $.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_produceddetailsfunct_bydate:1,product_datefrom:product_datefrom,product_dateto:product_dateto},
			success:function(data){
					$(".produced_details_forcoil").html(data);
			}
 })
 }else if(product_report_type==2){
	  $.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_produceddetailsfunct_bydatecoil:1,search_coilproduct:search_coilproduct,product_datefrom:product_datefrom,product_dateto:product_dateto},
			success:function(data){
					$(".produced_details_forcoil").html(data);
			}
 })
	 
	 
 }else{
		}
})
//--------------------end--------

$("body").delegate("#updatecoil","click",function(){
	
var coilup_id=$(this).attr('coilup');
var bg_name=$("#bg_name").val();
var bg_group=$("#bg_group").val();
 var coil_no=$("#coil_no").val();	
 var coil_color=$("#coil_color").val();	
 var netweigth=$("#netweigth").val();	
 var grossweigth=$("#grossweigth").val();	
 var meter=$("#meter").val();	
 var coil_date=$("#coil_date").val();	
 var coil_invoice=$("#coil_invoice").val();
 bg_name=Number(bg_name);	
 bg_group=Number(bg_group);
 coil_color=Number(coil_color);
 netweigth=Number(netweigth);
 grossweigth=Number(grossweigth);
 meter=Number(meter);
 
  var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(bg_name<=0){
		alert('Select BG');
	}else if(bg_group<=0){
		alert('Select BG GROUP');
	}else if(coil_no==""){
		$("#coil_no").css("background-color","yellow");
	}else if(coil_color<=0){
		alert("Select Color");
	}else if(netweigth<=0){
		$("#netweigth").css("background-color","yellow");
	}else if(grossweigth<=0){
		$("#grossweigth").css("background-color","yellow");
	}else if(meter<=0){
		$("#meter").css("background-color","yellow");
	}else if(coil_date==""){
		$("#coil_date").css("background-color","yellow");
	}else if(coil_invoice==""){
		$("#coil_invoice").css("background-color","yellow");
	}
	else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatecoil_funct:1,coilup_id:coilup_id,bg_name:bg_name,coil_no:coil_no,coil_color:coil_color,netweigth:netweigth,grossweigth:grossweigth,meter:meter,bg_group:bg_group,coil_date:coil_date,coil_invoice:coil_invoice},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>COIL LIST</H5>");
				load_coillist(check_sessesion_id);
			}
	})}
	}
	})
	
	//--------------------------update coil excess------------
	
$("body").delegate("#save_diff_qty","click",function(){
	
var diff_coilup=$(this).attr('diff_coilup');
 var diff_qtymeter=$("#diff_qtymeter").val();	
 var excess_type=$("#excess_type").val();
 diff_coilup=Number(diff_coilup);
 diff_qtymeter=Number(diff_qtymeter);
 excess_type=Number(excess_type);
 
  var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(diff_coilup<=0){
		alert('Select COIL AGAIN');
	}else if(diff_qtymeter<0){
		alert('METER CAN NOT BE ZERO OR LESS');
		$("#diff_qtymeter").css("background-color","yellow");
	
	}else if(excess_type>=2){
		alert('PLEASE SELECT EXCESS TYPE');
	}
	else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatecoilexcess_funct:1,diff_coilup:diff_coilup,diff_qtymeter:diff_qtymeter,excess_type:excess_type},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>COIL LIST</H5>");
				load_coillist(check_sessesion_id);
			}
	})}
}}
	})
//----------------------------------end update coil------------	
	
		$("body").delegate("#save_produceditem_btn","click",function(){
		var coil_id=$(this).attr('coil_id');
		coil_id=Number(coil_id);
		var coil_rem_size=$("#coil_rem_size").val();
		coil_rem_size=Number(coil_rem_size);
		 var item_id=$("#item_id").val();
		 item_id=Number(item_id);
		 var qty=$("#qty").val();
		 qty=Number(qty);
		 var item_size=$("#item_size").val();
		 item_size=Number(item_size);
		 var requested_size=qty*item_size;
		 requested_size=Number(requested_size);
		var item_production_date=$("#item_production_date").val();
		if(coil_id<=0){
			alert("Please Select Coil Again");
		}else if(requested_size>coil_rem_size){
			alert("Size Requested Are Greater Than Available Size,Change Qty");
			$("#qty").css("background-color","yellow");
		}else if(item_id<=0){
			alert("Please Select Item Again");
		}else if(qty<=0){
				$("#qty").css("background-color","yellow");
		}else if(item_size<=0){
				$("#item_size").css("background-color","yellow");
		}else if(item_production_date==""){
				alert("Please Select Production Date");
		}else{
			requested_size=requested_size.toFixed(2);
			var current_qty=coil_rem_size-requested_size;
			
			if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
				$('#save_produceditem_btn').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_coilproduceditem_funct:1,coil_id:coil_id,item_id:item_id,qty:qty,item_size:item_size,requested_size:requested_size,item_production_date:item_production_date},
			success:function(data){
				alert(data);
				$("#coil_rem_size_disabled").val(current_qty);
				$("#coil_rem_size").val(current_qty);
				load_coilproduction_list(coil_id)
			}
		})}}
})
function load_coilproduction_list(my_coil){
	var coil_id=my_coil;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{list_coilproduceditem_funct:1,coil_id:coil_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>COIL INFORMATIONS</H5>");
				$(".coil_produced_items").html(data);
			}
		})
}

	
	$("body").delegate("#removecoil_output","click",function(){
	
	var coiloutitem_id=$(this).attr('coiloutitem_id');
	var coiloutup_id=$(this).attr('coiloutup_id');
	var output_qty_size=$(this).attr('output_qty_size');
var coiloutup_coilid=$(this).attr('coiloutup_coilid');
if (confirm("Are You Sure To Remove? Press Ok Or Cancel!")) {
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{remove_coil_outputitem_funct:1,coiloutitem_id:coiloutitem_id,coiloutup_id:coiloutup_id,output_qty_size:output_qty_size,coiloutup_coilid:coiloutup_coilid},
			success:function(data){
				load_coilproduction_list(coiloutup_coilid);
			}
})}
})



	$("body").delegate("#transfercoil_output","click",function(){
	
	var coiloutitem_id=$(this).attr('coiloutitem_id');
	var coiloutup_id=$(this).attr('coiloutup_id');
	var coil_transfer_qty=$(this).attr('coil_transfer_qty');
var coiloutup_coilid=$(this).attr('coiloutup_coilid');
var coil_output_proformadetails=$(this).attr('coil_output_proformadetails');

	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#transfercoil_output').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{transfer_coil_outputitem_funct:1,coiloutitem_id:coiloutitem_id,coiloutup_id:coiloutup_id,coil_transfer_qty:coil_transfer_qty,coil_output_proformadetails:coil_output_proformadetails,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_coilproduction_list(coiloutup_coilid)
			}
	})}}
})

	$("body").delegate("#damagedcoil_output","click",function(){
	
	var coiloutitem_id=$(this).attr('coiloutitem_id');
	var coiloutup_id=$(this).attr('coiloutup_id');
	var coil_damaged_qty=$(this).attr('coil_damaged_qty');
var coiloutup_coilid=$(this).attr('coiloutup_coilid');


	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#damagedcoil_output').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{damaged_coil_outputitem_funct:1,coiloutitem_id:coiloutitem_id,coiloutup_id:coiloutup_id,coil_damaged_qty:coil_damaged_qty,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_coilproduction_list(coiloutup_coilid)
			}
	})}}
})
//-------------------------CRC--------------------


$("body").delegate("#crc_thickness_category","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crcthickness_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC THICKNESS</H5>");
				$(".stock_body").html(data);
			}
			})
})

function load_crc_thickness(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crcthickness_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC THICKNESS</H5>");
				$(".stock_body").html(data);
			}
			})
}

$("body").delegate("#new_crcthickness","click",function(){
	//alert();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewcrcthickness_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW CRC THICKNESS FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})


$("body").delegate("#addthickness","click",function(){
var thickness_name=$("#thickness_name").val();
var thickness_code=$("#thickness_code").val();
	if(thickness_name==""){
		$("#thickness_name").css("background-color","yellow");
	}else if(thickness_code==""){
		$("#thickness_code").css("background-color","yellow");
	}else{
		if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#addthickness').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_thickness_funct:1,thickness_name:thickness_name,thickness_code:thickness_code},
			success:function(data){
				alert(data);
				load_crc_thickness();
			}
	})}}

	})




$("body").delegate("#update_crcthickness","click",function(){
	
	var crc_thickness_id=$(this).attr('crc_thickness_id')
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_updatecrcthickness_form:1,crc_thickness_id:crc_thickness_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>UPDATE CRC THICKNESS FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})




$("body").delegate("#updatethickness","click",function(){
		var up_thickness_id=$(this).attr('up_thickness_id')
var thickness_name=$("#thickness_name").val();
var thickness_code=$("#thickness_code").val();
	if(thickness_name==""){
		$("#thickness_name").css("background-color","yellow");
	}else if(thickness_code==""){
		$("#thickness_code").css("background-color","yellow");
	}else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatethickness_funct:1,up_thickness_id:up_thickness_id,thickness_name:thickness_name,thickness_code:thickness_code},
			success:function(data){
				alert(data);
				load_crc_thickness();
			}
	})}

	})
	
	
		$("body").delegate("#crc_stock","click",function(){
				var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crclist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC LIST</H5>");
				$(".stock_body").html(data);
			}
	})}
})
function load_crc_list(my_check_sessesion_id){
	var check_sessesion_id=my_check_sessesion_id;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crclist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC LIST</H5>");
				$(".stock_body").html(data);
			}
			})
}	
	
	
		
$("body").delegate("#search_crc","keyup",function(){
	var search_crc=$("#search_crc").val();
	
			var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcrc_funct:1,search_crc:search_crc,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".crc_body").html(data);
			}
	})}
})
	
	
		
$("body").delegate("#new_crc","click",function(){
			
			var check_sessesion_id=$(this).attr('cur_access');
			check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewcrc_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW CRC FORM</H5>");
				$(".stock_body").html(data);
			}
	})}
})



	$("body").delegate("#crc_date","mouseenter",function(){
	 $("#crc_date").datepicker({ minDate: -10, maxDate: "+0D" });
	})
	
$("body").delegate("#savenewcrc","click",function(){

 var crc_no=$("#crc_no").val();	
 var crc_package_invoice=$("#crc_package_invoice").val();
 var crc_thickness=$("#crc_thickness").val();	
 var netweigth=$("#netweigth").val();	
 var grossweigth=$("#grossweigth").val();	
 var meter=$("#meter").val();	
 var crc_date=$("#crc_date").val();	
crc_thickness=Number(crc_thickness);
 netweigth=Number(netweigth);
 grossweigth=Number(grossweigth);
 meter=Number(meter);
 	var check_sessesion_id=$(this).attr('cur_access');
			check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
	if(crc_no==""){
		$("#crc_no").css("background-color","yellow");
	}else if(crc_thickness<=0){
		alert("Select Thickness");
	}else if(netweigth<=0){
		$("#netweigth").css("background-color","yellow");
	}else if(grossweigth<=0){
		$("#grossweigth").css("background-color","yellow");
	}else if(meter<=0){
		$("#meter").css("background-color","yellow");
	}else if(crc_date==""){
		$("#crc_date").css("background-color","yellow");
	}else if(crc_package_invoice==""){
		$("#crc_package_invoice").css("background-color","yellow");
	}
	else{
			if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#savenewcrc').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_crc_funct:1,crc_thickness:crc_thickness,crc_no:crc_no,netweigth:netweigth,grossweigth:grossweigth,meter:meter,crc_date:crc_date,crc_package_invoice:crc_package_invoice},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>CRC LIST</H5>");
				load_crc_list(check_sessesion_id);
			}
	})}}}

	})
	
	
		$("body").delegate("#crc_output","click",function(){
	var crcup_id=$(this).attr('crcup_id');
	 	var check_sessesion_id=$(this).attr('cur_access');
			check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewcrc_funct:1,crcup_id:crcup_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC INFORMATIONS </H5>");
				$(".stock_body").html(data);
				load_crcproduction_list(crcup_id);
			}
	})}
})
	
	//------------------view CRC TOLE/HS PRODUCED -------------
	
		$("body").delegate("#crc_viewlisttole_hs_product","click",function(){
	var crcup_id=$(this).attr('crcup_id');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewcrc_tole_hs_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC TOLE/H.S LIST INFORMATIONS </H5>");
				$(".stock_body").html(data);
				get_loadviewcrclproduct_funct(crcup_id);
			}
			})
})


function get_loadviewcrclproduct_funct(my_crc){
	var crc_id=my_crc;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_loadviewcrctole_hs_product_funct:1,crc_id:crc_id},
			success:function(data){
				$(".produced_details_forcrc").html(data);
			}
		})
}


$("body").delegate("#search_crc_tole_hs_product","keyup",function(){
	var search_crc_tole_hs_product=$("#search_crc_tole_hs_product").val();

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_produced_tole_hs_detailsfunct:1,search_crc_tole_hs_product:search_crc_tole_hs_product},
			success:function(data){
			
				$(".produced_details_forcrc").html(data);
			}
	})
})
	
	
//---------------------search by product-----------------
$("body").delegate("#tole_hs_report_type","click",function(){
	var search_crc_tole_hs_product=$("#search_crc_tole_hs_product").val();
var product_datefrom=$("#product_datefrom").val();

  //var product_datefromcount=product_datefrom.length;
  
var product_dateto=$("#product_dateto").val();
var tole_hs_report_type=$("#tole_hs_report_type").val();
 tole_hs_report_type=Number(tole_hs_report_type);
 if(tole_hs_report_type==1){
	 $.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_produced_tole_hs_detailsfunct_bydate:1,product_datefrom:product_datefrom,product_dateto:product_dateto},
			success:function(data){
					$(".produced_details_forcrc").html(data);
			}
 })
 }else if(tole_hs_report_type==2){
	  $.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchcoil_produced_tole_hs_detailsfunct_bydatecrc:1,search_crc_tole_hs_product:search_crc_tole_hs_product,product_datefrom:product_datefrom,product_dateto:product_dateto},
			success:function(data){
					$(".produced_details_forcrc").html(data);
			}
 })
	 
	 
 }else{
		}
})	
	
	//------------------END CRC TOLE/HS PRODUCED -------------
	
	
			$("body").delegate("#tole_hs_production_view","click",function(){
	var tole_hs_production_id=$(this).attr('tole_hs_production_id');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_view_tole_hs_produced_funct:1,tole_hs_production_id:tole_hs_production_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>TOLE/H.S PRODUCTS LIST INFORMATIONS </H5>");
				$(".produced_details_forcrc").html(data);
			}
			})
})
	//------------------------end view product from tole---------------
	
$("body").delegate("#saveupdatecrc","click",function(){
var crc_upid=$(this).attr('crc_upid');	
 var crc_no=$("#crc_no").val();	
 var crc_package_invoice=$("#crc_package_invoice").val();
 var crc_thickness=$("#crc_thickness_id").val();	
 var netweigth=$("#netweigth").val();	
 var grossweigth=$("#grossweigth").val();	
 var meter=$("#meter").val();	
 var crc_date=$("#crc_date").val();	
 crc_upid=Number(crc_upid);
crc_thickness=Number(crc_thickness);
 netweigth=Number(netweigth);
 grossweigth=Number(grossweigth);
 meter=Number(meter);
 	var check_sessesion_id=$(this).attr('cur_access');
			check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(crc_no==""){
		$("#crc_no").css("background-color","yellow");
	}else if(crc_thickness<=0){
		alert("Select Thickness");
	}else if(netweigth<=0){
		$("#netweigth").css("background-color","yellow");
	}else if(grossweigth<=0){
		$("#grossweigth").css("background-color","yellow");
	}else if(meter<=0){
		$("#meter").css("background-color","yellow");
	}else if(crc_date==""){
		$("#crc_date").css("background-color","yellow");
	}else if(crc_package_invoice==""){
		$("#crc_package_invoice").css("background-color","yellow");
	}else if(crc_upid<=0){
		alert("Please Select CRC Again");
	}
	else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatedcrc_funct:1,crc_upid:crc_upid,crc_thickness:crc_thickness,crc_no:crc_no,netweigth:netweigth,grossweigth:grossweigth,meter:meter,crc_date:crc_date,crc_package_invoice:crc_package_invoice},
			success:function(data){
				alert(data);
				$("#stock_panel_title").html("<H5>CRC LIST</H5>");
				load_crc_list(check_sessesion_id);
			}
	})}
	}
	})
//-----------------------crc report------------------

$("body").delegate("#crc_report","click",function(){
	
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crcreport_funct:1},
			success:function(data){
			$("#stock_panel_title").html("<H5>CRC REPORT </H5>");
				$(".stock_body").html(data);
				
			}
})})
//-----end crc report------------------------	
	
	
$("body").delegate("#save_crcproduceditem_btn","click",function(){
		var crc_id=$(this).attr('crc_id');
		crc_id=Number(crc_id);
		var crc_rem_size=$("#crc_rem_size").val();
		crc_rem_size=Number(crc_rem_size);
		 var item_id=$("#item_id").val();
		 item_id=Number(item_id);
		 var qty=$("#qty").val();
		 qty=Number(qty);
		 var item_size=$("#item_size").val();
		 item_size=Number(item_size);
		 var requested_size=qty*item_size;
		 requested_size=Number(requested_size);
		 requested_size=requested_size.toFixed(2);
		 var tole_produce_date=$("#tole_produce_date").val();
		if(crc_id<=0){
			alert("Please Select CRC Again");
		}else if(requested_size>crc_rem_size){
			
			alert("Size Requested Are Greater Than Available Size,Change Qty");
			$("#qty").css("background-color","yellow");
		}else if(item_id<=0){
			alert("Please Select Item Again");
		}else if(qty<=0){
				$("#qty").css("background-color","yellow");
		}else if(item_size<=0){
				$("#item_size").css("background-color","yellow");
		}else if(tole_produce_date==""){
				alert("Please Select Production Date");
		}else{
			var current_qty=crc_rem_size-requested_size;
			if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#save_crcproduceditem_btn').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_crcproduceditem_funct:1,crc_id:crc_id,item_id:item_id,qty:qty,item_size:item_size,tole_produce_date:tole_produce_date},
			success:function(data){
				alert(data);
				$("#crc_rem_size_disabled").val(current_qty);
				$("#crc_rem_size").val(current_qty);
				load_crcproduction_list(crc_id)
			}
		})}}
})

function load_crcproduction_list(my_crc){
	var crc_id=my_crc;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{list_crcproduceditem_funct:1,crc_id:crc_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>CRC INFORMATIONS</H5>");
				$(".crc_produced_items").html(data);
			}
		})
}

//--------------------------update CRC excess------------
	
$("body").delegate("#crcsave_diff_qty","click",function(){
	
var diff_crcup=$(this).attr('diff_crcup');
 var crcdiff_qtymeter=$("#crcdiff_qtymeter").val();	
 var crcexcess_type=$("#crcexcess_type").val();
 diff_crcup=Number(diff_crcup);
 crcdiff_qtymeter=Number(crcdiff_qtymeter);
 crcexcess_type=Number(crcexcess_type);
 
  var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(diff_crcup<=0){
		alert('Select CRC AGAIN');
	}else if(crcdiff_qtymeter<0){
		alert('METER CAN NOT BE ZERO OR LESS');
			$("#crcdiff_qtymeter").css("background-color","yellow");
	}else if(crcexcess_type>=2){
		alert('PLEASE SELECT EXCESS TYPE');
	}
	else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatecrcexcess_funct:1,diff_crcup:diff_crcup,crcdiff_qtymeter:crcdiff_qtymeter,crcexcess_type:crcexcess_type},
			success:function(data){
				alert(data);
				//$("#stock_panel_title").html("<H5>COIL LIST</H5>");
				//load_coillist(check_sessesion_id);
					load_crcproduction_list(diff_crcup);
			}
	})}
}}
	})

//-----------------------------END CRC EXCESS---------------------
/*
$(document).on('click','a[data-role=view_produce_sale_crc_list]',function(){
		var crcitem_id_tosale_produce=$(this).data('crcitem_id_tosale_produce');
		var crcoutup_id_tosale_produce=$(this).data('crcoutup_id_tosale_produce');
		var crcoutup_crcid_tosale_produce=$(this).data('crcoutup_crcid_tosale_produce');
		var crcoutqty_tosale_produce=$(this).data('crcoutqty_tosale_produce');
		var crc_production_size=$(this).data('crc_production_size');
		var crcoutup_crcid=$(this).data('crcoutup_crcid');
		var tolename=$(this).data('tolename');
		var crc_width=$(this).data('crc_width');
		var my_tole=crcoutup_id_tosale_produce;
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_produce_sale_tole_model:1,crcitem_id_tosale_produce:crcitem_id_tosale_produce,crcoutup_id_tosale_produce:crcoutup_id_tosale_produce,crcoutup_crcid_tosale_produce:crcoutup_crcid_tosale_produce,crcoutqty_tosale_produce:crcoutqty_tosale_produce,crc_production_size:crc_production_size,crcoutup_crcid:crcoutup_crcid,tolename:tolename,crc_width:crc_width},
			success:function(data){
			
				$(".modeltolemovementhistory_bysale_produce").html(data);
				
			load_toleplaneproduction_sale_list(my_tole);
				
			}
		})
	})*/	
	
	$(document).on('click','a[data-role=view_produce_sale_crc_list]',function(){
	
	var crcoutup_id_tosale_produce=$(this).data('crcoutup_id_tosale_produce');
	
		var my_tole=crcoutup_id_tosale_produce;
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_produce_sale_tole_model:1,crcoutup_id_tosale_produce:crcoutup_id_tosale_produce},
			success:function(data){
			
				$(".modeltolemovementhistory_bysale_produce").html(data);
				
			load_toleplaneproduction_sale_list(my_tole);
				
			}
		})
	})
	
	function load_toleplanemovement_panel(mytoleid){
		
		
	var crcoutup_id_tosale_produce=mytoleid;
	
		var my_tole=crcoutup_id_tosale_produce;
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_produce_sale_tole_model:1,crcoutup_id_tosale_produce:crcoutup_id_tosale_produce},
			success:function(data){
			
				$(".modeltolemovementhistory_bysale_produce").html(data);
				
			//load_toleplaneproduction_sale_list(my_tole);
				
			}
		})
	}
	
	
//-----------save toleplane history--------------
	$("body").delegate("#save_toleplanehistory","click",function(){
	
	 var takentoleplaneids=$("#takentoleplaneids").val();
	 takentoleplaneids=Number(takentoleplaneids);
	 var allocated_toleqty=$("#allocated_toleqty").val();
	 allocated_toleqty=Number(allocated_toleqty);
	 var allocationtoledate=$("#allocationtoledate").val();
	 var destination_type=$("#destination_type").val();
	 var remain_toleqty_toallocate=$("#remain_toleqty_toallocate").val();
	 remain_toleqty_toallocate=Number(remain_toleqty_toallocate);
	 if(isNaN(remain_toleqty_toallocate)){
		alert("Remain TolePlane Not Found!");
		 
	 }else if(remain_toleqty_toallocate<allocated_toleqty){
		alert("Remain TolePlane Is Less Than Allocated Qty!");
		 
	 }else{
if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_toleplanehistory_funct:1,takentoleplaneids:takentoleplaneids,allocated_toleqty:allocated_toleqty,allocationtoledate:allocationtoledate,destination_type:destination_type},
			success:function(data){
				alert(data);
				//load form after save
				load_toleplanemovement_panel(takentoleplaneids);
				//load production list again
				load_toleplaneproduction_sale_list(takentoleplaneids);
			}
	 })}}
})



$("body").delegate("#produced_qty_pertole","keyup",function(){
	
	 var produced_qty_pertole=$("#produced_qty_pertole").val();
	 produced_qty_pertole=Number(produced_qty_pertole);
	 var produced_qty_oftoles=$("#produced_qty_oftoles").val();
	produced_qty_oftoles=Number(produced_qty_oftoles);
	var total_item=0;
	total_item=produced_qty_pertole*produced_qty_oftoles;
	$("#total_item_fromtoleprod").val(total_item);
})

$("body").delegate("#produced_qty_oftoles","keyup",function(){
	
	 var produced_qty_pertole=$("#produced_qty_pertole").val();
	 produced_qty_pertole=Number(produced_qty_pertole);
	 var produced_qty_oftoles=$("#produced_qty_oftoles").val();
	produced_qty_oftoles=Number(produced_qty_oftoles);
	var total_item=0;
	total_item=produced_qty_pertole*produced_qty_oftoles;
	$("#total_item_fromtoleprod").val(total_item);
})


$("body").delegate("#save_toleplane_produceitem","click",function(){
	
 var toleplane_myid=$(this).attr('toleplane_myid');
 toleplane_myid=Number(toleplane_myid);
 var item_id=$("#selecteditem_id").val();	
 item_id=Number(item_id);
 var itemsize=$("#itemsize").val();	
 itemsize=Number(itemsize);
 var itemqty=$("#itemqty").val();	
 itemqty=Number(itemqty);
 
 var rouver_item_id=$("#rouver_selecteditem_id").val();	
 rouver_item_id=Number(rouver_item_id);
 var rouver_itemsize=$("#rouver_itemsize").val();	
 rouver_itemsize=Number(rouver_itemsize);
 var rouver_itemqty=$("#rouver_itemqty").val();	
 rouver_itemqty=Number(rouver_itemqty);
 
 var other_item_id=$("#other_selecteditem_id").val();	
 other_item_id=Number(other_item_id);
 var other_itemsize=$("#other_itemsize").val();	
 other_itemsize=Number(other_itemsize);
 var other_itemqty=$("#other_itemqty").val();	
 other_itemqty=Number(other_itemqty);
 
 var tole_producing_date=$("#tole_producing_date").val();
 
if(toleplane_myid<=0){
		alert('TOLEPLANE NOT FOUND');
}else if(tole_producing_date.trim().length<10){
	
		alert('PLEASE SELECT PRODUCTION DATE');
			
}else if((item_id >0)&&(itemqty <=0)){
	alert('PLEASE ADD IMIREKO QUANTITY!');	
}else if((item_id <=0)&&(itemqty >0)){
	alert('PLEASE ADD IMIREKO ITEM NAME!');	
}else if((rouver_item_id >0)&&(rouver_itemqty <=0)){
	
	alert('PLEASE ADD ROUVERS QUANTITY!');	
		
}else if((rouver_item_id <=0)&&(rouver_itemqty >0)){
	
	alert('PLEASE ADD ROUVERS ITEM NAME');	
		
}else if((other_item_id>0)&&(other_itemqty<=0)){
	alert('PLEASE ADD OTHER QUANTITY!');	
		
}else if((other_item_id<=0)&&(other_itemqty>0)){
	alert('PLEASE ADD OTHER ITEM NAME!');	
		
}else if((item_id<=0)&&(rouver_item_id<=0)&&(other_item_id<=0)){
	alert('PLEASE SELECT ITEM NAME!');	
		
}else if((item_id>0)&&(rouver_item_id>0)){
	alert('PLEASE ONLY ONE ITEM NAME IS ALLOWED');	
		
}else if((item_id>0)&&(other_item_id>0)){
	alert('PLEASE ONLY ONE ITEM NAME IS ALLOWED');	
		
}else if((rouver_item_id>0)&&(other_item_id>0)){
	alert('PLEASE ONLY ONE ITEM NAME IS ALLOWED');	
		
}else{
	
	
if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_itemproducefrom_tole_funct:1,toleplane_myid:toleplane_myid,item_id:item_id,itemsize:itemsize,itemqty:itemqty,
			rouver_item_id:rouver_item_id,rouver_itemsize:rouver_itemsize,rouver_itemqty:rouver_itemqty,
			other_item_id:other_item_id,other_itemsize:other_itemsize,other_itemqty:other_itemqty,tole_producing_date:tole_producing_date},
			success:function(data){
				alert(data);
			load_toleplaneproduction_sale_list(toleplane_myid);
			}
})}}
})


function load_toleplaneproduction_sale_list(my_tole){
	var mytole_id=my_tole;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{list_toleplaneproduceditem_funct:1,mytole_id:mytole_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>TOLEPLANE INFORMATIONS</H5>");
				$(".toleplane_produced_items").html(data);
			}
		})
}



	
//-----------REMOVE TOLEPLANE PRODUCED ITEM--------------
	$("body").delegate("#remove_myproduced_item","click",function(){
	var my_produced_item_id=$(this).attr('my_produced_item_id');
	 my_produced_item_id=Number(my_produced_item_id);
	 var my_produced_item_toleplane_id=$(this).attr('my_produced_item_toleplane_id');
	 my_produced_item_toleplane_id=Number(my_produced_item_toleplane_id);
	 if(isNaN(my_produced_item_id)){
		alert("Item Not Found!");

	 }else if(my_produced_item_id<=0){
		alert("Item Not Found!");

	 }else{
if (confirm("Are You Sure To Remove? Press Ok Or Cancel!")) {
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_removemy_produced_item_funct:1,my_produced_item_id:my_produced_item_id},
			success:function(data){
				alert(data);
				//load form after save
				load_toleplanemovement_panel(my_produced_item_toleplane_id);
				//load production list again
				load_toleplaneproduction_sale_list(my_produced_item_toleplane_id);
			}
	 })}}
})
//-----------------------end sale_produce tole-------------
	$("body").delegate("#transfercrc_output","click",function(){
	
	var crcoutitem_id=$(this).attr('crcoutitem_id');
	var crcoutup_id=$(this).attr('crcoutup_id');
	var crc_transfer_qty=$(this).attr('crc_transfer_qty');
var crcoutup_crcid=$(this).attr('crcoutup_crcid');



	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#transfercrc_output').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{transfer_crc_outputitem_funct:1,crcoutitem_id:crcoutitem_id,crcoutup_id:crcoutup_id,crc_transfer_qty:crc_transfer_qty,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_crcproduction_list(crcoutup_crcid);
			}
	})}}
})


	$("body").delegate("#damagedcrc_output","click",function(){
	
	var crcoutitem_id=$(this).attr('crcoutitem_id');
	var crcoutup_id=$(this).attr('crcoutup_id');
	var crc_damaged_qty=$(this).attr('crc_damaged_qty');
var crcoutup_crcid=$(this).attr('crcoutup_crcid');


	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
if (confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#damagedcrc_output').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{damaged_crc_outputitem_funct:1,crcoutitem_id:crcoutitem_id,crcoutup_id:crcoutup_id,crc_damaged_qty:crc_damaged_qty,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_crcproduction_list(crcoutup_crcid);
			}
	})}}
})

$("body").delegate("#removecrc_output","click",function(){
	var crcoutitem_id=$(this).attr('crcoutitem_id');
	var crcoutup_id=$(this).attr('crcoutup_id');
	var totoutput_qty_size=$(this).attr('output_qty_size');
var crcoutup_crcid=$(this).attr('crcoutup_crcid');
if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	$('#removecrc_output').attr("disabled", true);
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{remove_crc_outputitem_funct:1,crcoutitem_id:crcoutitem_id,crcoutup_id:crcoutup_id,totoutput_qty_size:totoutput_qty_size,crcoutup_crcid:crcoutup_crcid},
			success:function(data){
				
				//$("#crc_rem_size_disabled").val(current_qty);
				//$("#crc_rem_size").val(current_qty);
				load_crcproduction_list(crcoutup_crcid);
			}
})}
})


$("body").delegate("#productioncrc_toleplane","click",function(){
	var crcoutitem_id=$(this).attr('crcoutitem_id');
	var crcoutup_id=$(this).attr('crcoutup_id');
	var crc_production_qty=$(this).attr('crc_production_qty');
var crcoutup_crcid=$(this).attr('crcoutup_crcid');
var crc_production_size=$(this).attr('crc_production_size');
var tolename=$(this).attr('tolename');
var crc_width=$(this).attr('crc_width');
var crc_id=$(this).attr('crc_id');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{toleplaneproduction_form_funct:1,crcoutup_id:crcoutup_id,crc_production_qty:crc_production_qty,crcoutup_crcid:crcoutup_crcid,crc_production_size:crc_production_size,tolename:tolename,crcoutitem_id:crcoutitem_id,crc_width:crc_width,crc_id:crc_id},
			success:function(data){
				
			$("#stock_panel_title").html("<H5>TOLEPLANE PRODUCTION</H5>");
				$("#crcproduceditem").html(data);
				load_toleplaneproduction_list(crcoutup_id);
			}
			})
})



$("body").delegate("#view_processed_intole","click",function(){
	var crcoutitem_id=$(this).attr('crcoutitem_id');
	var crcoutup_id=$(this).attr('crcoutup_id');
	var crc_production_qty=$(this).attr('crc_production_qty');
var crcoutup_crcid=$(this).attr('crcoutup_crcid');
var crc_production_size=$(this).attr('crc_production_size');
var tolename=$(this).attr('tolename');
var crc_width=$(this).attr('crc_width');
var crc_id=$(this).attr('crc_id');
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{viewtoleplaneproduced_form_funct:1,crcoutup_id:crcoutup_id,crc_production_qty:crc_production_qty,crcoutup_crcid:crcoutup_crcid,crc_production_size:crc_production_size,tolename:tolename,crcoutitem_id:crcoutitem_id,crc_width:crc_width,crc_id:crc_id},
			success:function(data){
				
			$("#stock_panel_title").html("<H5>TOLEPLANE PRODUCTION</H5>");
				$("#crcproduceditem").html(data);
				load_toleplaneproduction_list(crcoutup_id);
			}
			})
})

//------------------------production calculation-----------------

$("body").delegate("#request_width","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	
	 
	 var tot_toleqty=$("#numbers_of_toles").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity1-------
	 var request_width=$("#request_width").val();
	request_width=Number(request_width); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
	
	var dividelong=$("#dividelong").val();
	dividelong=Number(dividelong);
	
	var posibleqty=0;
	
	if (request_width>0) {
		//tot_remainwidth=tot_remainwidth+tot_width;
		  posibleqty=(width-tot_width2-tot_width3-tot_width4)/request_width;
	 
	var fullqty=0
	fullqty=(Math.floor(posibleqty))*tot_toleqty*dividelong;
	tot_width=(Math.floor(posibleqty))*request_width;
	
	
		  var get_remainwidth=0;
	get_remainwidth=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty").val(fullqty);
	$("#posibleqty").val(Math.floor(posibleqty));
	$("#tot_width").val(tot_width);
	$("#tot_remainwidth").val(get_remainwidth);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width;
	 request_width=0
	 posibleqty=0;
	 var fullqty=0
	fullqty=(Math.floor(posibleqty))*tot_toleqty*dividelong;
	tot_width=(Math.floor(posibleqty))*request_width;
	 var get_remainwidth=0;
	get_remainwidth=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty").val(fullqty);
	$("#posibleqty").val(Math.floor(posibleqty));
	$("#tot_width").val(tot_width);
	$("#tot_remainwidth").val(get_remainwidth);
}
	
	/*var remain_width=0;
	remain_width=width-((Math.floor(posibleqty))*request_width);
	
	
	var remain_produceqty=0;
	if(remain_width>=1){
		remain_produceqty=1*tot_toleqty;
	}else{
		remain_produceqty=0;
	}
	$("#remain_produceqty").val(remain_produceqty);
	
	$("#remain_width").val(remain_width);*/
	
	
})



$("body").delegate("#posibleqty","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	
	 
	 var tot_toleqty=$("#numbers_of_toles").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity1-------
	 var request_width=$("#request_width").val();
	request_width=Number(request_width); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
	
		var dividelong=$("#dividelong").val();
	dividelong=Number(dividelong);
	
	
	var posibleqty=$("#posibleqty").val();
	posibleqty=Number(posibleqty);
	if(posibleqty<0){
		posibleqty=0;
	}
	if (request_width>0) {
		//tot_remainwidth=tot_remainwidth+tot_width;
		  //posibleqty=(tot_remainwidth-tot_width2-tot_width3-tot_width4)/request_width;
	 
	var fullqty=0
	fullqty=(Math.floor(posibleqty))*tot_toleqty*dividelong;
	tot_width=(Math.floor(posibleqty))*request_width;
	
	
		  var get_remainwidth=0;
	get_remainwidth=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty").val(fullqty);
	$("#posibleqty").val(Math.floor(posibleqty));
	$("#tot_width").val(tot_width);
	$("#tot_remainwidth").val(get_remainwidth);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width;
	 request_width=0
	 posibleqty=0;
	 var fullqty=0
	fullqty=(Math.floor(posibleqty))*tot_toleqty*dividelong;
	tot_width=(Math.floor(posibleqty))*request_width;
	 var get_remainwidth=0;
	get_remainwidth=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty").val(fullqty);
	$("#posibleqty").val(Math.floor(posibleqty));
	$("#tot_width").val(tot_width);
	$("#tot_remainwidth").val(get_remainwidth);
}
	
	/*var remain_width=0;
	remain_width=width-((Math.floor(posibleqty))*request_width);
	
	
	var remain_produceqty=0;
	if(remain_width>=1){
		remain_produceqty=1*tot_toleqty;
	}else{
		remain_produceqty=0;
	}
	$("#remain_produceqty").val(remain_produceqty);
	
	$("#remain_width").val(remain_width);*/
	
	
})
//---------------CALCULATION 2	--------------------------
	$("body").delegate("#request_width2","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	 var tot_toleqty=$("#numbers_of_toles2").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity2-------
	 var request_width2=$("#request_width2").val();
	request_width2=Number(request_width2); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
		var dividelong2=$("#dividelong2").val();
	dividelong2=Number(dividelong2);
	
	
	var posibleqty2=0;
	
	if (request_width2>0) {
		//tot_remainwidth=tot_remainwidth+tot_width2;
		  posibleqty2=(width-tot_width-tot_width3-tot_width4)/request_width2;
	 
	var fullqty2=0
	fullqty2=(Math.floor(posibleqty2))*tot_toleqty*dividelong2;
	tot_width2=(Math.floor(posibleqty2))*request_width2;
	
	
		  var get_remainwidth2=0;
	get_remainwidth2=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty2").val(fullqty2);
	$("#posibleqty2").val(Math.floor(posibleqty2));
	$("#tot_width2").val(tot_width2);
	$("#tot_remainwidth").val(get_remainwidth2);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width2;
	 request_width2=0
	 posibleqty2=0;
	 var fullqty2=0
	fullqty2=(Math.floor(posibleqty2))*tot_toleqty*dividelong2;
	tot_width2=(Math.floor(posibleqty2))*request_width2;
	 var get_remainwidth2=0;
	get_remainwidth2=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty2").val(fullqty2);
	$("#posibleqty2").val(Math.floor(posibleqty2));
	$("#tot_width2").val(tot_width2);
	$("#tot_remainwidth").val(get_remainwidth2);
}
	
	
	
	
})


$("body").delegate("#posibleqty2","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	 var tot_toleqty=$("#numbers_of_toles2").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity2-------
	 var request_width2=$("#request_width2").val();
	request_width2=Number(request_width2); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
		var dividelong2=$("#dividelong2").val();
	dividelong2=Number(dividelong2);
	
	
	
	var posibleqty2=$("#posibleqty2").val();
	posibleqty2=Number(posibleqty2);
	if(posibleqty2<0){
		posibleqty2=0;
	}
	if (request_width2>0) {
		//tot_remainwidth=tot_remainwidth+tot_width2;
		//  posibleqty2=(width-tot_width-tot_width3-tot_width4)/request_width2;
	 
	var fullqty2=0
	fullqty2=(Math.floor(posibleqty2))*tot_toleqty*dividelong2;
	tot_width2=(Math.floor(posibleqty2))*request_width2;
	
	
		  var get_remainwidth2=0;
	get_remainwidth2=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty2").val(fullqty2);
	$("#posibleqty2").val(Math.floor(posibleqty2));
	$("#tot_width2").val(tot_width2);
	$("#tot_remainwidth").val(get_remainwidth2);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width2;
	 request_width2=0
	posibleqty2=0;
	 var fullqty2=0
	fullqty2=(Math.floor(posibleqty2))*tot_toleqty*dividelong2;
	tot_width2=(Math.floor(posibleqty2))*request_width2;
	 var get_remainwidth2=0;
	get_remainwidth2=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty2").val(fullqty2);
	$("#posibleqty2").val(Math.floor(posibleqty2));
	$("#tot_width2").val(tot_width2);
	$("#tot_remainwidth").val(get_remainwidth2);
}
	
	
	
	
})
//---------------CALCULATION 3---------	
	$("body").delegate("#request_width3","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	 var tot_toleqty=$("#numbers_of_toles3").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity3-------
	 var request_width3=$("#request_width3").val();
	request_width3=Number(request_width3); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
	
	var dividelong3=$("#dividelong3").val();
	dividelong3=Number(dividelong3);
	
	
	var posibleqty3=0;
	
	if (request_width3>0) {
		//tot_remainwidth=tot_remainwidth+tot_width2;
		  posibleqty3=(width-tot_width-tot_width2-tot_width4)/request_width3;
	 
	var fullqty3=0
	fullqty3=(Math.floor(posibleqty3))*tot_toleqty*dividelong3;
	tot_width3=(Math.floor(posibleqty3))*request_width3;
	
	
		  var get_remainwidth3=0;
	get_remainwidth3=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty3").val(fullqty3);
	$("#posibleqty3").val(Math.floor(posibleqty3));
	$("#tot_width3").val(tot_width3);
	$("#tot_remainwidth").val(get_remainwidth3);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width2;
	 request_width3=0
	 posibleqty3=0;
	 var fullqty3=0
	fullqty3=(Math.floor(posibleqty3))*tot_toleqty*dividelong3;
	tot_width3=(Math.floor(posibleqty3))*request_width3;
	 var get_remainwidth3=0;
	get_remainwidth3=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty3").val(fullqty3);
	$("#posibleqty3").val(Math.floor(posibleqty3));
	$("#tot_width3").val(tot_width3);
	$("#tot_remainwidth").val(get_remainwidth3);
}
	
	
	
	
})	

$("body").delegate("#posibleqty3","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	 var tot_toleqty=$("#numbers_of_toles3").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity3-------
	 var request_width3=$("#request_width3").val();
	request_width3=Number(request_width3); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
	
	var dividelong3=$("#dividelong3").val();
	dividelong3=Number(dividelong3);
	
	
	
	var posibleqty3=$("#posibleqty3").val();
	posibleqty3=Number(posibleqty3);
	if(posibleqty3<0){
		posibleqty3=0;
	}
	if (request_width3>0) {
		//tot_remainwidth=tot_remainwidth+tot_width2;
		 // posibleqty3=(width-tot_width-tot_width2-tot_width4)/request_width3;
	 
	var fullqty3=0
	fullqty3=(Math.floor(posibleqty3))*tot_toleqty*dividelong3;
	tot_width3=(Math.floor(posibleqty3))*request_width3;
	
	
		  var get_remainwidth3=0;
	get_remainwidth3=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty3").val(fullqty3);
	$("#posibleqty3").val(Math.floor(posibleqty3));
	$("#tot_width3").val(tot_width3);
	$("#tot_remainwidth").val(get_remainwidth3);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width2;
	 request_width3=0
	 posibleqty3=0;
	 var fullqty3=0
	fullqty3=(Math.floor(posibleqty3))*tot_toleqty*dividelong3;
	tot_width3=(Math.floor(posibleqty3))*request_width3;
	 var get_remainwidth3=0;
	get_remainwidth3=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty3").val(fullqty3);
	$("#posibleqty3").val(Math.floor(posibleqty3));
	$("#tot_width3").val(tot_width3);
	$("#tot_remainwidth").val(get_remainwidth3);
}
	
	
	
	
})	
//---------------CALCULATION 4---------	
	$("body").delegate("#request_width4","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	 var tot_toleqty=$("#numbers_of_toles4").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity4-------
	 var request_width4=$("#request_width4").val();
	request_width4=Number(request_width4); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
	
	var dividelong4=$("#dividelong4").val();
	dividelong4=Number(dividelong4);
	//*dividelong4
	
	var posibleqty4=0;
	
	if (request_width4>0) {
		//tot_remainwidth=tot_remainwidth+tot_width2;
		  posibleqty4=(width-tot_width-tot_width2-tot_width3)/request_width4;
	 
	var fullqty4=0
	fullqty4=(Math.floor(posibleqty4))*tot_toleqty*dividelong4;
	tot_width4=(Math.floor(posibleqty4))*request_width4;
	
	
		  var get_remainwidth4=0;
	get_remainwidth4=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty4").val(fullqty4);
	$("#posibleqty4").val(Math.floor(posibleqty4));
	$("#tot_width4").val(tot_width4);
	$("#tot_remainwidth").val(get_remainwidth4);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width2;
	 request_width4=0
	 posibleqty4=0;
	 var fullqty4=0
	fullqty4=(Math.floor(posibleqty4))*tot_toleqty*dividelong4;
	tot_width4=(Math.floor(posibleqty4))*request_width4;
	 var get_remainwidth4=0;
	get_remainwidth4=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty4").val(fullqty4);
	$("#posibleqty4").val(Math.floor(posibleqty4));
	$("#tot_width4").val(tot_width4);
	$("#tot_remainwidth").val(get_remainwidth4);
}
	
	
	
	
})	

$("body").delegate("#posibleqty4","keyup",function(){
	
	 var width=$("#width").val();
	 width=Number(width);
	 var tot_toleqty=$("#numbers_of_toles4").val();
	 tot_toleqty=Number(tot_toleqty);
	 var tot_remainwidth=$("#tot_remainwidth").val();
	 tot_remainwidth=Number(tot_remainwidth);
	 //------------calculate Posiblity4-------
	 var request_width4=$("#request_width4").val();
	request_width4=Number(request_width4); 
	
	var tot_width=$("#tot_width").val();
	tot_width=Number(tot_width);
		var tot_width2=$("#tot_width2").val();
	tot_width2=Number(tot_width2);
		var tot_width3=$("#tot_width3").val();
	tot_width3=Number(tot_width3);
		var tot_width4=$("#tot_width4").val();
	tot_width4=Number(tot_width4);
	
	var dividelong4=$("#dividelong4").val();
	dividelong4=Number(dividelong4);
	//*dividelong4
	
	var posibleqty4=$("#posibleqty4").val();
	posibleqty4=Number(posibleqty4);
	
	if(posibleqty4<0){
		posibleqty4=0;
	}
	if (request_width4>0) {
		//tot_remainwidth=tot_remainwidth+tot_width2;
		  //posibleqty4=(width-tot_width-tot_width2-tot_width3)/request_width4;
	 
	var fullqty4=0
	fullqty4=(Math.floor(posibleqty4))*tot_toleqty*dividelong4;
	tot_width4=(Math.floor(posibleqty4))*request_width4;
	
	
		  var get_remainwidth4=0;
	get_remainwidth4=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty4").val(fullqty4);
	$("#posibleqty4").val(Math.floor(posibleqty4));
	$("#tot_width4").val(tot_width4);
	$("#tot_remainwidth").val(get_remainwidth4);
}else{
	
		//tot_remainwidth=tot_remainwidth+tot_width2;
	 request_width4=0
	 posibleqty4=0;
	 var fullqty4=0
	fullqty4=(Math.floor(posibleqty4))*tot_toleqty*dividelong4;
	tot_width4=(Math.floor(posibleqty4))*request_width4;
	 var get_remainwidth4=0;
	get_remainwidth4=width-tot_width-tot_width2-tot_width3-tot_width4;
	$("#fullqty4").val(fullqty4);
	$("#posibleqty4").val(Math.floor(posibleqty4));
	$("#tot_width4").val(tot_width4);
	$("#tot_remainwidth").val(get_remainwidth4);
}
	
	
	
	
})	
//---------------------END production calculation-----------------
	
$("body").delegate("#save_toleplaneproduceditem_btn","click",function(){
	//alert("test1");
		var toleplaneoutput_id=$(this).attr('toleplaneoutput_id');
		toleplaneoutput_id=Number(toleplaneoutput_id);
		
		//-----------------get ITEMS-----------------
		 var item_id=$("#item_id").val();
		 item_id=Number(item_id);
		  var item_id2=$("#item_id2").val();
		 item_id2=Number(item_id2);
		  var item_id3=$("#item_id3").val();
		 item_id3=Number(item_id3);
		  var item_id4=$("#item_id4").val();
		 item_id4=Number(item_id4);
		 //-------------GET QTY1----------------------
		 	var fullqty=$("#fullqty").val();
		 fullqty=Number(fullqty);
		 var request_width=$("#request_width").val();
		request_width=Number(request_width);
		 var posibleqty=$("#posibleqty").val();
		posibleqty=Number(posibleqty);
		var tot_width=$("#tot_width").val();
		tot_width=Number(tot_width);
 //-------------GET QTY2----------------------
		 	var fullqty2=$("#fullqty2").val();
		 fullqty2=Number(fullqty2);
		 var request_width2=$("#request_width2").val();
		request_width2=Number(request_width2);
		 var posibleqty2=$("#posibleqty2").val();
		posibleqty2=Number(posibleqty2);
		var tot_width2=$("#tot_width2").val();
		tot_width2=Number(tot_width2);
 //-------------GET QTY3----------------------
		 	var fullqty3=$("#fullqty3").val();
		 fullqty3=Number(fullqty3);
		 var request_width3=$("#request_width3").val();
		request_width3=Number(request_width3);
		 var posibleqty3=$("#posibleqty3").val();
		posibleqty3=Number(posibleqty3);
		var tot_width3=$("#tot_width3").val();
		tot_width3=Number(tot_width3);
	 //-------------GET QTY4----------------------
		 	var fullqty4=$("#fullqty4").val();
		 fullqty4=Number(fullqty4);
		 var request_width4=$("#request_width4").val();
		request_width4=Number(request_width4);
		 var posibleqty4=$("#posibleqty4").val();
		posibleqty4=Number(posibleqty4);
		var tot_width4=$("#tot_width4").val();
		tot_width4=Number(tot_width4);
			
		//--------------------GET TOTAL REMAIN WIDTH-------
		
		var width=$("#width").val();
		width=Number(width);
		var tot_remainwidth=$("#tot_remainwidth").val();
		tot_remainwidth=Number(tot_remainwidth);

		var remain_produceqty=$("#remain_produceqty").val();
		 remain_produceqty=Number(remain_produceqty);
		 var remain_width=$("#remain_width").val();
		 remain_width=Number(remain_width);
		 
		var tot_allocated_width=0;
		tot_allocated_width=tot_width+tot_width2+tot_width3+tot_width4;
	tot_allocated_width=Number(tot_allocated_width);
		 
			if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		 
		if(toleplaneoutput_id<=0){
			alert("Please Select TolePlane Again");
		}else if((fullqty>0) &&(item_id<=0)){
			alert("Please Select Item1 Again");
		}else if((fullqty2>0) &&(item_id2<=0)){
			alert("Please Select Item2 Again");
		}else if((fullqty3>0) &&(item_id3<=0)){
			alert("Please Select Item3 Again");
		}else if((fullqty4>0) &&(item_id4<=0)){
			alert("Please Select Item4 Again");
		}else if((tot_remainwidth<0)||(tot_remainwidth>0)){
				alert("ALLOCATION NOT DONE WELL,TRY AGAIN.");
		}else if(tot_allocated_width<width){
				alert("ALLOCATION NOT DONE WELL,REALLOCATE AGAIN.");
		}else if(tot_allocated_width>width){
				alert("ALLOCATION IS GREATER THAN WIDTH.");
		}else{
			
			$('#save_toleplaneproduceditem_btn').attr("disabled", true);
			if((fullqty>0)&&(item_id>0)&&(request_width>0)&&(posibleqty>0)&&(tot_remainwidth==0)&&(fullqty2<=0)&&(item_id2<=0)&&(request_width2<=0)&&(posibleqty2<=0)&&(fullqty3<=0)&&(item_id3<=0)&&(request_width3<=0)&&(posibleqty3<=0)&&(fullqty4<=0)&&(item_id4<=0)&&(request_width4<=0)&&(posibleqty4<=0)){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_toleplaneproduceditem_funct:1,toleplaneoutput_id:toleplaneoutput_id,item_id:item_id,request_width:request_width,fullqty:fullqty,posibleqty:posibleqty},
			success:function(data){
				alert(data);
			//	$("#crc_rem_size_disabled").val(current_qty);
				//$("#crc_rem_size").val(current_qty);
				load_toleplaneproduction_list(toleplaneoutput_id);
			}
			})
			
			}else if((fullqty>0)&&(item_id>0)&&(request_width>0)&&(posibleqty>0)&&(fullqty2>0)&&(item_id2>0)&&(request_width2>0)&&(posibleqty2>0)&&(tot_remainwidth==0)&&(fullqty3<=0)&&(item_id3<=0)&&(request_width3<=0)&&(posibleqty3<=0)&&(fullqty4<=0)&&(item_id4<=0)&&(request_width4<=0)&&(posibleqty4<=0)){
			
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_toleplaneproduceditem_funct2:1,toleplaneoutput_id:toleplaneoutput_id,item_id:item_id,request_width:request_width,fullqty:fullqty,posibleqty:posibleqty,item_id2:item_id2,request_width2:request_width2,fullqty2:fullqty2,posibleqty2:posibleqty2},
			success:function(data){
				alert(data);
			//	$("#crc_rem_size_disabled").val(current_qty);
				//$("#crc_rem_size").val(current_qty);
				load_toleplaneproduction_list(toleplaneoutput_id);
			}
			})
		
		
		}else if((fullqty>0)&&(item_id>0)&&(request_width>0)&&(posibleqty>0)&&(fullqty2>0)&&(item_id2>0)&&(request_width2>0)&&(posibleqty2>0)&&(fullqty3>0)&&(item_id3>0)&&(request_width3>0)&&(posibleqty3>0)&&(tot_remainwidth==0)&&(fullqty4<=0)&&(item_id4<=0)&&(request_width4<=0)&&(posibleqty4<=0)){
			
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_toleplaneproduceditem_funct3:1,toleplaneoutput_id:toleplaneoutput_id,item_id:item_id,request_width:request_width,fullqty:fullqty,posibleqty:posibleqty,item_id2:item_id2,request_width2:request_width2,fullqty2:fullqty2,posibleqty2:posibleqty2,item_id3:item_id3,request_width3:request_width3,fullqty3:fullqty3,posibleqty3:posibleqty3},
			success:function(data){
				alert(data);
			//	$("#crc_rem_size_disabled").val(current_qty);
				//$("#crc_rem_size").val(current_qty);
				load_toleplaneproduction_list(toleplaneoutput_id);
			}
			})
		
		
		}else if((fullqty>0)&&(item_id>0)&&(request_width>0)&&(posibleqty>0)&&(fullqty2>0)&&(item_id2>0)&&(request_width2>0)&&(posibleqty2>0)&&(fullqty3>0)&&(item_id3>0)&&(request_width3>0)&&(posibleqty3>0)&&(fullqty4>0)&&(item_id4>0)&&(request_width4>0)&&(posibleqty4>0)&&(tot_remainwidth==0)){
			
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_toleplaneproduceditem_funct4:1,toleplaneoutput_id:toleplaneoutput_id,item_id:item_id,request_width:request_width,fullqty:fullqty,posibleqty:posibleqty,item_id2:item_id2,request_width2:request_width2,fullqty2:fullqty2,posibleqty2:posibleqty2,item_id3:item_id3,request_width3:request_width3,fullqty3:fullqty3,posibleqty3:posibleqty3,item_id4:item_id4,request_width4:request_width4,fullqty4:fullqty4,posibleqty4:posibleqty4},
			success:function(data){
				alert(data);
			//	$("#crc_rem_size_disabled").val(current_qty);
				//$("#crc_rem_size").val(current_qty);
				load_toleplaneproduction_list(toleplaneoutput_id);
			}
			})
		
		
		}else{
			alert("PRODUCTION NOT INSERTED, TRY AGAIN");
		}
		
		
		
		
		}}
})

function load_toleplaneproduction_list(my_tole){
	var mytole_id=my_tole;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{list_toleproduceditem_funct:1,mytole_id:mytole_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>TOLEPLANE INFORMATIONS</H5>");
				$(".toleplane_produced_items").html(data);
			}
		})
}

$("body").delegate("#transferproducedtole_output","click",function(){
	var toleoutitem_id=$(this).attr('toleoutitem_id');
	toleoutitem_id=Number(toleoutitem_id);
	var tole_transfer_qty=$(this).attr('tole_transfer_qty');
	tole_transfer_qty=Number(tole_transfer_qty);
	var toleoutup_id=$(this).attr('toleoutup_id');
	toleoutup_id=Number(toleoutup_id);
	var tole_production_id=$(this).attr('tole_production_id');
	
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
	if(toleoutitem_id<=0){
		alert("No ITEM FOUND");
	}else if(tole_transfer_qty<=0){
		
		alert("QUANTITY CAN'T BE O");
	}else if(toleoutup_id<=0){
		
		alert("No TOLEPLANE FOUND");
	}else if(tole_production_id<=0){
		alert("No TOLEPLANE FOUND");
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{transfer_toleplaneproduceditem_funct:1,toleoutitem_id:toleoutitem_id,tole_transfer_qty:tole_transfer_qty,toleoutup_id:toleoutup_id,tole_production_id:tole_production_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				
			$("#stock_panel_title").html("<H5>TOLEPLANE PRODUCTION</H5>");
				alert(data);
				load_toleplaneproduction_list(tole_production_id);
			}
	})}}
})
//------------------------END CRC---------------------
//-----------item in stock----------------	

	function load_low_stock(){
		
		
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_low_stock:1},
			success:function(data){
				$("#no_of_lowpro").html(data);
			
	}
	})
	}
	
$("body").delegate("#item_stock","click",function(){
	
			var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_itemstock_list_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>ITEM STOCK LIST</H5>");
				$(".stock_body").html(data);
			}
	})}
})
	
	function load_itemlist(my_check_sessesion_id){
		var check_sessesion_id=my_check_sessesion_id;
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_itemstock_list_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>ITEM STOCK LIST</H5>");
				$(".stock_body").html(data);
			}
			})
	}	


$("body").delegate("#search_product","keyup",function(){
			var search_product=$("#search_product").val();
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchitemstock_list_funct:1,search_product:search_product},
			success:function(data){
				$("#stock_panel_title").html("<H5>ITEM STOCK LIST</H5>");
				$(".allpro_panel").html(data);
			}
			})
		})
		
$("body").delegate("#addnewitem","click",function(){
	
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_itemform_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW ITEM STOCK FORM</H5>");
				$(".stock_body").html(data);
			}
			})
})
	
	
	
	
$("body").delegate("#item_type","click",function(){
	var item_type=$("#item_type").val();
	//alert(item_type);
	if(item_type=="Coil"){
		$("#item_itmatt").attr("disabled", false);
		$("#item_bg").attr("disabled", false);
	}else if(item_type=="CRC"){
	$("#item_itmatt").attr("disabled", true);
		$("#item_bg").attr("disabled", true);	
	}else if(item_type=="Item"){
	$("#item_itmatt").attr("disabled", true);
		$("#item_bg").attr("disabled", true);	
	}
		
})
	
	
	
	
		$("body").delegate("#item_bg","click",function(){
	var mybg_name_id=$("#item_bg").val();
	mybg_name_id=Number(mybg_name_id);
	if(mybg_name_id<=0){
		
	}else{
		

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_myitem_it_by_bgname_funct:1,mybg_name_id:mybg_name_id},
			success:function(data){
				$(".myitem_bg_it").html(data);
			}
	})}
})	
	
	
	$("body").delegate("#savestock_item","click",function(){
var item_name=$("#item_name").val();	
 var item_category=$("#item_category").val();
 var item_type=$("#item_type").val();
 var item_price=$("#item_price").val();
 var item_itmatt=$("#item_itmatt").val();
 item_itmatt=Number(item_itmatt);
  var item_bg=$("#item_bg").val();
 item_bg=Number(item_bg);
 item_category=Number(item_category);
 item_price=Number(item_price);
 		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
	if(item_name==""){
		$("#item_name").css("background-color","yellow");
	}else if(item_category<=0){
		alert("Choose Category");
	}else if((item_type=="Coil")&&(item_bg<=0)){
		alert("Please Choose BG");
	}else if((item_type=="Coil")&&(item_itmatt<=0)){
		alert("Please Choose IT/MATT");
	}else if((item_type=="Item")&&((item_itmatt>0)||(item_bg>0))){
		alert("Please Deselect BG AND IT/MATT");
	}else if((item_type=="CRC")&&((item_itmatt>0)||(item_bg>0))){
		alert("Please Deselect BG AND IT/MATT");
	}else if(item_price<=0){
		$("#item_price").css("background-color","yellow");
	}else{
			
		$('#savestock_item').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_item_funct:1,item_name:item_name,item_category:item_category,item_itmatt:item_itmatt,item_bg:item_bg,item_type:item_type,item_price:item_price},
			success:function(data){
			alert(data);
				load_itemlist(check_sessesion_id);
			}
	})}}}

	})
	
	$("body").delegate("#viewitem","click",function(){
		var item_id=$(this).attr('item_id');	
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_iteminformation_funct:1,item_id:item_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>ITEM INFORMATIONS</H5>");
				$(".stock_body").html(data);
			}
	})}
})
	
	
$("body").delegate("#updatestock_item","click",function(){
var item_name=$("#item_name").val();	
 var item_category=$("#item_category").val();
 var item_itmatt=$("#item_itmatt").val();
 var item_type=$("#item_type").val();
 var item_price=$("#item_price").val();
 var item_stocklevel=$("#item_stocklevel").val();
 var item_up=$(this).attr('item_up');
 item_category=Number(item_category);
 item_price=Number(item_price);
 item_stocklevel=Number(item_stocklevel);
 item_itmatt=Number(item_itmatt);
  var item_bg=$("#item_bg").val();
 item_bg=Number(item_bg);
 	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(item_name==""){
		$("#item_name").css("background-color","yellow");
	}else if(item_category<=0){
		alert("Choose Category");
		}else if((item_type=="Coil")&&(item_bg<=0)){
		alert("Please Choose BG");
	}else if((item_type=="Coil")&&(item_itmatt<=0)){
		alert("Please Choose IT/MATT");
	}else if((item_type=="Item")&&((item_itmatt>0)||(item_bg>0))){
		alert("Please Deselect BG AND IT/MATT");
	}else if((item_type=="CRC")&&((item_itmatt>0)||(item_bg>0))){
		alert("Please Deselect BG AND IT/MATT");
	}else if(item_price<=0){
		$("#item_price").css("background-color","yellow");
	}else if(item_stocklevel<0){
		$("#item_stocklevel").css("background-color","yellow");
	}else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updateitem_funct:1,item_up:item_up,item_name:item_name,item_category:item_category,item_type:item_type,item_price:item_price,item_itmatt:item_itmatt,item_bg:item_bg,item_stocklevel:item_stocklevel},
			success:function(data){
			alert(data);
				load_itemlist(check_sessesion_id);
			}
	})}}

	})
	
		
$("body").delegate("#updatestockitemopening_qty","click",function(){
var item_opqty=$("#item_opqty").val();	
 var item_up=$(this).attr('item_up');
 item_opqty=Number(item_opqty);
 item_up=Number(item_up);

	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
 if(item_opqty<=0){
		$("#item_opqty").css("background-color","yellow");
	}else if(item_up<=0){
		alert("Please Choose Item Again");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#updatestockitemopening_qty').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updateitem_openingfunct:1,item_up:item_up,item_opqty:item_opqty,check_sessesion_id:check_sessesion_id},
			success:function(data){
			alert(data);
				load_itemlist(check_sessesion_id);
			}
	})}}}

	})
	
	
	
	$("body").delegate("#save_dmqty_item","click",function(){
var item_cur_qty=$("#item_cur_qty").val();	
var item_dm_qty=$("#item_dm_qty").val();
 var damageitem_up=$(this).attr('damageitem_up');
 item_cur_qty=Number(item_cur_qty);
 item_dm_qty=Number(item_dm_qty);

	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
  if(damageitem_up<=0){
		alert("Please Choose Item Again");
	}else if(item_cur_qty<=0){
		alert("Item Quantity is Less Than o");
	}else if(item_dm_qty<=0){
		$("#item_dm_qty").css("background-color","yellow");
	}else if(item_cur_qty<item_dm_qty){
		alert("Damaged Quantity Is Greater than Current Stock");
		$("#item_dm_qty").css("background-color","yellow");
	}else{if(confirm("Are You Sure To SaveDamage? Press Ok Or Cancel!")) {
		$('#save_dmqty_item').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_damegeitem_qty_funct:1,damageitem_up:damageitem_up,item_cur_qty:item_cur_qty,item_dm_qty:item_dm_qty,check_sessesion_id:check_sessesion_id},
			success:function(data){
			alert(data);
				load_itemlist(check_sessesion_id);
			}
	})
	}}}

	})
	//-----------------new item category----------
	
	$("body").delegate("#addnewitem_category","click",function(){
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewitem_categoryform_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW ITEM CATEGORY FORM</H5>");
				$(".stock_body").html(data);
	}
	})}
})
	
	function load_itemcategory(my_check_sessesion_id){
		var check_sessesion_id=my_check_sessesion_id;
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_addnewitem_categoryform_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>NEW ITEM CATEGORY FORM</H5>");
				$(".stock_body").html(data);
	}
	})
	}
	
	$("body").delegate("#save_itemcategory","click",function(){
var itemcategory_name=$("#itemcategory_name").val();	
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(itemcategory_name==""){
		$("#itemcategory_name").css("background-color","yellow");
	}else{
		
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
			$('#save_itemcategory').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newitemcategory_funct:1,itemcategory_name:itemcategory_name},
			success:function(data){
			alert(data);
				load_itemcategory(check_sessesion_id);
			}
	})}}}

	})
	
	
	$("body").delegate("#edititem_category","click",function(){

 var itemcategory_id=$(this).attr('itemcategory_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_updateitemcategory_funct:1,itemcategory_id:itemcategory_id},
			success:function(data){
				$("#stock_panel_title").html("<H5>UPDATE ITEM CATEGORY FORM</H5>");
				$(".stock_body").html(data);
	}
	})
})


$("body").delegate("#update_itemcategory","click",function(){
	
	var cat_id=$(this).attr('cat_id');
var itemcategory_name=$("#itemcategory_name").val();	

	if(itemcategory_name==""){
		$("#itemcategory_name").css("background-color","yellow");
	}else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updateitemcategory_funct:1,cat_id:cat_id,itemcategory_name:itemcategory_name},
			success:function(data){
			alert(data);
				load_itemcategory();
			}
	})}

	})
	
	//---------------RECORD ITEM HISTORY------
	
		
$("body").delegate("#item_stockrecording","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_itemrecordingpanel_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>ITEM RECORDING PANEL</H5>");
				$(".stock_body").html(data);
	}
	})
})
	
	
		$("body").delegate("#saveitem_stcokingqty","click",function(){
var item_id=$("#item_id").val();
item_id=Number(item_id);
var stocking_qty=$("#stocking_qty").val();
stocking_qty=Number(stocking_qty);
var stocking_desc=$("#stocking_desc").val();
var dateto=$("#dateto").val();
	if(item_id<=0){
		alert("PLEASE SELECT ITEM");
	}else if(stocking_qty<=0){
		alert("PLEASE ADD QUANTITY");
	}else if((dateto.length)<=0){
		alert("PLEASE ADD STOCK IN DATE");
	}else{
		
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
			$('#saveitem_stcokingqty').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_itemstockingqty_funct:1,item_id:item_id,stocking_qty:stocking_qty,stocking_desc:stocking_desc,dateto:dateto},
			success:function(data){
			alert(data);
				
			}
	})}}

	})
	
	
	
	
	
			$("body").delegate("#saveitem_reducestockqty","click",function(){
var item_outid=$("#item_outid").val();
item_outid=Number(item_outid);
var stockout_qty=$("#stockout_qty").val();
stockout_qty=Number(stockout_qty);
var stockout_desc=$("#stockout_desc").val();
var purchaseinvoice_date=$("#purchaseinvoice_date").val();

 var item_id=$("#item_outid");
  var itemcurqty =item_id.find(':selected').data('itemcurqty');
  
  
	if(item_outid<=0){
		alert("PLEASE SELECT ITEM");
	}else if(stockout_qty<=0){
		alert("PLEASE ADD QUANTITY OUT");
	}else if(stockout_qty>itemcurqty){
		alert("ITEM STOCK QUANTITY IS NOT ENOUGH,AVAILABLE QTY IS: " + itemcurqty);
	}else if((purchaseinvoice_date.length)<=0){
		alert("PLEASE ADD STOCK OUT DATE");
	}else{
		
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
			$('#saveitem_reducestockqty').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_itemstockoutqty_funct:1,item_outid:item_outid,stockout_qty:stockout_qty,stockout_desc:stockout_desc,purchaseinvoice_date:purchaseinvoice_date},
			success:function(data){
			alert(data);
				
			}
	})}}

	})
	
	
	
$("body").delegate("#daily_item_move","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{view_dailymove_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>DAILY ITEM MOVEMENT LIST</H5>");
				$(".stock_body").html(data);
	}
	})
})
	
	
	$("body").delegate("#search_movebydate","click",function(){
 var datefrom=$("#datefrom").val();
 var dateto=$("#dateto").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{view_dailymovebydate_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$(".daily_move_date").html(data);
	}
	})
})


	
	$("body").delegate("#cashflow_setting","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_cashflow_setting_funct:1},
			success:function(data){
				$(".main_body").html(data);
				$("#cashflow_panel_title").html("<H5>CASHFLOW PANEL</H5>");
	}
	})
})
//-----------------------ACCOUNT HISTORY------------

//-----------------------liablity----------------------
	$("body").delegate("#liability","click",function(){
//alert();		
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_liabilityaccountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>LIABILITY ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})
//-----------------------asset----------------------
	$("body").delegate("#asset","click",function(){
//alert();		
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_assetaccountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ASSET ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})
//--------------------expense--------------------------------


	$("body").delegate("#expense","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_expenseaccountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>EXPENSE ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
//------------------------	income-----------------------------

	$("body").delegate("#income","click",function(){
//alert();	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_incomeaccountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>INCOME ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})
//--------------------------------EQUITY----------------------
	

	$("body").delegate("#equity","click",function(){
//alert();	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_equityaccountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>EQUITY ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})



	$("body").delegate("#account_adjustments","click",function(){
//alert();	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_adjustmentform_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNTING_ADJUSTMENTS(ERRORS CORRECTION)</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})
//--------------GET TRANSACTION DETAILS TO CORRECT------------


	$("body").delegate("#get_bytransaction_code","click",function(){

 var search_transaction_tocorrect=$("#search_transaction_tocorrect").val();
 search_transaction_tocorrect=Number(search_transaction_tocorrect);
 if(isNaN(search_transaction_tocorrect)){
	  alert("CODE MUST BE NUMBER");
 }else if(search_transaction_tocorrect<=0){
	 alert("CODE MUST BE GREATER 0");
 }else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_transaction_tocorrectdetails_funct:1,search_transaction_tocorrect:search_transaction_tocorrect},
			success:function(data){
				$(".wrongacc_correction_body").html(data);
	}
 })}
})




$(document).on('click','a[data-role=transactionid_onmodel]',function(){
		var transaction_id=$(this).data('tid');
		var accid=$(this).data('accid');
		var acc_name=$(this).data('acc_name');
		var acc_sense=$(this).data('acc_sense');
		var acc_amt=$(this).data('acc_amt');
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_transactionacc_details_model:1,transaction_id:transaction_id,accid:accid,acc_name:acc_name,acc_sense:acc_sense,acc_amt:acc_amt},
			success:function(data){
			
				$(".model_bytransactiondata").html(data);
				
			}
		})
	})
	
	
	function load_transactionid_onmodel(tid,accid,accname,acc_sense){
		var transaction_id=tid;
		var accid=accid;
		var acc_name="done";
		var acc_sense=acc_sense;
			$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_transactionacc_details_model:1,transaction_id:transaction_id,accid:accid,acc_name:acc_name,acc_sense:acc_sense},
			success:function(data){
			
				$(".model_bytransactiondata").html(data);
				
			}
		})
	}
	
	
		$("body").delegate("#save_correction_wrongacc","click",function(){
	var transact_id=$(this).attr('transact_id');
 var new_account=$("#new_account").val();
 new_account=Number(new_account);
	var old_acc=$(this).attr('old_acc');
	old_acc=Number(old_acc);
	var old_acc_sense=$(this).attr('old_acc_sense');
	var old_acc_amt=$(this).attr('old_acc_amt');
	old_acc_amt=Number(old_acc_amt);
	if(isNaN(new_account)){
		alert("NewAccount NotFound");
	}else if(new_account<=0){
		alert("NewAccount NotFound");
	}else if(isNaN(old_acc)){
		alert("OldAccount NotFound");
	}else if(old_acc<=0){
		alert("OldAccount NotFound");
	}else if(isNaN(old_acc_amt)){
		alert("Amount NotFound");
	}else if(old_acc_amt<=0){
		alert("Amount NotFound");
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_wrong_accountcorrection_funct:1,transact_id:transact_id,new_account:new_account,old_acc:old_acc,old_acc_sense:old_acc_sense,old_acc_amt:old_acc_amt},
			success:function(data){
				alert("AccountCorrected");
				load_transactionid_onmodel(transact_id,new_account,new_account,old_acc_sense);
				
	}
	})}
})
//--------------reversal transaction--------------------



	$("body").delegate("#get_byreversaltransaction_code","click",function(){

 var search_transaction_toreverse=$("#search_transaction_toreverse").val();
 search_transaction_toreverse=Number(search_transaction_toreverse);
 if(isNaN(search_transaction_toreverse)){
	  alert("CODE MUST BE NUMBER");
 }else if(search_transaction_toreverse<=0){
	 alert("CODE MUST BE GREATER 0");
 }else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_transaction_toreversedetails_funct:1,search_transaction_toreverse:search_transaction_toreverse},
			success:function(data){
				$(".reversal_transaction_body").html(data);
	}
 })}
})




	$("body").delegate("#reversal_transaction","click",function(){

 var mytransaction=$(this).attr('mytransaction');
 mytransaction=Number(mytransaction);
 if(isNaN(mytransaction)){
	  alert("CODE MUST BE NUMBER 1");
 }else if(mytransaction<=0){
	 alert("CODE MUST BE GREATER 0");
 }else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_reversetransaction_funct:1,mytransaction:mytransaction},
			success:function(data){
				$(".reversal_transaction_body").html(data);
	}
 })}
})
//------------------REVERSAL SALES TRANSACTION WITH CLIENT DEBT---------

	$("body").delegate("#get_byreversalsale_transaction_code","click",function(){

 var search_salestransaction_toreverse=$("#search_salestransaction_toreverse").val();
 search_salestransaction_toreverse=Number(search_salestransaction_toreverse);
 if(isNaN(search_salestransaction_toreverse)){
	  alert("CODE MUST BE NUMBER");
 }else if(search_salestransaction_toreverse<=0){
	 alert("CODE MUST BE GREATER 0");
 }else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_salestransaction_toreversedetails_funct:1,search_salestransaction_toreverse:search_salestransaction_toreverse},
			success:function(data){
				$(".reversal_transaction_body").html(data);
	}
 })}
})




	$("body").delegate("#reversal_salestransaction","click",function(){

 var mytransaction=$(this).attr('mytransaction');
 mytransaction=Number(mytransaction);
 if(isNaN(mytransaction)){
	  alert("CODE MUST BE NUMBER 1");
 }else if(mytransaction<=0){
	 alert("CODE MUST BE GREATER 0");
 }else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_reversesalestransaction_funct:1,mytransaction:mytransaction},
			success:function(data){
				$(".reversal_transaction_body").html(data);
	}
 })}
})
//-------------------------------view account history--------------
	$("body").delegate("#view_tb_acc","click",function(){
	var tb_id=$(this).attr('tb_id');
	var tb_name=$(this).attr('tb_name');
	var tb_name_type=$(this).attr('tb_name_type');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_account_historydetails_funct:1,tb_id:tb_id,tb_name:tb_name,tb_name_type:tb_name_type},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNT HISTORY LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})

//-----------------view transaction based on date---------------------
	$("body").delegate("#view_datetransaction","click",function(){
	var tb_id=$(this).attr('tb_id');
 var datefrom=$("#datefrom").val();
 var dateto=$("#dateto").val();
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_account_historydetailsbydate_funct:1,tb_id:tb_id,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNT HISTORY LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
//------------------account list---------------------
	$("body").delegate("#account_setting","click",function(){
//alert();	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_accountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})

function load_acc_list(){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_accountlist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNTS LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
	}
	
	
	$("body").delegate("#addnew_tb_account","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newaccount_form_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>NEW ACCOUNT FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
	

	
$("body").delegate("#addnew_acc","click",function(){
var acc_name=$("#acc_name").val();	
 var account_type=$("#account_type").val();
 var account_sens=$("#account_sens").val();
 var acc_desc=$("#acc_desc").val();
 account_type=Number(account_type);
 
	if(acc_name==""){
		$("#acc_name").css("background-color","yellow");
	}else if(account_type<=0){
		alert("Choose Type");
	}else if(acc_desc==""){
		$("#acc_desc").css("background-color","yellow");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
			$('#addnew_acc').attr("disabled", true);
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newtbacc_funct:1,acc_name:acc_name,account_type:account_type,account_sens:account_sens,acc_desc:acc_desc},
			success:function(data){
			alert(data);
				load_acc_list();
			}
	})}}

	})
	
	
	
	$("body").delegate("#edit_tb_acc","click",function(){
	var tb_id=$(this).attr('tb_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_edittb_acc_funct:1,tb_id:tb_id},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>UPDATE ACCOUNT FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})
})




$("body").delegate("#update_tbacc","click",function(){
var acc_name=$("#acc_name").val();	
 var account_type=$("#account_type").val();
 
 var account_sens=$("#account_sens").val();
 var acc_desc=$("#acc_desc").val();
 
 var tbacc_id=$(this).attr('tbacc_id');
 account_type=Number(account_type);
 tbacc_id=Number(tbacc_id);
 var tb_account_group=$("#tb_account_group").val();
 tb_account_group=Number(tb_account_group);
 
	if(acc_name==""){
		$("#acc_name").css("background-color","yellow");
	}else if(account_type<=0){
		alert("Choose Type");
	}else if(acc_desc==""){
		$("#acc_desc").css("background-color","yellow");
	}else if(tbacc_id<=0){
		alert("Please Select Account Again!");
	}else if(tb_account_group<=0){
		alert("Please Select Account On Use Prepayment!");
	}else{
		
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatetbacc_funct:1,tbacc_id:tbacc_id,acc_name:acc_name,account_type:account_type,account_sens:account_sens,acc_desc:acc_desc,tb_account_group:tb_account_group},
			success:function(data){
			alert(data);
				load_acc_list();
			}
	})}

	})
	
	
	//----------------single account report------------------
	
		$("body").delegate("#single_acc_report","click",function(){
	var tb_id=$(this).attr('tb_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_acc_singlereport_funct:1,tb_id:tb_id},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>SINGLE ACCOUNT REPORT</H5>");
				$(".cashflow_body").html(data);
	}
	})
})

//-------view single account transaction based on date---------------------
	$("body").delegate("#view_singleacc_datetransaction","click",function(){
	var tb_id=$(this).attr('tb_id');
 var datefrom=$("#datefrom").val();
 var dateto=$("#dateto").val();
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_singleaccount_historydetailsbydate_funct:1,tb_id:tb_id,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>SINGLE ACCOUNT HISTORY LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})


//-----------------adjust transaction date---------------------

$("body").delegate("#view_transaction_toadjust","click",function(){
	var tb_details_trans=$(this).attr('tb_details_trans');
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_singleaccount_tocorrectdate_funct:1,tb_details_trans:tb_details_trans},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>SINGLE ACCOUNT HISTORY LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})

function load_view_transaction_toadjust(adj_trans){
	var tb_details_trans=adj_trans;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_singleaccount_tocorrectdate_funct:1,tb_details_trans:tb_details_trans},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>SINGLE ACCOUNT HISTORY LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
}

$("body").delegate("#save_transaction_correction","click",function(){
	var my_transaction_id=$(this).attr('my_transaction_id');
	my_transaction_id=Number(my_transaction_id);
    var curruser_id=$("#curruser_id").val();
	curruser_id=Number(curruser_id);
    var trans_newdate=$(".trans_date").val();
		 let resulttrans_newdate=trans_newdate.trim();
	 let resulttrans_newdate_len =resulttrans_newdate.length;
    var acc_desc=$("#acc_desc").val();
		 let resultacc_desc=acc_desc.trim();
	 let resultacc_desc_len =resultacc_desc.length;
	 
	if(isNaN(my_transaction_id)){
		alert("Select Account Again");
	}else if(my_transaction_id<=0){
		alert("Select Account Again");
	}else if(resulttrans_newdate_len<=0){
		
		alert("Please Select Date");
	}else if(resultacc_desc_len<=0){
			$("#acc_desc").css("background-color","yellow");
	}else if(curruser_id<=0){
		alert("Please Logout And Login Again");
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_updatesingleaccount_correction_funct:1,my_transaction_id:my_transaction_id,curruser_id:curruser_id,trans_newdate:trans_newdate,acc_desc:acc_desc},
			success:function(data){
						alert("Transaction Date Corrected!");
		load_view_transaction_toadjust(my_transaction_id);
	}
	})}
})


//---------------account type---------------------
	$("body").delegate("#account_typelist","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_accounttypelist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNT TYPE LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})

//----------------production and payment report------------------


	$("body").delegate("#production_payment_report","click",function(){
//alert();		
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_production_paymentreport_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>PRODUCTION & PAYMENT REPORT</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})

function load_production_payment(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_production_paymentreport_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>PRODUCTION & PAYMENT REPORT</H5>");
				$(".cashflow_body").html(data);
	}
	})
}

	$("body").delegate("#view_dateproduction_payments","click",function(){
	
 var datefrom=$("#datefrom").val();
 var dateto=$("#dateto").val();
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_productionpyament_historybydate_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>PRODUCTION & PAYMENT REPORT LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
//-------------------PAYMENT METHOD-------------------------------

	$("body").delegate("#payment_method","click",function(){
//alert();		
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_paymentaccounttypelist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>PAYMENT ACCOUNT LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})
function load_paymentmethod_list(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_paymentaccounttypelist_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>PAYMENT ACCOUNT LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
}

	$("body").delegate("#add_newpaymentmethod","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newpaymentaccountform_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>NEW PAYMENT ACCOUNT FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})
})


	$("body").delegate("#addnewpymt_acc","click",function(){

var pymtacc_name=$("#pymtacc_name").val();	
var pymtacc_number=$("#pymtacc_number").val();	
var account_gl=$("#account_gl").val();	
 account_gl=Number(account_gl);
 var pymntacc_type=$("#pymntacc_type").val();	
	if(pymtacc_name==""){
		$("#pymtacc_name").css("background-color","yellow");
	}else if(pymtacc_number==""){
		$("#pymtacc_number").css("background-color","yellow");
	}else if(account_gl<=0){
		alert("Please Select Account Again!");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
			$('#addnewpymt_acc').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newpaymentaccount_funct:1,pymtacc_name:pymtacc_name,pymtacc_number:pymtacc_number,account_gl:account_gl,pymntacc_type:pymntacc_type},
			success:function(data){
				alert(data);
			load_paymentmethod_list();
	}
	})}}
})
//--------------------NEW LIABILITY ACCOUNT TRANSACTION-----------------------


	$("body").delegate("#addnew_liabilitytransaction","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newliabilitytransaction_form_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>NEW LIABILITY TRANSACTION FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
//--------------------NEW ASSET ACCOUNT TRANSACTION-----------------------


	$("body").delegate("#addnew_assettransaction","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newassettransaction_form_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>NEW ASSET TRANSACTION FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
//----------------------INCOME NEW TRANSACTION-----------------------

	$("body").delegate("#addnew_incometransaction","click",function(){
//alert();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newincometransaction_form_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>NEW INCOME TRANSACTION FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})
})		
	//-------------------EXPENSE NEW TRANSACTION-----------------------
	
$("body").delegate("#addnew_expensetransaction","click",function(){
//alert();		
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_newexpensetransaction_form_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>NEW EXPENSE TRANSACTION FORM</H5>");
				$(".cashflow_body").html(data);
	}
	})}
})

	
//--------------------------save new income transaction--------------------
	
$("body").delegate("#save_newincometransaction","click",function(){
 var main_acc_id=$("#main_acc_id").val();
var acc_amt=$("#acc_amt").val();
main_acc_id=Number(main_acc_id);	
 acc_amt=Number(acc_amt);
var acc1=$("#acc1").val();	
var acc_amt1=$("#acc_amt1").val();
acc1=Number(acc1);	
 acc_amt1=Number(acc_amt1);
	
var acc2=$("#acc2").val();	
 var acc_amt2=$("#acc_amt2").val();
acc2=Number(acc2);	
 acc_amt2=Number(acc_amt2);
 
 var acc_desc=$("#acc_desc").val();
var  trans_date=$(".trans_date").val();
	if(main_acc_id<=0){
		alert("Please Select Income Account");
	}else if(acc_amt<=0){
		alert("Please Enter Amount");
	}else if((acc1<=0)&&(acc2<=0)){
		alert("Please Select Other Account");
	}else if(acc1==acc2){
		alert("Please Change Other Account1 OR Other Account2");
	}else if(main_acc_id==acc2){
		alert("Please Change Other Account2");
	}else if(main_acc_id==acc1){
		alert("Please Change Other Account1");
	}else if((acc_amt1<=0)&&(acc1>0)){
		alert("Please Enter Other Account1 Amount!");
	}else if((acc_amt1>0)&&(acc1<=0)){
		alert("Please Select Other Account1");
	}else if((acc_amt2<=0)&&(acc2>0)){
		alert("Please Enter Other Account2 Amount!");
	}else if((acc_amt2>0)&&(acc2<=0)){
		alert("Please Select Other Account 2!");
	}else if(acc_amt<(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Greater Than Income Amount");
	}else if(acc_amt>(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Less Than Income Amount");
	}else if(acc_desc==""){
		alert("Enter Reason!");
	}else if(trans_date==""){
		alert("SELECT DATE");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#save_newincometransaction').attr("disabled", true);
		if((main_acc_id>0)&&(acc_amt>0)&&(acc1>0)&&(acc_amt1>0)&&(acc_amt2<=0)&&(acc2<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newincometransaction_funct1:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1<=0)&&(acc1<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newincometransaction_funct2:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1>0)&&(acc1>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newincometransaction_funct3:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
		}else{
			
	}}
	}})
//------------------save new expense transaction--------------------
		
$("body").delegate("#save_newexpensetransaction","click",function(){
 var main_acc_id=$("#main_acc_id").val();
var acc_amt=$("#acc_amt").val();
main_acc_id=Number(main_acc_id);	
 acc_amt=Number(acc_amt);
var acc1=$("#acc1").val();	
var acc_amt1=$("#acc_amt1").val();
acc1=Number(acc1);	
 acc_amt1=Number(acc_amt1);
	
var acc2=$("#acc2").val();	
 var acc_amt2=$("#acc_amt2").val();
acc2=Number(acc2);	
 acc_amt2=Number(acc_amt2);
 
 var acc_desc=$("#acc_desc").val();
var  trans_date=$(".trans_date").val();

 var acc1_bal=$("#acc1");
  var bal =acc1_bal.find(':selected').data('bal');
   bal=Number(bal);
 var acc2_bal2=$("#acc2");
  var bal2 =acc2_bal2.find(':selected').data('bal2');
		 bal2=Number(bal2);
	if(main_acc_id<=0){
		alert("Please Select Expense Account");
	}else if(isNaN(acc_amt)){
		alert("Please Enter Expense Amount As Number");
	}else if(acc_amt<=0){
		alert("Please Enter Expense Amount");
	}else if((acc1<=0)&&(acc2<=0)){
		alert("Please Select Other Account");
	}else if(acc1==acc2){
		alert("Please Change Other Account1 OR Other Account2");
	}else if(main_acc_id==acc2){
		alert("Please Change Other Account2");
	}else if(main_acc_id==acc1){
		alert("Please Change Other Account1");
	}else if(isNaN(acc_amt1)){
		alert("Please Enter Other Account1 Amount As Number!");
	}else if((acc_amt1<=0)&&(acc1>0)){
		alert("Please Enter Other Account1 Amount!");
	}else if((acc_amt1>0)&&(acc1<=0)){
		alert("Please Select Other Account1");
	}else if(isNaN(acc_amt2)){
		alert("Please Enter Other Account2 Amount As Number!");
	}else if((acc_amt2<=0)&&(acc2>0)){
		alert("Please Enter Other Account2 Amount!");
	}else if((acc_amt2>0)&&(acc2<=0)){
		alert("Please Select Other Account 2!");
	}else if((acc_amt1>bal)&&(acc1>0)){
		alert("Other Account 1 Amount Is Less!");
	}else if((acc_amt2>bal2)&&(acc2>0)){
		alert("Other Account 2 Amount Is Less!");
	}else if(acc_amt<(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Greater Than Expense Amount");
	}else if(acc_amt>(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Less Than Expense Amount");
	}else if(acc_desc==""){
		alert("Enter Reason!");
	}else if(trans_date==""){
		alert("SELECT DATE");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#save_newexpensetransaction').attr("disabled", true);
		if((main_acc_id>0)&&(acc_amt>0)&&(acc1>0)&&(acc_amt1>0)&&(acc_amt2<=0)&&(acc2<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newexpensetransaction_funct1:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1<=0)&&(acc1<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newexpensetransaction_funct2:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1>0)&&(acc1>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newexpensetransaction_funct3:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
		}else{
			
	}}
	}})
//-------------save new asset transaction---------------------
		
$("body").delegate("#save_newassettransaction","click",function(){
 var main_acc_id=$("#main_acc_id").val();
var acc_amt=$("#acc_amt").val();
main_acc_id=Number(main_acc_id);	
 acc_amt=Number(acc_amt);
var acc1=$("#acc1").val();	
var acc_amt1=$("#acc_amt1").val();
acc1=Number(acc1);	
 acc_amt1=Number(acc_amt1);
	
var acc2=$("#acc2").val();	
 var acc_amt2=$("#acc_amt2").val();
acc2=Number(acc2);	
 acc_amt2=Number(acc_amt2);
 
 var acc_desc=$("#acc_desc").val();
var  trans_date=$(".trans_date").val();

var acc1_bal=$("#acc1");
  var bal =acc1_bal.find(':selected').data('bal');
   bal=Number(bal);
   
var acc2_bal2=$("#acc2");
  var bal2 =acc2_bal2.find(':selected').data('bal2');
   bal2=Number(bal2);
   
   
   var typeid=$("#acc1");
  var acc_typeid=typeid.find(':selected').data('acc_typeid');
   acc_typeid=Number(acc_typeid);
   
     var typeid2=$("#acc2");
  var acc_typeid2=typeid2.find(':selected').data('acc_typeid2');
   acc_typeid2=Number(acc_typeid2);
   
	if(main_acc_id<=0){
		alert("Please Select Debit Account");
	}else if(isNaN(acc_amt)){
		alert("Please Enter Debit Amount As Number");
	}else if(acc_amt<=0){
		alert("Please Enter Debit Amount");
	}else if((acc1<=0)&&(acc2<=0)){
		alert("Please Select Other Account");
	}else if(acc1==acc2){
		alert("Please Change Other Account1 OR Other Account2");
	}else if(main_acc_id==acc2){
		alert("Please Change Other Account2");
	}else if(main_acc_id==acc1){
		alert("Please Change Other Account1");
	}else if(isNaN(acc_amt1)){
		alert("Please Enter Other Account1 Amount As Number");
	}else if((acc_amt1<=0)&&(acc1>0)){
		alert("Please Enter Other Account1 Amount!");
	}else if((acc_amt1>0)&&(acc1<=0)){
		alert("Please Select Other Account1");
	}else if((acc_amt1>bal)&&((acc_typeid=='5')||(acc_typeid=='6'))){
		alert("Other Account1 Amount Is Less!");
	}else if(isNaN(acc_amt2)){
		alert("Please Enter Other Account2 Amount As Number");
	}else if((acc_amt2<=0)&&(acc2>0)){
		alert("Please Enter Other Account2 Amount!");
	}else if((acc_amt2>0)&&(acc2<=0)){
		alert("Please Select Other Account 2!");
	}else if((acc_amt2>bal2)&&((acc_typeid2=='5')||(acc_typeid2=='6'))){
		alert("Other Account2 Amount Is Less!");
	}else if(acc_amt<(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Greater Than Debit Amount");
	}else if(acc_amt>(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Less Than Debit Amount");
	}else if(acc_desc==""){
		alert("Enter Reason!");
	}else if(trans_date==""){
		alert("SELECT DATE");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#save_newassettransaction').attr("disabled", true);
		if((main_acc_id>0)&&(acc_amt>0)&&(acc1>0)&&(acc_amt1>0)&&(acc_amt2<=0)&&(acc2<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newassettransaction_funct1:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1<=0)&&(acc1<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newassettransaction_funct2:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1>0)&&(acc1>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newassettransaction_funct3:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
		}else{
			
	}}
	}})	
	
	
//------------save new liability transaction-------------------------
		
$("body").delegate("#save_newliabilitytransaction","click",function(){
 var main_acc_id=$("#main_acc_id").val();
var acc_amt=$("#acc_amt").val();
main_acc_id=Number(main_acc_id);	
 acc_amt=Number(acc_amt);
var acc1=$("#acc1").val();	
var acc_amt1=$("#acc_amt1").val();
acc1=Number(acc1);	
 acc_amt1=Number(acc_amt1);
	
var acc2=$("#acc2").val();	
 var acc_amt2=$("#acc_amt2").val();
acc2=Number(acc2);	
 acc_amt2=Number(acc_amt2);
 
 var acc_desc=$("#acc_desc").val();
var  trans_date=$(".trans_date").val();

var acc1_bal=$("#acc1");
  var bal =acc1_bal.find(':selected').data('bal');
   bal=Number(bal);
   
   var acc2_bal2=$("#acc2");
  var bal2 =acc2_bal2.find(':selected').data('bal2');
   bal2=Number(bal2);
   
   
	if(main_acc_id<=0){
		alert("Please Select Libility Account");
	}else if(acc_amt<=0){
		alert("Please Enter  Amount");
	}else if((acc1<=0)&&(acc2<=0)){
		alert("Please Select Other Account");
	}else if(acc1==acc2){
		alert("Please Change Other Account1 OR Other Account2");
	}else if(main_acc_id==acc2){
		alert("Please Change Other Account2");
	}else if(main_acc_id==acc1){
		alert("Please Change Other Account1");
	}else if((acc_amt1<=0)&&(acc1>0)){
		alert("Please Enter Other Account1 Amount!");
	}else if((acc_amt1>0)&&(acc1<=0)){
		alert("Please Select Other Account1");
	}else if((acc_amt1>bal)&&(acc1>0)){
		alert("Other Account1 Amount Is Less");
	}else if((acc_amt2<=0)&&(acc2>0)){
		alert("Please Enter Other Account2 Amount!");
	}else if((acc_amt2>0)&&(acc2<=0)){
		alert("Please Select Other Account 2!");
	}else if((acc_amt2>bal2)&&(acc2>0)){
		alert("Other Account2 Amount Is Less");
	}else if(acc_amt<(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Greater Than Debit Amount");
	}else if(acc_amt>(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Less Than Debit Amount");
	}else if(acc_desc==""){
		alert("Enter Reason!");
	}else if(trans_date==""){
		alert("SELECT DATE");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#save_newliabilitytransaction').attr("disabled", true);
		if((main_acc_id>0)&&(acc_amt>0)&&(acc1>0)&&(acc_amt1>0)&&(acc_amt2<=0)&&(acc2<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newliabilitytransaction_funct1:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1<=0)&&(acc1<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newliabilitytransaction_funct2:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1>0)&&(acc1>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newliabilitytransaction_funct3:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
		}else{
			
	}}
	}})

	//-----------------SAVE ADJUSTMENTS-----------------

	
$("body").delegate("#save_newadjustmenttransaction","click",function(){
 var main_acc_id=$("#main_acc_id").val();
var acc_amt=$("#acc_amt").val();
main_acc_id=Number(main_acc_id);	
 acc_amt=Number(acc_amt);
var acc1=$("#acc1").val();	
var acc_amt1=$("#acc_amt1").val();
acc1=Number(acc1);	
 acc_amt1=Number(acc_amt1);
	
var acc2=$("#acc2").val();	
 var acc_amt2=$("#acc_amt2").val();
acc2=Number(acc2);	
 acc_amt2=Number(acc_amt2);
 
 var acc_desc=$("#acc_desc").val();
var  trans_date=$(".trans_adjustmentdate").val();
	if(main_acc_id<=0){
		alert("Please Select Debit Account");
	}else if(acc_amt<=0){
		alert("Please Enter  Amount");
	}else if((acc1<=0)&&(acc2<=0)){
		alert("Please Select Other Credit Account");
	}else if(acc1==acc2){
		alert("Please Change Other Credit Account1 OR Other Account2");
	}else if(main_acc_id==acc2){
		alert("Please Change Other Credit Account2");
	}else if(main_acc_id==acc1){
		alert("Please Change Other Credit Account1");
	}else if((acc_amt1<=0)&&(acc1>0)){
		alert("Please Enter Other Account1 Amount!");
	}else if((acc_amt1>0)&&(acc1<=0)){
		alert("Please Select Other Account1");
	}else if((acc_amt2<=0)&&(acc2>0)){
		alert("Please Enter Other Account2 Amount!");
	}else if((acc_amt2>0)&&(acc2<=0)){
		alert("Please Select Other Account 2!");
	}else if(acc_amt<(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Greater Than Debit Amount");
	}else if(acc_amt>(acc_amt1+acc_amt2)){
		alert("Other Account Amount Is Less Than Debit Amount");
	}else if(acc_desc==""){
		alert("Enter Reason!");
	}else if(trans_date==""){
		alert("SELECT DATE");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#save_newadjustmenttransaction').attr("disabled", true);
		if((main_acc_id>0)&&(acc_amt>0)&&(acc1>0)&&(acc_amt1>0)&&(acc_amt2<=0)&&(acc2<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newadjusttransaction_funct1:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1<=0)&&(acc1<=0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newadjusttransaction_funct2:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
	}else if((main_acc_id>0)&&(acc_amt>0)&&(acc2>0)&&(acc_amt2>0)&&(acc_amt1>0)&&(acc1>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newadjusttransaction_funct3:1,main_acc_id:main_acc_id,acc_amt:acc_amt,acc1:acc1,acc_amt1:acc_amt1,acc2:acc2,acc_amt2:acc_amt2,acc_desc:acc_desc,trans_date:trans_date},
			success:function(data){
			alert(data);
				load_acc_history(main_acc_id,main_acc_id,main_acc_id);
			}
	})
		}else{
			
	}}
	}})

//-------------------------------------------------
	$("body").delegate("#view_transaction","click",function(){
	var tb_details_trans=$(this).attr('tb_details_trans');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_transactiondetails_funct:1,tb_details_trans:tb_details_trans},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>TRANSACTION DETAILS</H5>");
				$(".cashflow_body").html(data);
	}
	})
})
	
	function load_acc_history(myacc_id,myacc_name,myacc_type){
			var tb_id=myacc_id;
	var tb_name=myacc_name;
	var tb_name_type=myacc_type;
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_account_historydetails_funct:1,tb_id:tb_id,tb_name:tb_name,tb_name_type:tb_name_type},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>ACCOUNT HISTORY LIST</H5>");
				$(".cashflow_body").html(data);
	}
	})
	}
	
//-------------unclosedtransactiondate------------
$("body").delegate("#get_uncloseddaily_transaction","click",function(){
	var myunclosed_transactiondate=$(this).attr('myunclosed_transactiondate');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_unclosedtransactiondetails_funct:1,myunclosed_transactiondate:myunclosed_transactiondate},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>UNCLOSED TRANSACTION DETAILS</H5>");
				$(".cashflow_body").html(data);
	}
	})
})

$(document).on('click','a[data-role=account_transactionid_onmodel]',function(){
		var acctransdate=$(this).data('acctransdate');
		var accid=$(this).data('accid');
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_accountdetailsmodel:1,acctransdate:acctransdate,accid:accid},
			success:function(data){
			
				$(".singleacc_unclosedtransactionbydate").html(data);
				
			}
		})
	})
	
	
	
	$("body").delegate("#close_singleaccount_transaction","click",function(){
	var tb_details_trans=$(this).attr('tb_details_trans');
	tb_details_trans=Number(tb_details_trans);
	var transaction_date=$(this).attr('transaction_date');
	var my_single_acc=$(this).attr('my_single_acc');
	if(isNaN(tb_details_trans)){
		alert("Transaction Not Found!");
	}else if(tb_details_trans<=0){
		alert("Transaction Not Found!");
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_closesingle_transaction_funct:1,tb_details_trans:tb_details_trans,transaction_date:transaction_date,my_single_acc:my_single_acc},
			success:function(data){
			$(".singleacc_unclosedtransactionbydate").html(data);
	}
	})}
})



//-------------------------COIL REPORT------------------

$("body").delegate("#coil_report","click",function(){
	//var tb_details_trans=$(this).attr('tb_details_trans');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coilreport_funct:1},
			success:function(data){
				$("#stock_panel_title").html("<H5>CURRENT COIL REPORT</H5>");
				$(".stock_body").html(data);
	}
	})
})


//----------------------------------purchase --------------------

$("body").delegate("#purchases_setting","click",function(){
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_purchase_setting_funct:1},
			success:function(data){
				$(".main_body").html(data);
				$("#purchase_panel_title").html("<H5>PURCHASE PANEL</H5>");
	}
	})
	}
	
	
})

$("body").delegate("#purchaseinvoice","click",function(){
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_purchase_invoicelist_funct:1},
			success:function(data){
				$("#purchase_panel_title").html("<H5>PURCHASE INVOICE LIST</H5>");
				$(".purchase_body").html(data);
	}
	})
})

function load_purchaseinvoice_list(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_purchase_invoicelist_funct:1},
			success:function(data){
				$("#purchase_panel_title").html("<H5>PURCHASE INVOICE LIST</H5>");
				$(".purchase_body").html(data);
	}
	})
}

$("body").delegate("#addnew_purchaseinvoice","click",function(){
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_purchase_invoiceform_funct:1},
			success:function(data){
				$("#purchase_panel_title").html("<H5>PURCHASE INVOICE FORM</H5>");
				$(".purchase_body").html(data);
	}
	})
})



	
$("body").delegate("#purchaseinvoice_amt","keyup",function(){
	var purchaseinvoice_amt=$("#purchaseinvoice_amt").val();
	var paid_amt=$("#paid_amt").val();
	var discount_amt=$("#discount_amt").val();
	var credit_amt=0;
		purchaseinvoice_amt=Number(purchaseinvoice_amt);
		paid_amt=Number(paid_amt);
		discount_amt=Number(discount_amt);
		credit_amt=Number(credit_amt);

 	var credit_amt=parseFloat(purchaseinvoice_amt) - parseFloat(paid_amt)-parseFloat(discount_amt);
	
   $("#credit_amt").val(credit_amt).css("font-size","xx-large");
	})
	
	
$("body").delegate("#paid_amt","keyup",function(){
	var purchaseinvoice_amt=$("#purchaseinvoice_amt").val();
	var paid_amt=$("#paid_amt").val();
	var discount_amt=$("#discount_amt").val();
	var credit_amt=0;
		purchaseinvoice_amt=Number(purchaseinvoice_amt);
		paid_amt=Number(paid_amt);
		discount_amt=Number(discount_amt);
		credit_amt=Number(credit_amt);

 	var credit_amt=parseFloat(purchaseinvoice_amt) - parseFloat(paid_amt)-parseFloat(discount_amt);
	
   $("#credit_amt").val(credit_amt).css("font-size","xx-large");
	})
	
		
$("body").delegate("#discount_amt","keyup",function(){
	var purchaseinvoice_amt=$("#purchaseinvoice_amt").val();
	var paid_amt=$("#paid_amt").val();
	var discount_amt=$("#discount_amt").val();
	var credit_amt=0;
		purchaseinvoice_amt=Number(purchaseinvoice_amt);
		paid_amt=Number(paid_amt);
		discount_amt=Number(discount_amt);
		credit_amt=Number(credit_amt);

 	var credit_amt=parseFloat(purchaseinvoice_amt) - parseFloat(paid_amt)-parseFloat(discount_amt);
	
   $("#credit_amt").val(credit_amt).css("font-size","xx-large");
	})


$("body").delegate("#purchaseinvoice_date","mouseenter",function(){
load_purchasedaterange();
})

//----------search purchase upplier---------------
$("body").delegate("#supplier_tin","keyup",function(){
 var supplier_tin=$("#supplier_tin").val();
  //var supplier_tincount=supplier_tin.length;
 var supplier_tel=$("#supplier_tel").val();
  //var supplier_telcount=supplier_tel.length
 var supplier_name=$("#supplier_name").val();
 var supplier_address=$("#supplier_address").val();
 var supplier_email=$("#supplier_email").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{search_invoicesuppliertin_funct:1,supplier_tin:supplier_tin},
			success:function(data){
				if(data==1){
			$("#supplier_tin").val(supplier_tin);
			$('#supplier_tin').focus();
			$("#supplier_tel").val("");
			$("#supplier_name").val("");
			$("#supplier_address").val("");
			 $("#supplier_email").val("");
			$("#supplier_id").val(0);
			// $('#supplier_name').attr("disabled", false);
			// $('#supplier_address').attr("disabled", false);
			 //$('#supplier_email').attr("disabled", false);
			}else{
					
				$("#purchaseinvoice_supplier").html(data);
				}
			
	}
 })
})

$("body").delegate("#supplier_tel","keyup",function(){
 var supplier_tin=$("#supplier_tin").val();
  //var supplier_tincount=supplier_tin.length;
 var supplier_tel=$("#supplier_tel").val();
  //var supplier_telcount=supplier_tel.length
 var supplier_name=$("#supplier_name").val();
 var supplier_address=$("#supplier_address").val();
 var supplier_email=$("#supplier_email").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{search_invoicesuppliertel_funct:1,supplier_tel:supplier_tel},
			success:function(data){
				if(data==1){
			$("#supplier_tin").val("");
			$("#supplier_tel").val(supplier_tel);
			$('#supplier_tel').focus();
			$("#supplier_name").val("");
			$("#supplier_address").val("");
			 $("#supplier_email").val("");
			$("#supplier_id").val(0);
			// $('#supplier_name').attr("disabled", false);
			// $('#supplier_address').attr("disabled", false);
			 //$('#supplier_email').attr("disabled", false);
				}else{
					
				$("#purchaseinvoice_supplier").html(data);
				}
			
	}
 })
})
//----------end search purchase upplier---------------


$("body").delegate("#createpurchase_invoice","click",function(){
	
	 var purchaseinvoice_ref=$("#purchaseinvoice_ref").val();
 var purchaseinvoice_date=$("#purchaseinvoice_date").val();
var  purchaseinvoice_amt=$("#purchaseinvoice_amt").val();
purchaseinvoice_amt=Number(purchaseinvoice_amt);
var  paid_amt=$("#paid_amt").val();
paid_amt=Number(paid_amt);
var  discount_amt=$("#discount_amt").val();
discount_amt=Number(discount_amt);
var  credit_amt=$("#credit_amt").val();
credit_amt=Number(credit_amt);
var supplier_id=$("#supplier_id").val();
supplier_id=Number(supplier_id);

	
	if(purchaseinvoice_ref==""){
		$("#purchaseinvoice_ref").css("background-color","yellow");
	}else if(purchaseinvoice_date==""){
		$("#purchaseinvoice_date").css("background-color","yellow");
	}else if(purchaseinvoice_amt<=0){
		$("#purchaseinvoice_amt").css("background-color","yellow");
	}else if(paid_amt<=0){
		$("#paid_amt").css("background-color","yellow");
	}else if(discount_amt<0){
		$("#discount_amt").css("background-color","red");
	}else if(purchaseinvoice_amt<paid_amt){
		$("#paid_amt").css("background-color","yellow");
	}else if(purchaseinvoice_amt<(paid_amt+discount_amt)){
	$("#paid_amt").css("background-color","yellow");
	}else if(purchaseinvoice_amt>(paid_amt+discount_amt)){
	$("#paid_amt").css("background-color","yellow");
	}else if(supplier_id<=0){
		alert("Please Select Supplier Again");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#createpurchase_invoice').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_purchaseinvoiceform_funct:1,purchaseinvoice_ref:purchaseinvoice_ref,purchaseinvoice_date:purchaseinvoice_date,purchaseinvoice_amt:purchaseinvoice_amt,paid_amt:paid_amt,discount_amt:discount_amt,credit_amt:credit_amt,supplier_id:supplier_id},
			success:function(data){
				load_purchaseinvoice_list();
	}
	})}}
})

//--------------view purchase invoice--------------

$("body").delegate("#expire_date","mouseenter",function(){
load_expiredaterange();
})


$("body").delegate("#view_purchase_details","click",function(){
	
	var invoice_id=$(this).attr('invoice_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_invoicedetails_funct:1,invoice_id:invoice_id},
			success:function(data){
				$("#purchase_panel_title").html("<H5>INVOICE INFORMATIONS</H5>");
				$(".purchase_body").html(data);
				load_get_invoiceitems(invoice_id);
	}
	})
})


function load_get_invoiceitems(myitem_invoice){
	var iteminvoice_id=myitem_invoice;
	iteminvoice_id=Number(iteminvoice_id);
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_invoicedetails_itemsfunct:1,iteminvoice_id:iteminvoice_id},
			success:function(data){
				$("#stock_cartproduct_details").html(data);
	}
	})
}
//------------------use check box on invoice-------------
$("body").delegate("#usesize","click",function(){
		if ($('#usesize').is(":checked")) {
  $("#size").attr("disabled", false);
	$("#size_unit").attr("disabled", false);
}else{
	 $("#size").attr("disabled", true);
	$("#size_unit").attr("disabled", true);
}
})

$("body").delegate("#useexpire","click",function(){
		if ($('#useexpire').is(":checked")) {
$("#expire_date").attr("disabled", false);
}else{
	$("#expire_date").attr("disabled", true);
}
})

$("body").delegate(".add_tocart","click",function(){
	
	var my_inv_no=$(this).attr('my_inv_no');
	my_inv_no=Number(my_inv_no);
	var product_id=$("#product_id").val();
	product_id=Number(product_id);
	var qty=$("#qty").val();
	qty=Number(qty);
	var size=$("#size").val();
	size=Number(size);
	var size_unit=$("#size_unit").val();
	var cost=$("#cost").val();
	cost=Number(cost);
	var Expired_date=$("#expire_date").val();
	var tot_cost=0
	tot_cost=Number(tot_cost);
	
	var usesize=$("#usesize").val();
	var useexpire=$("#useexpire").val();
	var Expired_date_stat=0;
	Expired_date_stat=Number(Expired_date_stat);
	if ($('#usesize').is(":checked")) {
   tot_cost=qty*size*cost;
}else{
	tot_cost=qty*cost;
}
	if ($('#useexpire').is(":checked")) {
   Expired_date_stat=1;
}else{
	Expired_date_stat=0;
}

if(my_inv_no<=0){
	 alert("Please Select Invoice Again");
	}else if(product_id<=0){
	 alert("Please Select Product");
	}else if(qty<=0){
	 $("#qty").css("background-color","yellow");
	}else if(size<=0){
	$("#size").css("background-color","yellow");
	}else if((Expired_date_stat==1)&&(Expired_date=="")){
		alert("Select Expire Date");
	 $("#expire_date").css("background-color","yellow");
	}else if(cost<=0){
	 $("#cost").css("background-color","yellow");
	}else if(tot_cost<=0){
	alert("Please Check Your Quantity Or Your Cost Then Try Again");
	}else{
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_invoicedetails_funct:1,my_inv_no:my_inv_no,product_id:product_id,qty:qty,size:size,size_unit:size_unit,cost:cost,Expired_date:Expired_date,tot_cost:tot_cost},
			success:function(data){
				$("#purchase_panel_title").html("<H5>INVOICE INFORMATIONS</H5>");
				alert(data);
				load_get_invoiceitems(my_inv_no);
	}
	})}
})


$("body").delegate(".remove_item_oninv","click",function(){
	
	var item_det_id=$(this).attr('item_det_id');
	var purchaseinvoice_det_inv=$(this).attr('purchaseinvoice_det_inv');
	var purchaseinvoice_det_totcost=$(this).attr('purchaseinvoice_det_totcost');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{remove_invoicedetails_funct:1,item_det_id:item_det_id,purchaseinvoice_det_inv:purchaseinvoice_det_inv,purchaseinvoice_det_totcost:purchaseinvoice_det_totcost},
			success:function(data){
				$("#purchase_panel_title").html("<H5>INVOICE INFORMATIONS</H5>");
				alert(data);
				load_get_invoiceitems(purchaseinvoice_det_inv);
	}
	})
})


$("body").delegate(".confirmpurchase_inv","click",function(){
	
	var my_inv_no=$(this).attr('my_inv_no');
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{confirm_purchaseinvoiceform_funct:1,my_inv_no:my_inv_no},
			success:function(data){
				$("#purchase_panel_title").html("<H5>PAY PURCHASE INVOICE</H5>");
			$(".purchase_body").html(data);
	}
	})
})

//-----------------pay purchase invoice------------------

$("body").delegate("#pay_purchaseinvoice","click",function(){
var  payment_invoice_transactionno=$(this).attr('payment_invoice_transactionno');
var  payment_invoice_no=$(this).attr('payment_invoice_no');
var  purchaseinvoice_amt=$("#purchaseinvoice_amt").val();
purchaseinvoice_amt=Number(purchaseinvoice_amt);
var  paid_amt=$("#paid_amt").val();
paid_amt=Number(paid_amt);
var  discount_amt=$("#discount_amt").val();
discount_amt=Number(discount_amt);
var  credit_amt=$("#credit_amt").val();
credit_amt=Number(credit_amt);
var supplier_id=$("#invoicesupplier_id").val();
supplier_id=Number(supplier_id);
//----------payment1-------
var pymt_id=$("#pymt").val();
pymt_id=Number(pymt_id);
var pymt=$("#pymt");
var pymt_paybal=pymt.find(':selected').data('pymt_paybal');
pymt_paybal=Number(pymt_paybal);
var pymtmethod_gl=pymt.find(':selected').data('pymtmethod_gl');
pymtmethod_gl=Number(pymtmethod_gl);
var pymtmethod_glsense=pymt.find(':selected').data('pymtmethod_glsense');
pymtmethod_glsense=Number(pymtmethod_glsense);
var payment_amt=$("#payment_amt").val();
payment_amt=Number(payment_amt);
//----------otherpayment-------
var otherpymt_id=$("#otherpymt").val();
otherpymt_id=Number(otherpymt_id);
var otherpymt=$("#otherpymt");
var otherpymt_paybal=otherpymt.find(':selected').data('otherpymt_paybal');
otherpymt_paybal=Number(otherpymt_paybal);
var otherpymtmethod_gl=otherpymt.find(':selected').data('otherpymtmethod_gl');
otherpymtmethod_gl=Number(otherpymtmethod_gl);
var otherpymtmethod_glsense=otherpymt.find(':selected').data('otherpymtmethod_glsense');
otherpymtmethod_glsense=Number(otherpymtmethod_glsense);
var otherpayment_amt=$("#otherpayment_amt").val();
otherpayment_amt=Number(otherpayment_amt);
//----------------CONTRAL------------------
var contral_id=$("#contral_id").val();
contral_id=Number(contral_id);
var contral=$("#contral_id");
var contraltype=contral.find(':selected').data('contraltype');
contraltype=Number(contraltype);
var contralsense=contral.find(':selected').data('contralsense');
contralsense=Number(contralsense);
//----------------credit account---------------

var creditpymt_id=$("#creditpymt").val();
creditpymt_id=Number(creditpymt_id);
var creditpymt=$("#creditpymt");
var creditacc_gl=creditpymt.find(':selected').data('creditacc_gl');
creditacc_gl=Number(creditacc_gl);
var creditacc_glsense=creditpymt.find(':selected').data('creditacc_glsense');
creditacc_glsense=Number(creditacc_glsense);
//----------------------------------------------------------

	if(purchaseinvoice_amt<=0){
		$("#purchaseinvoice_amt").css("background-color","yellow");
	}else if((paid_amt<=0)&&(credit_amt<=0)){
		$("#paid_amt").css("background-color","yellow");
	}else if(discount_amt<0){
		$("#discount_amt").css("background-color","red");
	}else if(purchaseinvoice_amt<paid_amt){
		$("#paid_amt").css("background-color","yellow");
	}else if(purchaseinvoice_amt<(paid_amt+discount_amt+credit_amt)){
	$("#paid_amt").css("background-color","yellow");
	}else if(purchaseinvoice_amt>(paid_amt+discount_amt+credit_amt)){
	$("#paid_amt").css("background-color","yellow");
	}else if(supplier_id<=0){
		alert("Please Select Supplier Again");
	}else if(contral_id<=0){
		alert("Please Select Contral Account");
	}else if(contraltype<=0){
		alert("Please Select Contral Account Again");
	}else if((pymt_id<=0)&&(credit_amt<=0)){
		alert("Please Select Payment Methode");
	}else if((pymt_id>0)&&(pymtmethod_gl<=0)){
		alert("Please Select Payment Methode Again");
	}else if((pymt_id>0)&&(payment_amt<=0)){
		alert("PLEASE SELECT ACCOUNT1");
	}else if((otherpymt_id>0)&&(otherpayment_amt<=0)){
		alert("PLEASE SELECT ACCOUNT2");
	}else if(paid_amt>(payment_amt+otherpayment_amt)){
		alert("PAID AMOUNT IS GREATER THAN PAYMENT AMOUNT AND OTHERPAYMENT AMOUNT");
	}else if(paid_amt<(payment_amt+otherpayment_amt)){
		alert("PAID AMOUNT IS LESS THAN PAYMENT AMOUNT AND OTHERPAYMENT AMOUNT");
	}else if((credit_amt>0)&&(creditpymt_id<=0)){
		alert("Please Select Credit Account");
	}else if((credit_amt<=0)&&(creditpymt_id>0)){
		alert("Credit Amount Is 0 Deselect Credit Account");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#pay_purchaseinvoice').attr("disabled", true);
		if((pymt_id>0)&&(payment_amt>0)&&(otherpymt_id<=0)&&(otherpayment_amt<=0)&&(credit_amt<=0)&&(creditpymt_id<=0)&&(contral_id>0)){
			
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_purchaseinvoicepayment_funct:1,payment_invoice_transactionno:payment_invoice_transactionno,payment_invoice_no:payment_invoice_no,purchaseinvoice_amt:purchaseinvoice_amt,paid_amt:paid_amt,discount_amt:discount_amt,credit_amt:credit_amt,supplier_id:supplier_id,pymt_id:pymt_id,pymt_paybal:pymt_paybal,pymtmethod_gl:pymtmethod_gl,pymtmethod_glsense:pymtmethod_glsense,payment_amt:payment_amt,contral_id:contral_id,contraltype:contraltype,contralsense:contralsense},
			success:function(data){
				alert(data);
				load_purchaseinvoice_list();
	}
	})
		}else if((pymt_id>0)&&(payment_amt>0)&&(otherpymt_id<=0)&&(otherpayment_amt<=0)&&(credit_amt>0)&&(creditpymt_id>0)&&(contral_id>0)){
			
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_purchaseinvoicepayment_credit_funct:1,payment_invoice_transactionno:payment_invoice_transactionno,payment_invoice_no:payment_invoice_no,purchaseinvoice_amt:purchaseinvoice_amt,paid_amt:paid_amt,discount_amt:discount_amt,credit_amt:credit_amt,supplier_id:supplier_id,pymt_id:pymt_id,pymt_paybal:pymt_paybal,pymtmethod_gl:pymtmethod_gl,pymtmethod_glsense:pymtmethod_glsense,payment_amt:payment_amt,contral_id:contral_id,contraltype:contraltype,contralsense:contralsense,creditpymt_id:creditpymt_id,creditacc_gl:creditacc_gl,creditacc_glsense:creditacc_glsense},
			success:function(data){
				alert(data);
				load_purchaseinvoice_list();
	}
	})
		}else if((pymt_id>0)&&(payment_amt>0)&&(otherpymt_id>0)&&(otherpayment_amt>0)&&(credit_amt<=0)&&(creditpymt_id<=0)&&(contral_id>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_purchaseinvoice2payment_funct:1,payment_invoice_transactionno:payment_invoice_transactionno,payment_invoice_no:payment_invoice_no,purchaseinvoice_amt:purchaseinvoice_amt,paid_amt:paid_amt,discount_amt:discount_amt,credit_amt:credit_amt,supplier_id:supplier_id,pymt_id:pymt_id,pymt_paybal:pymt_paybal,pymtmethod_gl:pymtmethod_gl,pymtmethod_glsense:pymtmethod_glsense,payment_amt:payment_amt,otherpymt_id:otherpymt_id,otherpymt_paybal:otherpymt_paybal,otherpymtmethod_gl:otherpymtmethod_gl,otherpymtmethod_glsense:otherpymtmethod_glsense,otherpayment_amt:otherpayment_amt,contral_id:contral_id,contraltype:contraltype,contralsense:contralsense},
			success:function(data){
				alert(data);
				load_purchaseinvoice_list();
	}
	})
		}else if((pymt_id>0)&&(payment_amt>0)&&(otherpymt_id>0)&&(otherpayment_amt>0)&&(credit_amt>0)&&(creditpymt_id>0)&&(contral_id>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_purchaseinvoiceallpayment_funct:1,payment_invoice_transactionno:payment_invoice_transactionno,payment_invoice_no:payment_invoice_no,purchaseinvoice_amt:purchaseinvoice_amt,paid_amt:paid_amt,discount_amt:discount_amt,credit_amt:credit_amt,supplier_id:supplier_id,pymt_id:pymt_id,pymt_paybal:pymt_paybal,pymtmethod_gl:pymtmethod_gl,pymtmethod_glsense:pymtmethod_glsense,payment_amt:payment_amt,otherpymt_id:otherpymt_id,otherpymt_paybal:otherpymt_paybal,otherpymtmethod_gl:otherpymtmethod_gl,otherpymtmethod_glsense:otherpymtmethod_glsense,otherpayment_amt:otherpayment_amt,contral_id:contral_id,contraltype:contraltype,contralsense:contralsense,creditpymt_id:creditpymt_id,creditacc_gl:creditacc_gl,creditacc_glsense:creditacc_glsense},
			success:function(data){
				alert(data);
				load_purchaseinvoice_list();
	}
	})
		}else if((pymt_id<=0)&&(payment_amt<=0)&&(otherpymt_id<=0)&&(otherpayment_amt<=0)&&(credit_amt>0)&&(creditpymt_id>0)&&(contral_id>0)){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_purchaseinvoicecreditpayment_funct:1,payment_invoice_transactionno:payment_invoice_transactionno,payment_invoice_no:payment_invoice_no,purchaseinvoice_amt:purchaseinvoice_amt,paid_amt:paid_amt,discount_amt:discount_amt,credit_amt:credit_amt,supplier_id:supplier_id,contral_id:contral_id,contraltype:contraltype,contralsense:contralsense,creditpymt_id:creditpymt_id,creditacc_gl:creditacc_gl,creditacc_glsense:creditacc_glsense},
			success:function(data){
				alert(data);
				load_purchaseinvoice_list();
	}
	})
		}else{
			alert("PAYMENT METHOD MISSMATCH USE PAYMENT METHOD 1 OR FILL CORRECT INFO");
		}
	
	
	
	}}
})

$("body").delegate("#supplier","click",function(){
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_supplierlist_funct:1},
			success:function(data){
				$("#purchase_panel_title").html("<H5>SUPPLIERS LIST</H5>");
				$(".purchase_body").html(data);
	}
	})
})
function load_suplierlist(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_supplierlist_funct:1},
			success:function(data){
				$("#purchase_panel_title").html("<H5>SUPPLIERS LIST</H5>");
				$(".purchase_body").html(data);
	}
	})
}


$("body").delegate("#addnew_supplierform","click",function(){
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_supplierform_funct:1},
			success:function(data){
				$("#purchase_panel_title").html("<H5>NEW SUPPLIER FORM</H5>");
				$(".purchase_body").html(data);
	}
	})
})

$("body").delegate("#save_newsupplier","click",function(){
	//alert();
var  supplier_name=$("#supplier_name").val();
var  suppliertin=$("#suppliertin").val();
  var supplier_tincount=suppliertin.length;
var  suppliertel=$("#suppliertel").val();
  var supplier_telcount=suppliertel.length;
var  supplier_address=$("#supplier_address").val();
 var supplier_email=$("#supplier_email").val();
if(suppliertin==""){
		$("#suppliertin").css("background-color","yellow");
	}else if(supplier_tincount<9){
	 alert("Tin Number Must Be 9 Only");
	 $("#suppliertin").css("background-color","yellow");
 }else if(suppliertel==""){
		$("#suppliertel").css("background-color","yellow");
	}else if(supplier_telcount<10){
	 alert("Telephone Number Must Be 10 Only");
	 $("#suppliertel").css("background-color","yellow");
 }else if(supplier_name==""){
		$("#supplier_name").css("background-color","yellow");
	}else if(supplier_address==""){
		$("#supplier_address").css("background-color","yellow");
	}else if(supplier_email==""){
		$("#supplier_email").css("background-color","yellow");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#save_newsupplier').attr("disabled", true);
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newsupplier_funct:1,supplier_name:supplier_name,suppliertin:suppliertin,suppliertel:suppliertel,supplier_address:supplier_address,supplier_email:supplier_email},
			success:function(data){
				alert(data);
				load_suplierlist();
	}
	})	
		
		
	}}

})



$("body").delegate("#view_supplier","click",function(){
	
	var supplier_id=$(this).attr('supplier_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_supplierinformation_funct:1,supplier_id:supplier_id},
			success:function(data){
				$("#purchase_panel_title").html("<H5>SUPPLIER INFORMATIONS</H5>");
				$(".purchase_body").html(data);
	}
	})
})


$("body").delegate("#save_updatesupplier","click",function(){
	//alert();
	var my_supp_id=$(this).attr('my_supp_id');
	my_supp_id=Number(my_supp_id);
var  supplier_name=$("#supplier_name").val();
var  suppliertin=$("#suppliertin").val();
  var supplier_tincount=suppliertin.length;
var  suppliertel=$("#suppliertel").val();
  var supplier_telcount=suppliertel.length;
var  supplier_address=$("#supplier_address").val();
 var supplier_email=$("#supplier_email").val();
if(suppliertin==""){
		$("#suppliertin").css("background-color","yellow");
	}else if(supplier_tincount<9){
	 alert("Tin Number Must Be 9 Only");
	 $("#suppliertin").css("background-color","yellow");
 }else if(suppliertel==""){
		$("#suppliertel").css("background-color","yellow");
	}else if(supplier_telcount<10){
	 alert("Telephone Number Must Be 10 Only");
	 $("#suppliertel").css("background-color","yellow");
 }else if(supplier_name==""){
		$("#supplier_name").css("background-color","yellow");
	}else if(supplier_address==""){
		$("#supplier_address").css("background-color","yellow");
	}else if(supplier_email==""){
		$("#supplier_email").css("background-color","yellow");
	}else if(my_supp_id<=0){
		alert("Please Select Supplier Again!");
	}else{
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updatesupplier_funct:1,my_supp_id:my_supp_id,supplier_name:supplier_name,suppliertin:suppliertin,suppliertel:suppliertel,supplier_address:supplier_address,supplier_email:supplier_email},
			success:function(data){
				alert(data);
				load_suplierlist();
	}
	})	
		
		
	}

})


//----------------------------------sales --------------------

	function load_debt_amt(){
		
		
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_totdebt_funct:1},
			success:function(data){
				$("#amount_of_debt").html(data);
			
	}
	})
	}

$("body").delegate("#amount_of_debt1","click",function(){
	
	
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_clientwithdebt_funct:1},
			success:function(data){
				$(".card-header").html("<H5>CLIENTS DEBT LIST</H5>");
				$(".main_body").html(data);
			
	}
	})
	
	
})



$("body").delegate("#sales_setting","click",function(){
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_sales_setting_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".main_body").html(data);
				$("#sales_panel_title").html("<H5>SALES PANEL</H5>");
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}
})
//----------------------sales invoice--------------------------

$("body").delegate("#salesinvoice","click",function(){
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_sales_invoiceslist_funct:1},
			success:function(data){
				$("#sales_panel_title").html("<H5>SALES INVOICES LIST</H5>");
				$(".sales_body").html(data);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}
})

function load_salesinvoices_list(){
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_sales_invoiceslist_funct:1},
			success:function(data){
				$("#sales_panel_title").html("<H5>SALES INVOICES LIST</H5>");
				$(".sales_body").html(data);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})
}


$("body").delegate("#searched_sales","keyup",function(){
	var  searched_sales=$("#searched_sales").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_searchedsales_funct:1,searched_sales:searched_sales},
			success:function(data){
				$(".sales_list_body").html(data);
	}
	})
})


//-----------------view sales based on date---------------------
	$("body").delegate("#view_searched_salesbydate","click",function(){

 var datefrom=$("#datefrom").val();
 var dateto=$("#dateto").val();
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_sales_historydetailsbydate_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
					$(".sales_list_body").html(data);
	}
	})
})
//-----------------------------client--------------------------

$("body").delegate("#client","click",function(){
	//alert("");
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_clientlist_funct:1},
			success:function(data){
				$("#sales_panel_title").html("<H5>CLIENT LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})

function load_clientlist_funct(){
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_clientlist_funct:1},
			success:function(data){
				$("#sales_panel_title").html("<H5>CLIENT LIST</H5>");
				$(".sales_body").html(data);
	}
	})	
}


$("body").delegate("#search_client_forsale","keyup",function(){
	var  search_client_forsale=$("#search_client_forsale").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_clientsearched_funct:1,search_client_forsale:search_client_forsale},
			success:function(data){
				$(".client_body").html(data);
	}
	})
})

$("body").delegate("#addnew_clientform","click",function(){
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_clientform_funct:1},
			success:function(data){
			$("#sales_panel_title").html("<H5>NEW CLIENT FORM</H5>");
				$(".sales_body").html(data);
	}
	})
})

$("body").delegate("#save_newclient","click",function(){
	//alert();
var  client_name=$("#client_name").val();
var  clienttin=$("#clienttin").val();
  var clienttincount=clienttin.length;
var  clienttel=$("#clienttel").val();
  var clienttelcount=clienttel.length;
var  client_address=$("#client_address").val();
 var client_email=$("#client_email").val();
if(clienttin==""){
		$("#clienttin").css("background-color","yellow");
	}else if(clienttincount<9){
	 alert("Tin Number Must Be 9 Only");
	 $("#clienttin").css("background-color","yellow");
 }else if(clienttel==""){
		$("#clienttel").css("background-color","yellow");
	}else if(clienttelcount<10){
	 alert("Telephone Number Must Be 10 Only");
	 $("#clienttel").css("background-color","yellow");
 }else if(client_name==""){
		$("#client_name").css("background-color","yellow");
	}else if(client_address==""){
		$("#client_address").css("background-color","yellow");
	}else if(client_email==""){
		$("#client_email").css("background-color","yellow");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
			$('#save_newclient').attr("disabled", true);
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newclient_funct:1,client_name:client_name,clienttin:clienttin,clienttel:clienttel,client_address:client_address,client_email:client_email},
			success:function(data){
				alert(data);
				load_clientlist_funct();
				}})	
	}}
		})


$("body").delegate("#view_client","click",function(){
	var client_id=$(this).attr('client_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_clientinformation_funct:1,client_id:client_id},
			success:function(data){
			$("#sales_panel_title").html("<H5> CLIENT INFORMATIONS</H5>");
				$(".sales_body").html(data);
	}
	})
})




$("body").delegate("#save_updateclient","click",function(){
	
	var myclient_id=$(this).attr('myclient_id');
	myclient_id=Number(myclient_id);
var  client_name=$("#client_name").val();
var  clienttin=$("#clienttin").val();
  var clienttincount=clienttin.length;
var  clienttel=$("#clienttel").val();
  var clienttelcount=clienttel.length;
var  client_address=$("#client_address").val();
 var client_email=$("#client_email").val();
 if(myclient_id<=0){
	 alert("Please Select Client Again");
}else if(clienttin==""){
		$("#clienttin").css("background-color","yellow");
	}else if(clienttincount<9){
	 alert("Tin Number Must Be 9 Only");
	 $("#clienttin").css("background-color","yellow");
 }else if(clienttel==""){
		$("#clienttel").css("background-color","yellow");
	}else if(clienttelcount<10){
	 alert("Telephone Number Must Be 10 Only");
	 $("#clienttel").css("background-color","yellow");
 }else if(client_name==""){
		$("#client_name").css("background-color","yellow");
	}else if(client_address==""){
		$("#client_address").css("background-color","yellow");
	}else if(client_email==""){
		$("#client_email").css("background-color","yellow");
	}else{
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updateclient_funct:1,myclient_id:myclient_id,client_name:client_name,clienttin:clienttin,clienttel:clienttel,client_address:client_address,client_email:client_email},
			success:function(data){
				alert(data);
				load_clientlist_funct();
				}})	
		}
		})
//-----------client prepayment---------------

$("body").delegate("#save_client_prepaid","click",function(){
	
	var myclient_id=$(this).attr('myprepaidclient_id');
	myclient_id=Number(myclient_id);
var  prepaid_contralacc=$("#prepaid_contralacc").val();
var  client_prepaidamt=$("#client_prepaidamt").val();
var prepaid_date=$("#prepaid_date").val();
var prepaidpymt=$("#prepaidpymt").val();
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else if(myclient_id<=0){
	 alert("Please Select Client Again");
}else if(prepaid_contralacc<=0){
		$("#prepaid_contralacc").css("background-color","yellow");
	}else if(client_prepaidamt<=0){
	 $("#client_prepaidamt").css("background-color","yellow");
 }else if(prepaidpymt<=0){
	 $("#prepaidpymt").css("background-color","yellow");
 }else if((prepaid_date.trim().length)<=0){
 alert("Please Select PrepaidDate");
 }else{
if(confirm("Are You Sure To SavePrepaid? Press Ok Or Cancel!")) {
			$('#save_client_prepaid').attr("disabled", true);
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_clientprepaid_funct:1,myclient_id:myclient_id,prepaid_contralacc:prepaid_contralacc,client_prepaidamt:client_prepaidamt,prepaidpymt:prepaidpymt,prepaid_date:prepaid_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_clientlist_funct();
}})}	
		}
		})
		
		
		//---return prepaid to client--------------------------


$("body").delegate("#save_client_returnprepaid","click",function(){
	
	var returnedmyprepaidclient_id=$(this).attr('returnedmyprepaidclient_id');
	returnedmyprepaidclient_id=Number(returnedmyprepaidclient_id);
	var client_returnprepaymentbal=$("#client_returnprepaymentbal").val();
	client_returnprepaymentbal=Number(client_returnprepaymentbal);
var  returnedprepaid_contralacc=$("#returnedprepaid_contralacc").val();
var  client_returnedprepaidamt=$("#client_returnedprepaidamt").val();
var returnprepaid_date=$("#returnprepaid_date").val();
var returnedprepaidpymt=$("#returnedprepaidpymt").val();
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else if(returnedmyprepaidclient_id<=0){
	 alert("Please Select Client Again");
}else if(client_returnprepaymentbal<=0){
 alert("No Prepayment Balance");
}
else if(returnedprepaid_contralacc<=0){
		$("#returnedprepaid_contralacc").css("background-color","yellow");
	}else if(client_returnedprepaidamt<=0){
	 $("#client_returnedprepaidamt").css("background-color","yellow");
 }else if(client_returnprepaymentbal<client_returnedprepaidamt){
 alert("Please Check Remain Prepaid Amount Blance!");
 
}else if(returnedprepaidpymt<=0){
	 $("#returnedprepaidpymt").css("background-color","yellow");
 }else if((returnprepaid_date.trim().length)<=0){
 alert("Please Select Return PrepaidDate");
 }else{
if(confirm("Are You Sure To ReturnPrepaid? Press Ok Or Cancel!")) {
			$('#save_client_returnprepaid').attr("disabled", true);
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_clientreturnprepaid_funct:1,returnedmyprepaidclient_id:returnedmyprepaidclient_id,
			returnedprepaid_contralacc:returnedprepaid_contralacc,
			client_returnedprepaidamt:client_returnedprepaidamt,
			returnedprepaidpymt:returnedprepaidpymt,returnprepaid_date:returnprepaid_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_clientlist_funct();
}})}	
		}
		})
		
		
//--------------------------------------proforma-------------------
load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
function load_newproformnumber(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{count_newproformalist_funct:1},
			success:function(data){
				$("#np").html(data);
	}
	})
}
function load_submittedproformnumber(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{count_submittedproformalist_funct:1},
			success:function(data){
				$("#sp").html(data);
	}
	})
}
function load_approvedproformnumber(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{count_approvedproformalist_funct:1},
			success:function(data){
				$("#ap").html(data);
	}
	})
}
function load_processingproformnumber(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{count_processingproformalist_funct:1},
			success:function(data){
				$("#pp").html(data);
	}
	})
}
function load_completedproformnumber(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{count_completedproformalist_funct:1},
			success:function(data){
				$("#cp").html(data);
	}
	})
}


$("body").delegate("#proforma","click",function(){
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})
function load_proforma_list(my_check_sessesion_id){
	var check_sessesion_id=my_check_sessesion_id;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})
}

$("body").delegate("#proformainvoice_date","mouseenter",function(){
	load_proformadate();
})

$("body").delegate("#addnew_proforma","click",function(){
	//alert("");
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proforma_form:1},
			success:function(data){
				$("#sales_panel_title").html("<H5>PROFORMA FORM</H5>");
				$(".sales_body").html(data);
	}
	})
})



$("body").delegate("#createproforma_invoice","click",function(){
	var proformainvoice_ref=$("#proformainvoice_ref").val();
	proformainvoice_ref=Number(proformainvoice_ref);
 var proformainvoice_date=$("#proformainvoice_date").val();
 var proformainvoice_amt=$("#proformainvoice_amt").val();
 proformainvoice_amt=Number(proformainvoice_amt);
  var client_id=$("#client_id").val();
  client_id=Number(client_id);
  
  	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
  if(proformainvoice_ref<=0){
		alert("GENERATE NEW PROFORMA");
	}else if(proformainvoice_date==""){
		$("#proformainvoice_date").css("background-color","yellow");
	}else if(client_id<=0){
		alert("ADD CLIENT DETAILS");
	}else if(proformainvoice_amt<0){
$("#proformainvoice_amt").css("background-color","yellow");
	}else{if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#createproforma_invoice').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_proforma_funct:1,proformainvoice_ref:proformainvoice_ref,proformainvoice_date:proformainvoice_date,proformainvoice_amt:proformainvoice_amt,client_id:client_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_proforma_list(check_sessesion_id);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}}}
})



$("body").delegate("#view_proforma_details","click",function(){
	
	var invoice_id=$(this).attr('invoice_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proforma_details_funct:1,invoice_id:invoice_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PROFORMA DETAILS</H5>");
				$(".sales_body").html(data);
				load_proforma_detailslist(invoice_id);
	}
	})
})



$("body").delegate("#delete_proforma_invoice","click",function(){
	
	var invoice_id=$(this).attr('invoice_id');
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		if(confirm("Are You Sure To Delete Proforma? Press Ok Or Cancel!")){
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proforma_delete_funct:1,invoice_id:invoice_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
			load_proforma_list(check_sessesion_id);
	}
	})}}
})

$("body").delegate("#add_proforma_agent","click",function(){
	
	var invoice_id=$(this).attr('invoice_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proforma_addagent_funct:1,invoice_id:invoice_id},
			success:function(data){
			$("#sales_panel_title").html("<H5>ADD SALES AGENT ON PROFORMA</H5>");
				$(".sales_body").html(data);
	}
		})
})


$("body").delegate("#add_salesname","click",function(){
	
	var proforma_id=$(this).attr('proforma__id');
	proforma_id=Number(proforma_id);
	var agent_id=$(this).attr('agent_id');
	agent_id=Number(agent_id);
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		if(confirm("Are You Sure To Add Agent On Proforma? Press Ok Or Cancel!")){
			if(proforma_id<=0){
				alert("Please Select Proforma Again");
			}else if(agent_id<=0){
				alert("Please Select SALES Agent Again");
			}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_saveproforma_agent_funct:1,proforma_id:proforma_id,agent_id:agent_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
			load_proforma_list(check_sessesion_id);
	}
	})}}}
})


$("body").delegate("#agent_list","click",function(){
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_agentlist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
			$("#sales_panel_title").html("<H5>SALES AGENT LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})


function load_salesagent(my_check_sessesion_id){
	var check_sessesion_id=my_check_sessesion_id;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_agentlist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
			$("#sales_panel_title").html("<H5>SALES AGENT LIST</H5>");
				$(".sales_body").html(data);
	}
		})
}


$("body").delegate("#save_newsalesname","click",function(){
 var sales_name=$("#sales_name").val();
 var sales_telephone=$("#sales_telephone").val();
 var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
 if(sales_name==""){
	 alert("Please Enter Sales Name");
 }else if(sales_telephone==""){
	 alert("Please Enter Telephone");
 }else{
	 $.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_savesales_funct:1,sales_name:sales_name,sales_telephone:sales_telephone,check_sessesion_id:check_sessesion_id},
			success:function(data){
				load_salesagent(check_sessesion_id);
	}
	})
	}}
})
//------------------------END ADD AGENT-----------


$("body").delegate("#proformaitem_category","click",function(){
 var proformaitem_category=$("#proformaitem_category").val();
 proformaitem_category=Number(proformaitem_category);
 if(proformaitem_category<=0){}else{
	 $.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_listcategory_items_funct:1,proformaitem_category:proformaitem_category},
			success:function(data){
				$("#get_item_basedcategory").html(data);
	}
	})
 }
})
$("body").delegate("#proformaitem","click",function(){
var proformaitem=$("#proformaitem");
 var itemtype =proformaitem.find(':selected').data('itemtype');
 var itembg =proformaitem.find(':selected').data('itembg'); 
 var itembgid=proformaitem.find(':selected').data('itembgid');
 itembgid=Number(itembgid);
 var itemitmatt =proformaitem.find(':selected').data('itemitmatt');
 var itemitmattid=proformaitem.find(':selected').data('itemitmattid');
 itemitmattid=Number(itemitmattid);
 var itemprice =proformaitem.find(':selected').data('itemprice');
$("#proformaitem_type").val(itemtype);
$("#proformaitem_bg").val(itembg);
$("#proformaitem_bgid").val(itembgid);
$("#proformaitem_itmatt").val(itemitmatt);
$("#proformaitem_itmattid").val(itemitmattid);
$("#proformaitem_price").val(itemprice);


})

$("body").delegate("#proformaitem_size","keyup",function(){
	 var proformaitem_price=$("#proformaitem_price").val();
	proformaitem_price=Number(proformaitem_price);
	var proformaitem_size=$("#proformaitem_size").val();
	proformaitem_size=Number(proformaitem_size);
	
	var check_sizemeter_status=$("#check_sizemeter_status").val();
	check_sizemeter_status=Number(check_sizemeter_status);
	
	var proformaitem_qty=$("#proformaitem_qty").val();
	proformaitem_qty=Number(proformaitem_qty);
	var proformaitem_totalsize=0;
	proformaitem_totalsize=Number(proformaitem_totalsize);
	var proformaitem_totalprice=0;
	proformaitem_totalprice=Number(proformaitem_totalprice);
	proformaitem_totalsize=proformaitem_size*proformaitem_qty;
	
	
	proformaitem_totalsize=proformaitem_totalsize.toFixed(2);
	
	
	//proformaitem_totalprice=proformaitem_price*proformaitem_size*proformaitem_qty;
	
	if(check_sizemeter_status==1){
		
	proformaitem_totalprice=proformaitem_price*proformaitem_size*proformaitem_qty;
	
	}else if(check_sizemeter_status==2){
		
	proformaitem_totalprice=proformaitem_price*proformaitem_qty;
	
	}else{
		
	}
	
	proformaitem_totalprice=proformaitem_totalprice.toFixed();
	$("#proformaitem_adjustedsize").val(proformaitem_size);
	$("#proformaitem_totalsize").val(proformaitem_totalsize);
	$("#proformaitem_totalprice").val(proformaitem_totalprice);
	})
	
	$("body").delegate("#proformaitem_price","keyup",function(){
	 var proformaitem_price=$("#proformaitem_price").val();
	proformaitem_price=Number(proformaitem_price);
	var proformaitem_size=$("#proformaitem_size").val();
	proformaitem_size=Number(proformaitem_size);
	
	var check_sizemeter_status=$("#check_sizemeter_status").val();
	check_sizemeter_status=Number(check_sizemeter_status);
	
	var proformaitem_qty=$("#proformaitem_qty").val();
	proformaitem_qty=Number(proformaitem_qty);
	var proformaitem_totalsize=0;
	proformaitem_totalsize=Number(proformaitem_totalsize);
	var proformaitem_totalprice=0;
	proformaitem_totalprice=Number(proformaitem_totalprice);
	proformaitem_totalsize=proformaitem_size*proformaitem_qty;
	proformaitem_totalsize=proformaitem_totalsize.toFixed(2);
	//proformaitem_totalprice=proformaitem_price*proformaitem_size*proformaitem_qty;
	
	if(check_sizemeter_status==1){
		
	proformaitem_totalprice=proformaitem_price*proformaitem_size*proformaitem_qty;
	
	}else if(check_sizemeter_status==2){
		
	proformaitem_totalprice=proformaitem_price*proformaitem_qty;
	
	}else{
		
	}
	proformaitem_totalprice=proformaitem_totalprice.toFixed();
	$("#proformaitem_totalsize").val(proformaitem_totalsize);
	$("#proformaitem_totalprice").val(proformaitem_totalprice);
	})
	
	$("body").delegate("#proformaitem_qty","keyup",function(){
	 var proformaitem_price=$("#proformaitem_price").val();
	proformaitem_price=Number(proformaitem_price);
	var proformaitem_size=$("#proformaitem_size").val();
	proformaitem_size=Number(proformaitem_size);
	
	var check_sizemeter_status=$("#check_sizemeter_status").val();
	check_sizemeter_status=Number(check_sizemeter_status);
	
	var proformaitem_qty=$("#proformaitem_qty").val();
	proformaitem_qty=Number(proformaitem_qty);
	var proformaitem_totalsize=0;
	proformaitem_totalsize=Number(proformaitem_totalsize);
	var proformaitem_totalprice=0;
	proformaitem_totalprice=Number(proformaitem_totalprice);
	proformaitem_totalsize=proformaitem_size*proformaitem_qty;
	proformaitem_totalsize=proformaitem_totalsize.toFixed(2);
	//proformaitem_totalprice=proformaitem_price*proformaitem_size*proformaitem_qty;
	
	if(check_sizemeter_status==1){
		
	proformaitem_totalprice=proformaitem_price*proformaitem_size*proformaitem_qty;
	
	}else if(check_sizemeter_status==2){
		
	proformaitem_totalprice=proformaitem_price*proformaitem_qty;
	
	}else{
		
	}
	proformaitem_totalprice=proformaitem_totalprice.toFixed();
	$("#proformaitem_totalsize").val(proformaitem_totalsize);
	$("#proformaitem_totalprice").val(proformaitem_totalprice);
	})
	
	
//--------------------------save proforma details-----------------

$("body").delegate("#addproforma_details","click",function(){
	var proformainvoice_ref=$("#proformainvoice_ref").val();
	    proformainvoice_ref=Number(proformainvoice_ref);
	var proformaitem_category=$("#proformaitem_category").val();
	proformaitem_category=Number(proformaitem_category);
	var proformaitem=$("#proformaitem").val();
	proformaitem=Number(proformaitem);
	
	var proformaitem_itmattid=$("#proformaitem_itmattid").val();
	proformaitem_itmattid=Number(proformaitem_itmattid);
	var proformaitem_bgid=$("#proformaitem_bgid").val();
	proformaitem_bgid=Number(proformaitem_bgid);
	var proformaitem_type=$("#proformaitem_type").val();
	var proforma_color=$("#proforma_color").val();
	proforma_color=Number(proforma_color);
	var proformaitem_price=$("#proformaitem_price").val();
	proformaitem_price=Number(proformaitem_price);
	var check_sizemeter_status=$("#check_sizemeter_status").val();
	check_sizemeter_status=Number(check_sizemeter_status);
	var proformaitem_size=$("#proformaitem_size").val();
	proformaitem_size=Number(proformaitem_size);
	var proformaitem_adjustedsize=$("#proformaitem_adjustedsize").val();
	proformaitem_adjustedsize=Number(proformaitem_adjustedsize);
	var proformaitem_qty=$("#proformaitem_qty").val();
	proformaitem_qty=Number(proformaitem_qty);
	var proformaitem_totalsize=$("#proformaitem_totalsize").val();
	proformaitem_totalsize=Number(proformaitem_totalsize);
	var proformaitem_totalprice=$("#proformaitem_totalprice").val();
	proformaitem_totalprice=Number(proformaitem_totalprice);
	var proformainvoice_amt=$("#proformainvoice_amt").val();
	proformainvoice_amt=Number(proformainvoice_amt);
	//alert(proformainvoice_amt);
	
	var tottoproduce=0;
	tottoproduce=proformaitem_adjustedsize*proformaitem_qty;
	tottoproduce=tottoproduce.toFixed(2);
	
	var tottoproduceprice=0;
	tottoproduceprice=proformaitem_adjustedsize*proformaitem_qty*proformaitem_price;
	tottoproduceprice=tottoproduceprice.toFixed();
	var newinvoiceamt=0
	newinvoiceamt=Number(newinvoiceamt);
	newinvoiceamt=proformainvoice_amt+proformaitem_totalprice;
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
  if(proformainvoice_ref<=0){
		alert("SELECT PROFORMA AGAIN");
	}else if(proformaitem_category<=0){
		alert("SELECT CATEGORY");
	}else if(proformaitem<=0){
		alert("SELECT ITEM");
	}else if(proformaitem_price<=0){
		alert("Price Can't Be 0");
$("#proformaitem_price").css("background-color","yellow");
	//}else if(proformaitem_size<=0){
	}else if((proformaitem_size<=0)&&(check_sizemeter_status==1)){
			alert("SIZE Can't Be 0");
$("#proformaitem_size").css("background-color","yellow");
	}else if((proformaitem_size>0)&&(check_sizemeter_status==2)){
				alert("SELECT MEASURE TYPE ");
$("#proformaitem_size").css("background-color","yellow");
	
	}else if(proformaitem_qty<=0){
		alert("Qty Can't Be 0");
$("#proformaitem_qty").css("background-color","yellow");
	}else if((proformaitem_adjustedsize<=0)&&(proformaitem_size>0)){
		alert("ADJUSTED SIZE Can't Be 0");
$("#proformaitem_adjustedsize").css("background-color","yellow");
	
	}else if(proformaitem_adjustedsize>proformaitem_size){
		alert("ADJUSTED SIZE Can't Be Greater Than Requested Size");
$("#proformaitem_adjustedsize").css("background-color","yellow");
	
	}else if((proformaitem_totalsize<=0)&&(check_sizemeter_status==1)){
		alert("Total SIZE Can't Be 0");
$("#proformaitem_size").css("background-color","yellow");
	}else if(proformaitem_totalprice<=0){
		alert("Total Price Can't Be 0");
$("#proformaitem_price").css("background-color","yellow");
	}else{

		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_proformadetails_funct:1,proformainvoice_ref:proformainvoice_ref,proformaitem:proformaitem,proformaitem_price:proformaitem_price,proformaitem_size:proformaitem_size,proformaitem_qty:proformaitem_qty,proformaitem_totalsize:proformaitem_totalsize,proformaitem_totalprice:proformaitem_totalprice,proforma_color:proforma_color,proformaitem_adjustedsize:proformaitem_adjustedsize,proformaitem_itmattid:proformaitem_itmattid,proformaitem_bgid:proformaitem_bgid,proformaitem_type:proformaitem_type,tottoproduce:tottoproduce,tottoproduceprice:tottoproduceprice,check_sessesion_id:check_sessesion_id,check_sizemeter_status:check_sizemeter_status},
			success:function(data){
				alert(data);
				$("#proformainvoice_amt").val(newinvoiceamt);
				$("#proformainvoice_amt1").val(newinvoiceamt);
				load_proforma_detailslist(proformainvoice_ref);
	}
	})}}
})

	
	function load_proforma_detailslist(my_proforma){
		var my_proforma=my_proforma;
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proformaitemstock_list_funct:1,my_proforma:my_proforma},
			success:function(data){
				$("#get_proforma_item_list").html(data);
	}
	})
	}
	
	//-----------check duplication-----------------
	
		
	
	//-----------------GET ID TO UPDATE----------------------
	
			/*function load_getid_forproforma_detailduplication(proformainvoice_ref,my_item,my_item_price,my_item_size,my_item_type){
		var my_proforma=proformainvoice_ref;
		var my_item=my_item;
		var my_item_price=my_item_price;
		var my_item_size=my_item_size;
		var my_item_type=my_item_type;
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proformaitemstock_duplicationid_funct:1,my_proforma:my_proforma,my_item:my_item,my_item_price:my_item_price,my_item_size:my_item_size,my_item_type:my_item_type},
			success:function(data){
				//$("#get_proforma_item_list").html(data);
				alert("2");
				return data;
				
				alert("2");
	}
	})
	}*/
	
	
	$("body").delegate("#duplicated_proformaitem","click",function(){
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	var duplicated_id=$(this).attr('duplicated_id');
	duplicated_id=Number(duplicated_id);
	
	
	if(duplicated_id<=0){
		alert("No duplication Found");
	}else if((proforma_id<=0)||(details_id<=0)){
		alert("Please Select Proforma Again");
	}else{
		
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proforma_duplicated_details_funct:1,proforma_id:proforma_id,details_id:details_id,duplicated_id:duplicated_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>DUPLICATED PROFORMA DETAILS</H5>");
				$(".sales_body").html(data);
				//load_proforma_duplicateddetailslist(proforma_id);
	}
	})}
})



$("body").delegate("#merge_duplicated_proformaitem","click",function(){
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	var duplicated_id=$(this).attr('duplicated_id');
	duplicated_id=Number(duplicated_id);
	
	var comb_qty=$(this).attr('comb_qty');
	comb_qty=Number(comb_qty);
	
	var comb_item=$(this).attr('comb_item');
	comb_item=Number(comb_item);
	
	var comb_totreqsize=$(this).attr('comb_totreqsize');
	comb_totreqsize=Number(comb_totreqsize);
	
	var comb_totproducedsize=$(this).attr('comb_totproducedsize');
	comb_totproducedsize=Number(comb_totproducedsize);
	
	var comb_totprice=$(this).attr('comb_totprice');
	comb_totprice=Number(comb_totprice);
	
	var comb_adjtotprice=$(this).attr('comb_adjtotprice');
	comb_adjtotprice=Number(comb_adjtotprice);
	
	
	if((proforma_id<=0)||(details_id<=0)||(duplicated_id<=0)||(comb_item<=0)){
		alert("Please Select Proforma Again");
	}else if((comb_qty<=0)||(comb_totreqsize<=0)||(comb_totproducedsize<=0)||(comb_totprice<=0)||(comb_adjtotprice<=0)){
		alert("PROFORMA ITEM CAN'T BE COMBINED USE OTHER WAYS");
	}else{
		if(confirm("Are You Sure To COMBINE QUANTITY? Press Ok Or Cancel!")) {
		//$('#delete_proformaitem').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_duplicatedproforma_details_combination_funct:1,proforma_id:proforma_id,details_id:details_id,duplicated_id:duplicated_id,comb_qty:comb_qty,comb_item:comb_item,comb_totreqsize:comb_totreqsize,comb_totproducedsize:comb_totproducedsize,comb_totprice:comb_totprice,comb_adjtotprice:comb_adjtotprice},
			success:function(data){
				alert(data);
				
				load_currentproforma_detailslist(proforma_id);
	}
	})}}
})

function load_currentproforma_detailslist(invoice_id){
	var invoice_id=invoice_id;
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proforma_details_funct:1,invoice_id:invoice_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PROFORMA DETAILS</H5>");
				$(".sales_body").html(data);
				load_proforma_detailslist(invoice_id);
	}
})
}
	
	
	//-----------------------remove proforma item---------------------

$("body").delegate("#delete_proformaitem","click",function(){
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	var details_totprice=$(this).attr('details_totprice');
	details_totprice=Number(details_totprice);
	
	var proforma_totamt=$(this).attr('proforma_totamt');
	proforma_totamt=Number(proforma_totamt);
	
	var newinvoiceamt=0
	newinvoiceamt=Number(newinvoiceamt);
	newinvoiceamt=proforma_totamt-details_totprice;
	if((proforma_id)<=0||(details_id<=0)){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Delete? Press Ok Or Cancel!")) {
		//$('#delete_proformaitem').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{delete_proforma_details_funct:1,proforma_id:proforma_id,details_id:details_id,details_totprice:details_totprice},
			success:function(data){
				alert(data);
				$("#proformainvoice_amt").val(newinvoiceamt);
				$("#proformainvoice_amt1").val(newinvoiceamt);
				load_proforma_detailslist(proforma_id);
	}
	})}}
})
	
	//------------edit proforma item
	
	$("body").delegate("#edit_proformaitem","click",function(){
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	var details_totprice=$(this).attr('details_totprice');
	details_totprice=Number(details_totprice);
	
	var proforma_totamt=$(this).attr('proforma_totamt');
	proforma_totamt=Number(proforma_totamt);
	
	//var newinvoiceamt=0
	//newinvoiceamt=Number(newinvoiceamt);
	//newinvoiceamt=proforma_totamt-details_totprice;
	if((proforma_id)<=0||(details_id<=0)){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Edit? Press Ok Or Cancel!")) {
		//$('#delete_proformaitem').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{edit_proforma_details_item_funct:1,proforma_id:proforma_id,details_id:details_id,details_totprice:details_totprice},
			success:function(data){
				
				$("#sales_panel_title").html("<H5>PROFORMA DETAILS UPDATE</H5>");
				$(".sales_body").html(data);
				//$("#proformainvoice_amt").val(newinvoiceamt);
				//$("#proformainvoice_amt1").val(newinvoiceamt);
				load_proforma_detailslist(proforma_id);
	}
	})}}
})
	
	
	
$("body").delegate("#add_updateproforma_details_item","click",function(){
	var proformainvoice_ref=$("#proformainvoice_ref").val();
	    proformainvoice_ref=Number(proformainvoice_ref);
	var proforma_color=$("#proforma_color").val();
	proforma_color=Number(proforma_color);
	
	var proformaitem=$("#proformaitem").val();
	proformaitem=Number(proformaitem);
	var proformaitem_price=$("#proformaitem_price").val();
	proformaitem_price=Number(proformaitem_price);
	var proformaitem_size=$("#proformaitem_size").val();
	proformaitem_size=Number(proformaitem_size);
	var proformaitem_adjustedsize=$("#proformaitem_adjustedsize").val();
	proformaitem_adjustedsize=Number(proformaitem_adjustedsize);
	var proformaitem_qty=$("#proformaitem_qty").val();
	proformaitem_qty=Number(proformaitem_qty);
	var proformaitem_totalsize=$("#proformaitem_totalsize").val();
	proformaitem_totalsize=Number(proformaitem_totalsize);
	var proformaitem_totalprice=$("#proformaitem_totalprice").val();
	proformaitem_totalprice=Number(proformaitem_totalprice);
	
	var proformaitem_previous_totalprice=$("#proformaitem_previous_totalprice").val();
	proformaitem_previous_totalprice=Number(proformaitem_previous_totalprice);
	
	var proformainvoice_amt=$("#proformainvoice_amt").val();
	proformainvoice_amt=Number(proformainvoice_amt);
	//alert(proformainvoice_amt);
	
	var tottoproduce=0;
	tottoproduce=proformaitem_adjustedsize*proformaitem_qty;
	tottoproduce=tottoproduce.toFixed(2);
	
	var tottoproduceprice=0;
	tottoproduceprice=proformaitem_adjustedsize*proformaitem_qty*proformaitem_price;
	tottoproduceprice=tottoproduceprice.toFixed();
	var newinvoiceamt=0
	newinvoiceamt=Number(newinvoiceamt);
	newinvoiceamt=proformainvoice_amt-proformaitem_previous_totalprice+proformaitem_totalprice;
	
	let proformadetails_line_id=$(this).attr('proformadetails_line_id');
	proformadetails_line_id=Number(proformadetails_line_id);
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
  if(proformainvoice_ref<=0){
		alert("SELECT PROFORMA AGAIN");
	}else if(proformadetails_line_id<=0){
		alert("SELECT ITEM AGAIN DATA NOT FOUND");
	}else if(proformaitem<=0){
		alert("SELECT ITEM");
	}else if(proformaitem_price<=0){
		alert("Price Can't Be 0");
$("#proformaitem_price").css("background-color","yellow");
	}else if(proformaitem_size<=0){
		alert("SIZE Can't Be 0");
$("#proformaitem_size").css("background-color","yellow");
	}else if(proformaitem_qty<=0){
		alert("Qty Can't Be 0");
$("#proformaitem_qty").css("background-color","yellow");
	}else if(proformaitem_adjustedsize<=0){
		alert("ADJUSTED SIZE Can't Be 0");
$("#proformaitem_adjustedsize").css("background-color","yellow");
	
	}else if(proformaitem_adjustedsize>proformaitem_size){
		alert("ADJUSTED SIZE Can't Be Greater Than Requested Size");
$("#proformaitem_adjustedsize").css("background-color","yellow");
	
	}else if(proformaitem_totalsize<=0){
		alert("Total SIZE Can't Be 0");
$("#proformaitem_size").css("background-color","yellow");
	}else if(proformaitem_totalprice<=0){
		alert("Total Price Can't Be 0");
$("#proformaitem_price").css("background-color","yellow");
	}else if(proformaitem_previous_totalprice<=0){
		alert("SELECT ITEM AGAIN ");
$("#proformaitem_price").css("background-color","yellow");
	}
	else{
		//$('#addproforma_details').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_updateproformadetails_item_funct:1,proformainvoice_ref:proformainvoice_ref,proformaitem:proformaitem,proformaitem_price:proformaitem_price,proformaitem_size:proformaitem_size,proformaitem_qty:proformaitem_qty,proformaitem_totalsize:proformaitem_totalsize,proformaitem_totalprice:proformaitem_totalprice,proforma_color:proforma_color,proformaitem_adjustedsize:proformaitem_adjustedsize,tottoproduce:tottoproduce,tottoproduceprice:tottoproduceprice,proformaitem_previous_totalprice:proformaitem_previous_totalprice,proformadetails_line_id:proformadetails_line_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				$("#proformainvoice_amt").val(newinvoiceamt);
				$("#proformainvoice_amt1").val(newinvoiceamt);
				load_proforma_detailslist(proformainvoice_ref);
	}
	})}}
})

//--------------------adjust size--------------------------------------
	
	$("body").delegate("#adjustproforma_details_size","click",function(){
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	if(proforma_upid<=0){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{adjust_proforma_details_funct:1,proforma_upid:proforma_upid},
			success:function(data){
			$("#sales_panel_title").html("<H5>PROFORMA DETAILS ADJUSTMENT</H5>");
				$(".sales_body").html(data);
				load_proforma_detailslist(proforma_upid);
	}
	})}}
})
	
	
	
	
	
	
	$("body").delegate("#save_proforma_details_change","click",function(){
	var details_proforma_id=$(this).attr('details_proforma_id');
	details_proforma_id=Number(details_proforma_id);
	
 var proformaitem_changesize=$("#proformaitem_changesize").val();
 proformaitem_changesize=Number(proformaitem_changesize);
 var proformaitem_tochange=$("#proformaitem_tochange").val();
 proformaitem_tochange=Number(proformaitem_tochange);
	if(details_proforma_id<=0){
		alert("Please Select Proforma Again");
	}else if(proformaitem_changesize<=0){
		alert("Please Add Size To Remove");
	}else if(proformaitem_tochange<=0){
		alert("Please Select ITEM NAME");
	}else{
		
 if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{saveadjustment_onproforma_details_funct:1,details_proforma_id:details_proforma_id,proformaitem_changesize:proformaitem_changesize,proformaitem_tochange:proformaitem_tochange},
			success:function(data){
			alert(data);
				load_proforma_detailslist(details_proforma_id);
	}
	})}}
})


//------------adjust by multiply--------------------

	
	
	$("body").delegate("#save_proforma_details_multiply","click",function(){
	var details_proforma_id=$(this).attr('details_proforma_id');
	details_proforma_id=Number(details_proforma_id);
	
 var proformaitem_changesize=$("#proformaitem_changesize").val();
 proformaitem_changesize=Number(proformaitem_changesize);
 var proformaitem_tochange=$("#proformaitem_tochange").val();
 proformaitem_tochange=Number(proformaitem_tochange);
	if(details_proforma_id<=0){
		alert("Please Select Proforma Again");
	}else if(proformaitem_changesize<=0){
		alert("Please Add Size To Remove");
	}else if(proformaitem_tochange<=0){
		alert("Please Select ITEM NAME");
	}else{
		
 if(confirm("Are You Sure To Multiply? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{saveadjustment_onproforma_details_multiply_funct:1,details_proforma_id:details_proforma_id,proformaitem_changesize:proformaitem_changesize,proformaitem_tochange:proformaitem_tochange},
			success:function(data){
			alert(data);
				load_proforma_detailslist(details_proforma_id);
	}
	})}}
})

//------------single row adjust by multiply--------------------
//--------------edit single row adjustment---------

	$(document).on('click','a[data-role=edit_proformarowdetails_id]',function(){
		var singlerow_details_id=$(this).data('singlerow_details_id');
	singlerow_details_id=Number(singlerow_details_id);
		var singlerow_proforma_id=$(this).data('singlerow_proforma_id');
	singlerow_proforma_id=Number(singlerow_proforma_id);
		//alert(transaction_id);
		if(singlerow_details_id<=0){
	
		alert("ProformaDetailsID Not Found Select Proforma Again");
	}else if(singlerow_proforma_id<=0){
		alert("ProformaID Not Found Select Proforma Again");
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_proformadetail_rowidsmodel:1,singlerow_details_id:singlerow_details_id,singlerow_proforma_id:singlerow_proforma_id},
			success:function(data){
			
				$(".modelproformadetails_row_body").html(data);
				
			}
	})}
	})
	
	//----reload singlerow data---
	
function load_singlerowdata(rowdetails_id,row_proforma_id){
	var singlerow_details_id=rowdetails_id;
	var singlerow_proforma_id=row_proforma_id;
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_proformadetail_rowidsmodel:1,singlerow_details_id:singlerow_details_id,singlerow_proforma_id:singlerow_proforma_id},
			success:function(data){
			
				$(".modelproformadetails_row_body").html(data);
				
			}
	})
}	
	
	
	$("body").delegate("#save_proforma_details_singlerowmultiply","click",function(){
	var proforma_id=$('#proforma_id').val();
	proforma_id=Number(proforma_id);
	
 var details_proforma_id=$("#details_proforma_id").val();
 details_proforma_id=Number(details_proforma_id);
 
 var proformainvoice_sizetoremove=$("#proformainvoice_sizetoremove").val();
 proformainvoice_sizetoremove=Number(proformainvoice_sizetoremove);
	if(isNaN(proforma_id)){
		alert("Please Select Proforma Number Again");
	}else if(proforma_id<=0){
		alert("Please Select Proforma Again");
	}else if(isNaN(details_proforma_id)){
		alert("Please Select Proforma Details Number Again");
	}else if(details_proforma_id<=0){
		alert("Please Select Proforma Again");
	}else if(isNaN(proformainvoice_sizetoremove)){
		alert("Please Add Size To Remove");
	}else if(proformainvoice_sizetoremove<=0){
		alert("Please Add Size To Remove");
	}else{
		
 if(confirm("Are You Sure To MultiplySingleROw? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{saveadjustment_onproforma_details_singlerowmultiply_funct:1,proforma_id:proforma_id,details_proforma_id:details_proforma_id,proformainvoice_sizetoremove:proformainvoice_sizetoremove},
			success:function(data){
			alert(data);
				load_singlerowdata(details_proforma_id,proforma_id);
	}
	})}}
})
//-----------------------reset adjusted proform-----------

	$("body").delegate("#reset_proforma_details_adjusted","click",function(){
	var details_proforma_id=$(this).attr('details_proforma_id');
	details_proforma_id=Number(details_proforma_id);
		if(details_proforma_id<=0){
		alert("Please Select Proforma Again");
	}else{
		
 if(confirm("Are You Sure To Reset? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_resetadjustment_onproforma_details_funct:1,details_proforma_id:details_proforma_id},
			success:function(data){
			alert(data);
				load_proforma_detailslist(details_proforma_id);
	}
	})}}
	
	})
	//-----------------------end adjustment---------------------------
	
	
	$("body").delegate("#submitproforma_detailsforpayment","click",function(){
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{submit_proforma_forpaymentstatus_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_proforma_list(check_sessesion_id);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}}}
})




	
	$("body").delegate("#backingproforma_detailstopending","click",function(){
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Add In Pending? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{backing_proforma_topendingstatus_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_proforma_list(check_sessesion_id);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}}}
})
//--------------------end backing proforma-------------------
$("body").delegate("#submitproforma_details","click",function(){
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{submit_proforma_status_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_proforma_list(check_sessesion_id);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}}}
})
	
//----------------------client search-------------
$("body").delegate("#client_tin","keyup",function(){
 var client_tin=$("#client_tin").val();
 var client_tel=$("#client_tel").val();
 var client_name=$("#client_name").val();
 var client_address=$("#client_address").val();
 var client_email=$("#client_email").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{search_invoiceclienttin_funct:1,client_tin:client_tin},
			success:function(data){
				if(data==1){
			$("#client_tin").val(client_tin);
			$('#client_tin').focus();
			$("#client_tel").val("");
			$("#client_name").val("");
			$("#client_address").val("");
			 $("#client_email").val("");
			$("#client_id").val(0);
			}else{
					
				$("#proformainvoice_client").html(data);
				}
			
	}
 })
})

$("body").delegate("#client_tel","keyup",function(){
 var client_tin=$("#client_tin").val();
 var client_tel=$("#client_tel").val();
 var client_name=$("#client_name").val();
 var client_address=$("#client_address").val();
 var client_email=$("#client_email").val();
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{search_invoiceclienttel_funct:1,client_tel:client_tel},
			success:function(data){
				if(data==1){
			$("#client_tel").val(client_tel);
			$("#client_tel").focus();
			$('#client_tin').val("");
			$("#client_name").val("");
			$("#client_address").val("");
			 $("#client_email").val("");
			$("#client_id").val(0);
				}else{
					
				$("#proformainvoice_client").html(data);
				}
			
	}
 })
})

//-----------------------submitted proforma---------------------------

$("body").delegate("#submited_proforma","click",function(){
			var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_submittedproformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PENDING PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})

function load_submitted_proforma_funct(my_check_sessesion_id){
	var check_sessesion_id=my_check_sessesion_id;
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_submittedproformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PENDING PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})
}
$("body").delegate("#view_submittedproforma_details","click",function(){
	
	var proforma_id=$(this).attr('invoice_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_submittedproformadetails_funct:1,proforma_id:proforma_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>PENDING PROFORMA LIST</H5>");
				$(".sales_body").html(data);
				load_submittedproforma_detailslist(proforma_id);
	}
	})
})

	function load_submittedproforma_detailslist(my_proforma){
		var my_proforma=my_proforma;
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_submittedproformaitemstock_list_funct:1,my_proforma:my_proforma},
			success:function(data){
				$("#get_submittedproforma_item_list").html(data);
	}
	})
	}
	
	
		
$("body").delegate("#approveproforma_details","click",function(){
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Please Select Proforma Again");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{approve_proforma_status_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_submitted_proforma_funct(check_sessesion_id);
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
	}
	})}}}
})
//---------------------approved proforma---------------------------------
$("body").delegate("#approved_proforma","click",function(){
			var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_approvedproformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>APPROVED PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})

$("body").delegate("#view_approvedproforma_details","click",function(){
	
	var proforma_id=$(this).attr('invoice_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_approvedproformadetails_funct:1,proforma_id:proforma_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>APPROVED PROFORMA LIST</H5>");
				$(".sales_body").html(data);
				load_approvedproforma_detailslist(proforma_id);
	}
	})
})

	function load_approvedproforma_detailslist(my_proforma){
		var my_proforma=my_proforma;
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_approvedproformaitemstock_list_funct:1,my_proforma:my_proforma},
			success:function(data){
				$("#get_approvedproforma_item_list").html(data);
	}
	})
	}
	
	

	$("body").delegate("#produce_proformaitem","click",function(){
	
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	var details_item=$(this).attr('details_item');
	details_item=Number(details_item);
	if(details_id<=0){
		alert("Select Item Again");
	}else if(proforma_id<=0){
		alert("Select Item Again");
	}else if(details_item<=0){
		alert("Select Item Again");
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_proformadetails_itemprocessingform_funct:1,details_id:details_id,proforma_id:proforma_id,details_item:details_item},
			success:function(data){
				$("#sales_panel_title").html("<H5>ITEM PROCESSING FORM</H5>");
				$(".sales_body").html(data);
				
	}
	})}
})







	$("body").delegate("#processitem","click",function(){
	
	var proforma_item=$(this).attr('proforma_item');
	proforma_item=Number(proforma_item);
	var proforma_details_id=$(this).attr('proforma_details_id');
	proforma_details_id=Number(proforma_details_id);
	
	var proforma_item_coil_id=$("#proforma_item_coil_id").val();
	proforma_item_coil_id=Number(proforma_item_coil_id);
	
	var proformaitem_toproducesize=$("#proformaitem_toproducesize").val();
	proformaitem_toproducesize=Number(proformaitem_toproducesize);
	
	var proformaitem_qty=$("#proformaitem_qty").val();
	proformaitem_qty=Number(proformaitem_qty);
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_item<=0){
		alert("Select Item Again");
	}else if(proforma_details_id<=0){
		alert("Select Item Again");
	}else if(proforma_item_coil_id<=0){
		alert("Please Select Coil_No Again");
	}else if(proformaitem_toproducesize<=0){
		alert("Size To Be Produced Can't Be 0");
	}else if(proformaitem_qty<=0){
		alert("Quantity To Be Produced Can't Be 0");
	}else{
		if(confirm("Are You Sure To Save? Press Ok Or Cancel!")) {
		$('#processitem').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_coilproduceditem_fromproforma_funct:1,proforma_item:proforma_item,proforma_details_id:proforma_details_id,proforma_item_coil_id:proforma_item_coil_id,proformaitem_toproducesize:proformaitem_toproducesize,proformaitem_qty:proformaitem_qty,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>ITEM PROCESSING FORM</H5>");
				$(".sales_body").html(data);
				
	}
	})}}}
})


//----------------------process item not produced---------------


	$("body").delegate("#processingstat_proformaitem","click",function(){
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	var details_item=$(this).attr('details_item');
	details_item=Number(details_item);
	if(details_id<=0){
		alert("Select Item Again");
	}else if(proforma_id<=0){
		alert("Select Item Again");
	}else if(details_item<=0){
		alert("Select Item Again");
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_changenotproduceditem_status_funct:1,details_id:details_id,proforma_id:proforma_id,details_item:details_item},
			success:function(data){
				alert(data);
				load_approvedproforma_detailslist(proforma_id);
				
	}
	})}
})


//---------------------end process item----------------

	$("body").delegate("#processproforma_details","click",function(){
	
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Select PROFORMA AGAIN");
	}else{
		
 if (confirm("Are You Sure To Proceed? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_processproform_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>ITEM PROCESSING FORM</H5>");
				$(".sales_body").html(data);
				
				load_newproformnumber();
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
				
	}
	})}}}
})
//----------------------------------completed-------------------

$("body").delegate("#completed_proforma","click",function(){
			var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_completedproformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>Completed PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})

$("body").delegate("#view_completedproforma_details","click",function(){
	
	var proforma_id=$(this).attr('invoice_id');
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_completedproformadetails_funct:1,proforma_id:proforma_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>APPROVED PROFORMA LIST</H5>");
				$(".sales_body").html(data);
				load_completedproforma_detailslist(proforma_id,check_sessesion_id);
	}
	})}
})

	function load_completedproforma_detailslist(my_proforma,my_check_sessesion_id){
		var my_proforma=my_proforma;
	
	check_sessesion_id=my_check_sessesion_id;
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_completedproformaitemstock_list_funct:1,my_proforma:my_proforma,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#get_completedproforma_item_list").html(data);
	}
	})
	}
	
	
	
$("body").delegate("#completedstat_proformaitem","click",function(){
	
	var proforma_id=$(this).attr('proforma_id');
	proforma_id=Number(proforma_id);
	
	var details_id=$(this).attr('details_id');
	details_id=Number(details_id);
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
 if (confirm("Are You Sure To Proceed? Press Ok Or Cancel!")) {
	if(proforma_id<=0){
		alert("Select PROFORMA AGAIN");
	}else if(details_id<=0){
		alert("Select PROFORMA AGAIN");
	}else{
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{change_proformitemstat_tocompleted_funct:1,proforma_id:proforma_id,details_id:details_id,check_sessesion_id:check_sessesion_id},
			success:function(data){
		load_completedproforma_detailslist(proforma_id,check_sessesion_id);
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
				
	}
	})}}}
})

	
	
	$("body").delegate("#completeproforma","click",function(){
	
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Select PROFORMA AGAIN");
	}else{
		
 if (confirm("Are You Sure To Proceed? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_completeproform_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
				load_completedproforma_detailslist(proforma_upid,check_sessesion_id);
load_submittedproformnumber();
load_approvedproformnumber();
load_processingproformnumber();
load_completedproformnumber();
				
	}
	})}}}
})
	
//-------------------------get ONGOING PROFORMA---------------
	
	$("body").delegate("#ongoingproforma","click",function(){
		var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_ongoingproformalist_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>ONGOING PROFORMA LIST</H5>");
				$(".sales_body").html(data);
	}
	})}
})
	
	
	
	
$("body").delegate("#view_ongoingproforma_details","click",function(){
	
	var proforma_id=$(this).attr('invoice_id');
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{view_ongoingproformadetails_funct:1,proforma_id:proforma_id},
			success:function(data){
				$("#sales_panel_title").html("<H5>ONGOING PROFORMA DETAILS</H5>");
				$(".sales_body").html(data);
				load_ongoingproforma_detailslist(proforma_id);
	}
	})
})

	function load_ongoingproforma_detailslist(my_proforma){
		var my_proforma=my_proforma;
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_ongoingproformaitemstock_list_funct:1,my_proforma:my_proforma},
			success:function(data){
				$("#get_ongoingproforma_item_list").html(data);
	}
	})
	}
	
	
//-------------COPY PROFORMA--------------------		
$("body").delegate("#copy_proforma","click",function(){
	
	var emptyproforma_id=$("#emptyproforma_id").val();
	emptyproforma_id=Number(emptyproforma_id);
	var orgproforma_id=$(this).attr('orgproforma_id');
	orgproforma_id=Number(orgproforma_id);
	
	var orgproforma_amt=$(this).attr('orgproforma_amt');
	orgproforma_amt=Number(orgproforma_amt);
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(emptyproforma_id<=0){
		$("#emptyproforma_id").css("background-color","yellow");
	}else if(orgproforma_id<=0){
		alert("Please Select Proforma Again");
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_copyproformadetails_funct:1,emptyproforma_id:emptyproforma_id,orgproforma_id:orgproforma_id,orgproforma_amt:orgproforma_amt,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_proforma_list(check_sessesion_id);
	}
	})}}
})
//---------------------PAY PROFORMA INVOICE--------------------	
	
	$("body").delegate("#payproforma","click",function(){
	
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Select PROFORMA AGAIN");
	}else{
		
 if (confirm("Are You Sure To Pay? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_payproform_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
			$("#sales_panel_title").html("<H5>PROCESSING PROFORMA INVOICE PAYMENT FORM</H5>");
				$(".sales_body").html(data);
						load_completedproforma_detailslist(proforma_upid,check_sessesion_id);
	}
	})}}}
})
	
	
	
		
$("body").delegate("#salesproformainvoice_paidamt","keyup",function(){
	var salesproformainvoice_paidamt=$("#salesproformainvoice_paidamt").val();
	var due_proformainvoice_amt=$("#due_proformainvoice_amt").val();
	var salesdue_paymentamt=0;
		salesproformainvoice_paidamt=Number(salesproformainvoice_paidamt);
		due_proformainvoice_amt=Number(due_proformainvoice_amt);
		salesdue_paymentamt=Number(salesdue_paymentamt);

 	salesdue_paymentamt=parseFloat(due_proformainvoice_amt) - parseFloat(salesproformainvoice_paidamt);
	
   $("#salesproformainvoice_remainamt").val(salesdue_paymentamt).css("font-size","xx-large");
	})
	
	
	
	
	
	
	
	
	$("body").delegate("#salesinvoice_date","mouseenter",function(){
		//alert();
		load_salesinvoicedate();
	})
	

	
	$("body").delegate("#pymnt_type","click",function(){
			var pymnt_type=$("#pymnt_type").val();
pymnt_type=Number(pymnt_type);
//alert(pymnt_type);
		if(pymnt_type==1){
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{load_otherpymnt_onsale_funct:1,pymnt_type:pymnt_type},
			success:function(data){
				$("#specific_pymnt").html(data);
			$('#sales_otherpymt').attr("disabled", true);
	}
	})
		}else if(pymnt_type==2){
					$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{load_otherpymnt_onsale_funct:1,pymnt_type:pymnt_type},
			success:function(data){
				$("#specific_pymnt").html(data);
			$('#sales_otherpymt').attr("disabled", false);
	}
	})
		}else if(pymnt_type==3){
					$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{load_otherpymnt_onsale_funct:1,pymnt_type:pymnt_type},
			success:function(data){
				$("#specific_pymnt").html(data);
			$('#sales_otherpymt').attr("disabled", false);
	}
	})
		}else if(pymnt_type==4){
					$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{load_otherpymnt_onsale_funct:1,pymnt_type:pymnt_type},
			success:function(data){
				$("#specific_pymnt").html(data);
			$('#sales_otherpymt').attr("disabled", false);
	}
	})
		}else{
						$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{load_otherpymnt_onsale_funct:1,pymnt_type:pymnt_type},
			success:function(data){
				$("#specific_pymnt").html(data);
				$('#sales_otherpymt').attr("disabled", true);
	}
	})
		}
		})
		
		
	
	$("body").delegate("#save_payinvoice","click",function(){
	
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	var invoice_clientid=$(this).attr('invoice_clientid');
	invoice_clientid=Number(invoice_clientid);
	
	var salesinvoice_date=$("#salesinvoice_date").val();
	var salescontral_id=$("#salescontral_id").val();
	salescontral_id=Number(salescontral_id);
	
	var due_proformainvoice_amt=$("#due_proformainvoice_amt").val();
	due_proformainvoice_amt=Number(due_proformainvoice_amt);
	var salesproformainvoice_paidamt=$("#salesproformainvoice_paidamt").val();
	salesproformainvoice_paidamt=Number(salesproformainvoice_paidamt);
	//---------------------payment1-----------------
	var salespymt=$("#salespymt").val();
	salespymt=Number(salespymt);
	var pymt=$("#salespymt");
var salespymt_paybal=pymt.find(':selected').data('salespymt_paybal');
salespymt_paybal=Number(salespymt_paybal);
var salespymtmethod_gl=pymt.find(':selected').data('salespymtmethod_gl');
salespymtmethod_gl=Number(salespymtmethod_gl);
var salespymtmethod_glsense=pymt.find(':selected').data('salespymtmethod_glsense');
salespymtmethod_glsense=Number(salespymtmethod_glsense);

var pymnt_type=$("#pymnt_type").val();
pymnt_type=Number(pymnt_type);
//----------------------payment2----------------------
	var salesproformainvoice_remainamt=$("#salesproformainvoice_remainamt").val();
	salesproformainvoice_remainamt=Number(salesproformainvoice_remainamt);
	var sales_otherpymt=$("#sales_otherpymt").val();
	sales_otherpymt=Number(sales_otherpymt);
	var otherpymt=$("#sales_otherpymt");
	var salesotherpymt_paybal=otherpymt.find(':selected').data('salesotherpymt_paybal');
salesotherpymt_paybal=Number(salesotherpymt_paybal);
var salesotherpymtmethod_gl=otherpymt.find(':selected').data('salesotherpymtmethod_gl');
salesotherpymtmethod_gl=Number(salesotherpymtmethod_gl);
var salesotherpymtmethod_glsense=otherpymt.find(':selected').data('salesotherpymtmethod_glsense');
salesotherpymtmethod_glsense=Number(salesotherpymtmethod_glsense);
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{

	if(confirm("Are You Sure To Pay Invoice? Press Ok Or Cancel!")){
	if(proforma_upid<=0){
		alert("Select Proforma Again");
	}else if(invoice_clientid<=0){
		alert("Select Proforma Again");
	}else if(salesinvoice_date==""){
		alert("Please Add Invoice Date");
	}else if(salescontral_id<=0){
		alert("Please Select Contral Sales Account");
	}else if(due_proformainvoice_amt<=0){
		alert("Invoice Amount Can't Be o");
	}else if(salesproformainvoice_paidamt<0){
		alert("Paid Amount Can't Be LessThan o");
	}else if(salesproformainvoice_remainamt<0){
		alert("Remain Amount Can't Be LessThan o");
	}else if((salesproformainvoice_paidamt<=0)&&(salesproformainvoice_remainamt<=0)){
		alert("Please Add Paid Amount");
		$("#salesproformainvoice_paidamt").css("background-color","yellow");
	}else if(salesproformainvoice_paidamt>due_proformainvoice_amt){
		alert("Paid Amount Can't Be Greater Than Invoice Amount");
		$("#salesproformainvoice_paidamt").css("background-color","yellow");
	}else if(salesproformainvoice_remainamt>due_proformainvoice_amt){
		alert("Paid Amount Can't Be Greater Than Invoice Amount");
		$("#salesproformainvoice_paidamt").css("background-color","yellow");
	}else if((salesproformainvoice_paidamt+salesproformainvoice_remainamt)>due_proformainvoice_amt){
	alert("Paid Amount Can't Be Greater Than Invoice Amount");
		$("#salesproformainvoice_paidamt").css("background-color","yellow");
	}else if((salesproformainvoice_paidamt>0)&&(salespymt<=0)){
		alert("Please Select Payment Method");
	}else if((salesproformainvoice_paidamt<=0)&&(salespymt>0)){
		alert("Please Add Paid Amount");
	}else if((salesproformainvoice_paidamt>0)&&(pymnt_type==3)){
		alert("Please Use PartialPaid OR Remove PaidAmount");
	}else if((salesproformainvoice_remainamt<=0)&&(sales_otherpymt>0)){
		alert("No Remaining Payment Available Deselect OtherPayment");
	}else if((salesproformainvoice_remainamt>0)&&(sales_otherpymt<=0)){
	alert("Please Select Other Payment");
	}else if(pymnt_type<=0){
		alert("Please Select PaymentType");
	}else{
		
		$('#save_payinvoice').attr("disabled", true);
		
		if((salesproformainvoice_paidamt>0)&&(salespymt>0)&&(salespymtmethod_gl>0)&&(salesproformainvoice_paidamt==due_proformainvoice_amt)&&(salesproformainvoice_remainamt==0)&&(sales_otherpymt==0)&&(pymnt_type==1)){
		//ON FULL PAYMENT OF ONE ACCOUNT CONDITION
		//alert("test full payment");
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_invoicepayment_funct:1,proforma_upid:proforma_upid,invoice_clientid:invoice_clientid,salesinvoice_date:salesinvoice_date,salescontral_id:salescontral_id,due_proformainvoice_amt:due_proformainvoice_amt,salesproformainvoice_paidamt:salesproformainvoice_paidamt,salespymt:salespymt,salespymtmethod_gl:salespymtmethod_gl,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_salesinvoices_list();
				
	}
	})
	}else if((salesproformainvoice_remainamt>0)&&(sales_otherpymt>0)&&(salesotherpymtmethod_gl>0)&&(salesproformainvoice_remainamt==due_proformainvoice_amt)&&(salesproformainvoice_paidamt==0)&&(salespymt==0)&&(pymnt_type==3)){
		//ON DEBT PAYMENT CONDITION
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_invoicepaymentondebt_funct:1,proforma_upid:proforma_upid,invoice_clientid:invoice_clientid,salesinvoice_date:salesinvoice_date,salescontral_id:salescontral_id,due_proformainvoice_amt:due_proformainvoice_amt,salesproformainvoice_remainamt:salesproformainvoice_remainamt,sales_otherpymt:sales_otherpymt,salesotherpymtmethod_gl:salesotherpymtmethod_gl,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_salesinvoices_list();
				load_debt_amt();
				
	}
	})
	
	}else if((salesproformainvoice_remainamt>0)&&(sales_otherpymt>0)&&(salesotherpymtmethod_gl>0)&&(salesproformainvoice_paidamt>0)&&(salespymt>0)&&(salespymtmethod_gl>0)&&(due_proformainvoice_amt==salesproformainvoice_remainamt+salesproformainvoice_paidamt)&&(pymnt_type==2)){
		//ON DEBT PAYMENT CONDITION
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_invoicepaymentpartialdebt_funct:1,proforma_upid:proforma_upid,invoice_clientid:invoice_clientid,salesinvoice_date:salesinvoice_date,salescontral_id:salescontral_id,due_proformainvoice_amt:due_proformainvoice_amt,salesproformainvoice_remainamt:salesproformainvoice_remainamt,sales_otherpymt:sales_otherpymt,salesotherpymtmethod_gl:salesotherpymtmethod_gl,salesproformainvoice_paidamt:salesproformainvoice_paidamt,salespymt:salespymt,salespymtmethod_gl:salespymtmethod_gl,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_salesinvoices_list();
				load_debt_amt();
				
	}
	})
		
		}else if((salesproformainvoice_remainamt>0)&&(sales_otherpymt>0)&&(salesotherpymtmethod_gl>0)&&(salesproformainvoice_paidamt>0)&&(salespymt>0)&&(salespymtmethod_gl>0)&&(due_proformainvoice_amt==salesproformainvoice_remainamt+salesproformainvoice_paidamt)&&(pymnt_type==4)){
		//ON TWO PAYMENT CONDITION
			$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_invoicepaymenttwomethod_funct:1,proforma_upid:proforma_upid,invoice_clientid:invoice_clientid,salesinvoice_date:salesinvoice_date,salescontral_id:salescontral_id,due_proformainvoice_amt:due_proformainvoice_amt,salesproformainvoice_remainamt:salesproformainvoice_remainamt,sales_otherpymt:sales_otherpymt,salesotherpymtmethod_gl:salesotherpymtmethod_gl,salesproformainvoice_paidamt:salesproformainvoice_paidamt,salespymt:salespymt,salespymtmethod_gl:salespymtmethod_gl,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
				load_salesinvoices_list();
				
	}
	})
		
		}else{
			
		}
	
	}}}
})



	$("body").delegate("#deliving_proforma","click",function(){
	
	var proforma_upid=$(this).attr('proforma_upid');
	proforma_upid=Number(proforma_upid);
	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(proforma_upid<=0){
		alert("Select PROFORMA AGAIN");
	}else{
		
 if (confirm("Are You Sure To Deliver Proforma Items? Press Ok Or Cancel!")) {
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_deliverproform_funct:1,proforma_upid:proforma_upid,check_sessesion_id:check_sessesion_id},
			success:function(data){
			$("#sales_panel_title").html("<H5>DELIVERING PROFORMA ITEMS</H5>");
				$(".sales_body").html(data);
						load_completedproforma_detailslist(proforma_upid,check_sessesion_id);
	}
	})}}}
})
//---------------------------payment of invoice debt--------------

$("body").delegate("#pay_salesinvoicedebt","click",function(){
	var invoice_id=$(this).attr('invoice_id');
	invoice_id=Number(invoice_id);
	if(invoice_id<=0){
		alert("Please Select Invoice Again");
	}else{
		
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{debtpayment_form_funct:1,invoice_id:invoice_id},
			success:function(data){
				$("#sales_panel_title").html("<H5> CLIENT DEBT PAYMENT FORM</H5>");
				$(".sales_body").html(data);
				
	}
	})}
})




$("body").delegate("#client_paiddebtamount","keyup",function(){
	
	
	
	var client_invoice_remaindebt=$("#client_invoice_remaindebt").val();
	client_invoice_remaindebt=Number(client_invoice_remaindebt);
	var client_paiddebtamount=$("#client_paiddebtamount").val();
	client_paiddebtamount=Number(client_paiddebtamount);
	var remaindebt=0;
	remaindebt=client_invoice_remaindebt-client_paiddebtamount;
	$("#client_remaindebt").val(remaindebt);
})



$("body").delegate("#save_updateclientdebtpymt","click",function(){
	var myclient_id=$(this).attr('myclient_id');
	var inv_no=$("#inv_no").val();
	var salesinvoicedebtpymt_date=$("#salesinvoicedebtpymt_date").val();
	var client_invoice_remaindebt=$("#client_invoice_remaindebt").val();
	var client_paiddebtamount=$("#client_paiddebtamount").val();
	var inv_otherpymt=$("#inv_otherpymt").val();
	
	var otherpymt=$("#inv_otherpymt");
var inv_otherpymtgl=otherpymt.find(':selected').data('inv_otherpymtgl');
	var debtpymt=$("#debtpymt").val();
	myclient_id=Number(myclient_id);
	inv_no=Number(inv_no);
	client_invoice_remaindebt=Number(client_invoice_remaindebt);
	client_paiddebtamount=Number(client_paiddebtamount);
	inv_otherpymt=Number(inv_otherpymt);
	inv_otherpymtgl=Number(inv_otherpymtgl);
	debtpymt=Number(debtpymt);
	var pymt=$("#debtpymt");
var debtpymtmethod_gl=pymt.find(':selected').data('debtpymt_gl');
debtpymtmethod_gl=Number(debtpymtmethod_gl);
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(confirm("Are You Sure To Pay Debt? Press Ok Or Cancel!")){
	if(inv_no<=0){
		alert("Please Select Invoice Again");
	}else if(myclient_id<=0){
		alert("Please Select Invoice Again");
	}else if(client_paiddebtamount<=0){
		$("#client_paiddebtamount").css("background-color","yellow");
	}else if(client_paiddebtamount>client_invoice_remaindebt){
		alert("Paid Amount Can't Be Greater Than Debt");
		$("#client_paiddebtamount").css("background-color","yellow");
	}else if(inv_otherpymt<=0){
		alert("Please Select Invoice Again");
	}else if(inv_otherpymtgl<=0){
		alert("Please Select Invoice Again");
	}else if(debtpymt<=0){
		alert("Please Select Payment Method Again");
	}else if(debtpymtmethod_gl<=0){
		alert("Please Select Payment Method Again");
	}else if(salesinvoicedebtpymt_date==""){
		alert("Please Select Payment Date");
	}else{
		$('#save_updateclientdebtpymt').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_debtpayment_funct:1,invoice_id:inv_no,myclient_id:myclient_id,client_paiddebtamount:client_paiddebtamount,inv_otherpymt:inv_otherpymt,inv_otherpymtgl:inv_otherpymtgl,debtpymt:debtpymt,debtpymtmethod_gl:debtpymtmethod_gl,salesinvoicedebtpymt_date:salesinvoicedebtpymt_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
			alert(data);
				load_clientlist_funct();
				load_debt_amt();
	}
	})}}}
})



	//------------------get sale details to return------------------
	
	$(document).on('click','a[data-role=viewclient_sales_details]',function(){
		var invoice_id=$(this).data('invoice_id');
	invoice_id=Number(invoice_id);

		if(isNaN(invoice_id)){
		alert("Please View Sale Invoice Again!");
	}else if(invoice_id<=0){
		alert("Please View Sale Invoice Again!");
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_salesinvoice_detailsmodel:1,invoice_id:invoice_id},
			success:function(data){
			
				$(".modelsalesdetail_body").html(data);
				
			}
	})}
	})
	
	function load_viewclient_sales_details_after_return(myclientinvoice){
			var invoice_id=myclientinvoice;
	invoice_id=Number(invoice_id);
			$.ajax({
			url:"functions.php",
			method:"POST",
			data:{get_salesinvoice_detailsmodel:1,invoice_id:invoice_id},
			success:function(data){
			
				$(".modelsalesdetail_body").html(data);
				
			}
	})
	}
	
	
$("body").delegate("#validate_returned_item_qty","click",function(){
	   var returned_item_qty = $(this).closest('tr').find('#returned_item_qty').val();
	 returned_item_qty=Number(returned_item_qty);
	 
	    var returned_sale_detailid = $(this).closest('tr').find('#returned_sale_detailid').val();
	 returned_sale_detailid=Number(returned_sale_detailid);
	 
	    var returned_saleinvoiceid = $(this).closest('tr').find('#returned_saleinvoiceid').val();
	 returned_saleinvoiceid=Number(returned_saleinvoiceid);
	 
	    var returned_saleinvoice_transactionid = $(this).closest('tr').find('#returned_saleinvoice_transactionid').val();
	 returned_saleinvoice_transactionid=Number(returned_saleinvoice_transactionid);
	 
	    var returned_proformaid= $(this).closest('tr').find('#returned_proformaid').val();
	 returned_proformaid=Number(returned_proformaid);
var availableqty =$(this).closest('tr').find('#availableqty').val();
 availableqty=Number(availableqty);
 
 
 var requestedsize=$(this).closest('tr').find('#requestedsize').val();
 requestedsize=Number(requestedsize);
 var uprice=$(this).closest('tr').find('#uprice').val();
uprice=Number(uprice);
if(isNaN(returned_item_qty)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Only Number Is Allowed</b></div>");
	
	}else if(returned_item_qty<=0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-danger'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Qunatity  Can't be Zero OR Less!</b></div>");
	
	}else if(isNaN(returned_sale_detailid)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Detailed Not Found</b></div>");
	
	}else if(returned_sale_detailid<=0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Detailed Not Found</b></div>");
	}else if(isNaN(returned_saleinvoiceid)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>SalesInvoice Detailed Not Found</b></div>");
	
	}else if(returned_saleinvoiceid<=0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>SalesInvoice Detailed Not Found</b></div>");
	}else  if(isNaN(returned_saleinvoice_transactionid)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Transaction Detailed Not Found</b></div>");
	
	}else if(returned_saleinvoice_transactionid<=0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Transaction Detailed Not Found</b></div>");
	}else  if(isNaN(returned_proformaid)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Proforma Detailed Not Found</b></div>");
	
	}else if(returned_proformaid<=0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Proforma Detailed Not Found</b></div>");
	}else if(returned_item_qty>availableqty){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Returned Quantity Is Greater Than Sold Quantity!</b></div>");
	}else  if(isNaN(requestedsize)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Requested Size Not Found</b></div>");
	
	}else if(requestedsize<0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Requested Size Not Found</b></div>");
	}else  if(isNaN(uprice)){
		
		$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Price Not Found</b></div>");
	
	}else if(uprice<=0){
	
$(".returnmodelupdate_error").html("<div class='alert alert-warning'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><b>Price Not Found</b></div>");
	}else{
		if(confirm("Are You Sure To Return? Press Ok Or Cancel!")){
			
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_savereturned_qty:1,returned_item_qty:returned_item_qty,returned_sale_detailid:returned_sale_detailid,returned_saleinvoiceid:returned_saleinvoiceid,returned_saleinvoice_transactionid:returned_saleinvoice_transactionid,returned_proformaid:returned_proformaid,uprice:uprice,requestedsize:requestedsize},
			success:function(data){
						$(".returnmodelupdate_error").html(data);
			load_viewclient_sales_details_after_return(returned_saleinvoiceid);
			
			}
		})}}



})


//-----------save sales invoice returned amount---
$("body").delegate("#save_salereturnamt","click",function(){
	
	var myreturnclient_id=$(this).attr('myreturnclient_id');
	myreturnclient_id=Number(myreturnclient_id);
var  salereturnacc=$("#salereturnacc").val();
var client_invoiceid=$("#client_invoiceid").val();
var salesacc=$("#salesacc").val();
var  returnedamt=$("#returnedamt").val();
var client_debtbal=$("#client_debtbal").val();
client_debtbal=Number(client_debtbal);
var return_date=$("#return_date").val();
var returnpymt=$("#returnpymt").val();
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	//alert(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else if(myreturnclient_id<=0){
	 alert("Please Select Client Again");
}else if(salereturnacc<=0){
		$("#salereturnacc").css("background-color","yellow");
	}else if(salesacc<=0){
		$("#salesacc").css("background-color","yellow");
	}else if(returnedamt<=0){
	 $("#returnedamt").css("background-color","yellow");
 }else if(returnpymt<=0){
	 $("#returnpymt").css("background-color","yellow");
 }else if(((client_debtbal<=0)&&(returnpymt==7))||((client_debtbal<returnedamt)&&(returnpymt==7))){
	 alert("Please Select Right Payment Account");
 }else if((return_date.trim().length)<=0){
 alert("Please Select ReturnDate");
 }else{
if(confirm("Are You Sure To SaveReturn? Press Ok Or Cancel!")) {
			//$('#save_client_prepaid').attr("disabled", true);
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_clientreturn_funct:1,client_invoiceid:client_invoiceid,myreturnclient_id:myreturnclient_id,salesacc:salesacc,salereturnacc:salereturnacc,returnedamt:returnedamt,returnpymt:returnpymt,return_date:return_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
				alert(data);
					load_viewclient_sales_details_after_return(client_invoiceid);
}})}	
		}
		})






//-------use prepaid to pay debt-------------
$("body").delegate("#client_prepaidpaiddebtamount","keyup",function(){
	
	
	
	var client_prepaidinvoice_remaindebt=$("#client_prepaidinvoice_remaindebt").val();
	client_prepaidinvoice_remaindebt=Number(client_prepaidinvoice_remaindebt);
	var client_prepaidpaiddebtamount=$("#client_prepaidpaiddebtamount").val();
	client_prepaidpaiddebtamount=Number(client_prepaidpaiddebtamount);
	var remaindebt=0;
	remaindebt=client_prepaidinvoice_remaindebt-client_prepaidpaiddebtamount;
	$("#client_prepaidremaindebt").val(remaindebt);
})



$("body").delegate("#save_updateclientdebtpymt_prepaid","click",function(){
	var myclient_id=$(this).attr('myprepaidclient_id');
	var inv_no=$("#prepaidinv_no").val();
	var salesinvoicedebtpymt_date=$("#salesinvoicedebtpymt_prepaiddate").val();
	var client_invoice_remaindebt=$("#client_prepaidinvoice_remaindebt").val();
	var client_paiddebtamount=$("#client_prepaidpaiddebtamount").val();
	var client_prepaidbalanceamount=$("#client_prepaidbalanceamount").val();
	var prepaid_contralacc=$("#prepaid_contralacc").val();
	
	
	var inv_otherpymt=$("#prepaidinv_otherpymt").val();
	
	myclient_id=Number(myclient_id);
	inv_no=Number(inv_no);
	client_invoice_remaindebt=Number(client_invoice_remaindebt);
	client_paiddebtamount=Number(client_paiddebtamount);
	inv_otherpymt=Number(inv_otherpymt);
prepaid_contralacc=Number(prepaid_contralacc);
client_prepaidbalanceamount=Number(client_prepaidbalanceamount);

var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(inv_no<=0){
		alert("Please Select Invoice Again");
	}else if(myclient_id<=0){
		alert("Please Select Invoice Again");
	}else if(client_prepaidbalanceamount<=0){
		alert("Prepaid Amount Is Zero");
	}else if(client_paiddebtamount<=0){
		$("#client_prepaidpaiddebtamount").css("background-color","yellow");
	}else if(client_paiddebtamount>client_invoice_remaindebt){
		alert("Paid Amount Can't Be Greater Than Debt");
		$("#client_prepaidpaiddebtamount").css("background-color","yellow");
	}else if(client_paiddebtamount>client_prepaidbalanceamount){
		alert("Paid Amount Can't Be Greater Than PrepaidAmount Balance");
		$("#client_prepaidpaiddebtamount").css("background-color","yellow");
	}else if(inv_otherpymt<=0){
		alert("Please Select Invoice Again");
	}else if(prepaid_contralacc<=0){
		alert("Please Select Payment Method Again");
	}else if(salesinvoicedebtpymt_date==""){
		alert("Please Select Payment Date");
	}else if(salesinvoicedebtpymt_date.trim().length<=0){
		alert("Please Select Payment Date");
	}else{
	if(confirm("Are You Sure To Pay Debt Using Prepaid? Press Ok Or Cancel!")){
		$('#save_updateclientdebtpymt_prepaid').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_debtpayment_byprepaid_funct:1,invoice_id:inv_no,myclient_id:myclient_id,client_paiddebtamount:client_paiddebtamount,inv_otherpymt:inv_otherpymt,prepaid_contralacc:prepaid_contralacc,salesinvoicedebtpymt_date:salesinvoicedebtpymt_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
			alert(data);
				load_clientlist_funct();
				load_debt_amt();
	}
	})}}}
})

//----------pay using VAT---------
$("body").delegate("#client_vatpaiddebtamount","keyup",function(){
	
	
	
	var client_vatinvoice_remaindebt=$("#client_vatinvoice_remaindebt").val();
	client_vatinvoice_remaindebt=Number(client_vatinvoice_remaindebt);
	var client_vatpaiddebtamount=$("#client_vatpaiddebtamount").val();
	client_vatpaiddebtamount=Number(client_vatpaiddebtamount);
	var remaindebt=0;
	remaindebt=client_vatinvoice_remaindebt-client_vatpaiddebtamount;
	$("#client_vatremaindebt").val(remaindebt);
})



$("body").delegate("#save_updateclientdebtpymt_vat","click",function(){
	var myclient_id=$(this).attr('myvatclient_id');
	var inv_no=$("#vatinv_no").val();
	var salesinvoicedebtpymt_date=$("#salesinvoicedebtpymt_vatdate").val();
	var client_invoice_remaindebt=$("#client_vatinvoice_remaindebt").val();
	var client_paiddebtamount=$("#client_vatpaiddebtamount").val();
	var vat_contralacc=$("#vat_contralacc").val();
	
	var inv_otherpymt=$("#prepaidinv_otherpymt").val();
	
	myclient_id=Number(myclient_id);
	inv_no=Number(inv_no);
	client_invoice_remaindebt=Number(client_invoice_remaindebt);
	client_paiddebtamount=Number(client_paiddebtamount);
	inv_otherpymt=Number(inv_otherpymt);
vat_contralacc=Number(vat_contralacc);

var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(inv_no<=0){
		alert("Please Select Invoice Again");
	}else if(myclient_id<=0){
		alert("Please Select Invoice Again");
	}else if(client_paiddebtamount<=0){
		$("#client_vatpaiddebtamount").css("background-color","yellow");
	}else if(client_paiddebtamount>client_invoice_remaindebt){
		alert("Paid Amount Can't Be Greater Than Debt".client_invoice_remaindebt);
		$("#client_VATpaiddebtamount").css("background-color","yellow");
	}else if(inv_otherpymt<=0){
		alert("Please Select Invoice Again");
	}else if(vat_contralacc<=0){
		alert("Please Select Payment Method Again");
	}else if(salesinvoicedebtpymt_date==""){
		alert("Please Select Payment Date");
	}else if(salesinvoicedebtpymt_date.trim().length<=0){
		alert("Please Select Payment Date");
	}else{
	if(confirm("Are You Sure To Pay Debt Using VAT? Press Ok Or Cancel!")){
		$('#save_updateclientdebtpymt_vat').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_debtpayment_byvat_funct:1,invoice_id:inv_no,myclient_id:myclient_id,client_paiddebtamount:client_paiddebtamount,inv_otherpymt:inv_otherpymt,
			vat_contralacc:vat_contralacc,salesinvoicedebtpymt_date:salesinvoicedebtpymt_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
			alert(data);
				load_clientlist_funct();
				load_debt_amt();
	}
	})}}}
})


//-------------------record sales discount-------------------------


$("body").delegate("#save_updateclientdiscountpymt","click",function(){
	var myclient_id=$(this).attr('myclient_id');
	var inv_no=$("#inv_no").val();
	var salesinvoicedebtpymt_date=$("#salesinvoicedebtpymt_date").val();
	var client_invoice_remaindebt=$("#client_invoice_remaindebt").val();
	var client_discountamount=$("#client_discountamount").val();
	var inv_otherpymt=$("#inv_otherpymt").val();
	
	var otherpymt=$("#inv_otherpymt");
var inv_otherpymtgl=otherpymt.find(':selected').data('inv_otherpymtgl');
	inv_otherpymt=Number(inv_otherpymt);
	inv_otherpymtgl=Number(inv_otherpymtgl);
	
	myclient_id=Number(myclient_id);
	inv_no=Number(inv_no);
	client_invoice_remaindebt=Number(client_invoice_remaindebt);
	client_discountamount=Number(client_discountamount);
	
	var salesdiscount_id=$("#salesdiscount_id").val();
	salesdiscount_id=Number(salesdiscount_id);
	var discpymt=$("#salesdiscount_id");
var discounttype=discpymt.find(':selected').data('discounttype');
discounttype=Number(discounttype);
var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
	if(confirm("Are You Sure To Save Discount? Press Ok Or Cancel!")){
	if(inv_no<=0){
		alert("Please Select Invoice Again");
	}else if(myclient_id<=0){
		alert("Please Select Invoice Again");
	}else if(client_discountamount<=0){
		$("#client_discountamount").css("background-color","yellow");
	}else if(client_discountamount>client_invoice_remaindebt){
		alert("Discount Amount Can't Be Greater Than Debt");
		$("#client_discountamount").css("background-color","yellow");
	}else if(inv_otherpymt<=0){
		alert("Please Select Invoice Again");
	}else if(inv_otherpymtgl<=0){
		alert("Please Select Invoice Again");
	}else if(salesdiscount_id<=0){
		alert("Please Select Discount Account Again");
	}else if(discounttype<=0){
		alert("Please Select Discount Account Again");
	}else if(salesinvoicedebtpymt_date==""){
		alert("Please Select Payment Date");
	}else{
		$('#save_updateclientdiscountpymt').attr("disabled", true);
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_disountpayment_funct:1,invoice_id:inv_no,myclient_id:myclient_id,client_discountamount:client_discountamount,inv_otherpymt:inv_otherpymt,inv_otherpymtgl:inv_otherpymtgl,salesdiscount_id:salesdiscount_id,discounttype:discounttype,salesinvoicedebtpymt_date:salesinvoicedebtpymt_date,check_sessesion_id:check_sessesion_id},
			success:function(data){
			alert(data);
				load_clientlist_funct();
				load_debt_amt();
	}
	})}}}
})





$("body").delegate("#reports_setting","click",function(){
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_report_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".main_body").html(data);
				$("#report_panel_title").html("<H5>REPORTS</H5>");
			}
	})}
})


$("body").delegate("#coil_reports","click",function(){

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coilsreport_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>REPORTS</H5>");
				$(".report_body").html(data);
			}
	})
})


$("body").delegate("#get_coilreport_btn","click",function(){

var coil_report_type=$("#coil_report_type").val();
coil_report_type=Number(coil_report_type);
var report_invoice=$("#report_invoice").val();

var coil_report_ittype=$("#coil_report_ittype").val();
var coil_report_grouptype=$("#coil_report_grouptype").val();
var closed_dated=$(this).attr('closed_dated');
var datefrom=$("#coil_crcproduct_datefrom").val();
var dateto=$("#crc_coilproduct_dateto").val();

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_choosenecoilsreport_funct:1,coil_report_type:coil_report_type,report_invoice:report_invoice,coil_report_ittype:coil_report_ittype,coil_report_grouptype:coil_report_grouptype,closed_dated:closed_dated,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$("#report_panel_title").html("<H5>REPORTS</H5>");
				$(".get_reportbody").html(data);
			}
	})
})

$("body").delegate("#open_coilstock","click",function(){
 var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
			if(confirm("Are You Sure To Open Day? Press Ok Or Cancel!")){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_opencoilstock_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				load_coillist(check_sessesion_id);
			}
	})}}
})




$("body").delegate("#close_coilstock","click",function(){
 var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
			if(confirm("Are You Sure To Close Day? Press Ok Or Cancel!")){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_closecoilstock_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				load_coillist(check_sessesion_id);
			}
	})}}
})



	$("body").delegate("#close_coilstock_lastday","click",function(){
		var coilstock_lastday_day=$(this).attr('coilstock_lastday_day');
 var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		
			if(confirm("Are You Sure To Close Day? Press Ok Or Cancel!")){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_closecoilstock_lastday_funct:1,check_sessesion_id:check_sessesion_id,coilstock_lastday_day:coilstock_lastday_day},
			success:function(data){
				load_coillist(check_sessesion_id);
			}
	})}}
})
	
//-----------------coil/crc production reports-------------------
				$("body").delegate("#itemproduced_reports","click",function(){

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coil_crc_product_report_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>CRC/COIL PRODUCTION REPORTS</H5>");
				$(".report_body").html(data);
			}
	})
})




$("body").delegate("#get_coil_crc_productionreport_btn","click",function(){

var coil_crc_production_report_type=$("#coil_crc_production_report_type").val();
coil_crc_production_report_type=Number(coil_crc_production_report_type);

var datefrom=$("#coil_crcproduct_datefrom").val();
var dateto=$("#crc_coilproduct_dateto").val();
if(datefrom==""){
	alert("Please Select Starting Date");
}else if(dateto==""){
	alert("Please Select End Date");
}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_productionreport_funct:1,coil_crc_production_report_type:coil_crc_production_report_type,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$("#report_panel_title").html("<H5>CRC/COIL PRODUCTION REPORTS</H5>");
				$(".get_coil_crc_reportbody").html(data);
			}
})}
})

//-------------------EXPORT TO EXCEL ----------
	
		$("body").delegate("#get_exp_excel_btn","click",function(){
				downloadExcelTable('tabletoexport', 'employeeData');
				
				/* $("#tabletoexport").table2excel({
					
                    filename: "employeeData.xls"
					});
					*/
					
			});
function downloadExcelTable(tableID, filename = '') {
				const linkToDownloadFile = document.
										createElement("a");
				const fileType = 'application/vnd.ms-excel';
				const selectedTable = document.
									getElementById(tableID);
									
				const selectedTableHTML = selectedTable.outerHTML.
										replace(/ /g, '%20');

				filename = filename ? filename + '.xls' : 
						'excel_data.xls';
				document.body.appendChild(linkToDownloadFile);

				if (navigator.msSaveOrOpenBlob) {
					const myBlob = new Blob(['\ufeff',
								selectedTableHTML], {
						type: fileType
					});
					navigator.msSaveOrOpenBlob(myBlob, filename);
				} else {
					// Create a link to download
					// the excel the file
					linkToDownloadFile.href = 'data:' + fileType + 
											', ' + selectedTableHTML;

					// Setting the name of
					// the downloaded file
					linkToDownloadFile.download = filename;

					// Clicking the download link 
					// on click to the button
					linkToDownloadFile.click();
				}
			}
//-----------------crc_reports-------------------

$("body").delegate("#crc_reports","click",function(){

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crc_report_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>CRC REPORTS</H5>");
				$(".report_body").html(data);
			}
	})
})




$("body").delegate("#get_crcreport_btn","click",function(){

var crc_report_type=$("#crc_report_type").val();
crc_report_type=Number(crc_report_type);
var crc_coil_status=$("#crc_coil_status").val();
crc_coil_status=Number(crc_coil_status);

var crc_packageinvoice=$("#crc_packageinvoice").val();

var crc_daterange=$("#crc_daterange").val();
var crc_daterange1=$("#crc_daterange1").val();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_choosenecrcreport_funct:1,crc_report_type:crc_report_type,crc_packageinvoice:crc_packageinvoice,crc_daterange:crc_daterange,crc_daterange1:crc_daterange1,crc_coil_status:crc_coil_status},
			success:function(data){
				$("#report_panel_title").html("<H5>CRC REPORTS</H5>");
				$(".get_crcreportbody").html(data);
			}
	})
})

//-----------------sales_reports-------------------

$("body").delegate("#sale_reports","click",function(){

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_sales_report_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>SALES REPORTS</H5>");
			$(".report_body").html(data);
			}
	})
})



$("body").delegate("#get_salesreport_btn","click",function(){

var sales_report_period=$("#sales_report_period").val();
sales_report_period=Number(sales_report_period);
var sales_report_type=$("#sales_report_type").val();
sales_report_type=Number(sales_report_type);
var sale_datefrom=$("#coil_crcproduct_datefrom").val();
var sale_dateto=$("#crc_coilproduct_dateto").val();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_choosenesalereport_funct:1,sales_report_type:sales_report_type,sales_report_period:sales_report_period,sale_datefrom:sale_datefrom,sale_dateto:sale_dateto},
			success:function(data){
				
				$(".get_salesreportbody").html(data);
			}
	})
})
//---------------------------financalstatement------------
	
	
	
	$("body").delegate("#fin_statements","click",function(){
	//var tb_details_trans=$(this).attr('tb_details_trans');	
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_fin_statements_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>FINANCIAL STATEMENTS</H5>");
			$(".cashflow_body").html(data);
	}
	})}
})


//--------------close trialbalance period-----------

	$("body").delegate("#get_closetb_choose","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_unclosed_tbperiod_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>TRIAL PERIOD CLOSING</H5>");
			$(".statement_choose_body").html(data);
	}
	})
})


function load_unclosed_tb(){
	$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_unclosed_tbperiod_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>TRIAL PERIOD CLOSING</H5>");
			$(".statement_choose_body").html(data);
	}
	})
}


//-------------------reconciliation------

	$("body").delegate("#get_reconciliation_choose","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_reconciliation_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>RECONCILIATION</H5>");
			$(".statement_choose_body").html(data);
	}
	})
})


	$("body").delegate("#get_quickreconciliation","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_quickreconciliation_result_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>QUICK RECONCILIATION</H5>");
			$(".reconciliation_result_choose_body").html(data);
	}
	})
})



$("body").delegate("#view_reconciliationaccount_id","click",function(){

var view_reconciliationaccount_id=$(this).attr('view_reconciliationaccount_id');
view_reconciliationaccount_id=Number(view_reconciliationaccount_id);
var my_tb_id=$(this).attr('my_tb_id');
my_tb_id=Number(my_tb_id);

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_view_reconciliationacc_funct:1,view_reconciliationaccount_id:view_reconciliationaccount_id,my_tb_id:my_tb_id},
			success:function(data){
				$(".reconciliation_result_choose_body").html(data);
			}
	})
})

//------------generate new business period


	$("body").delegate("#get_generate_newbusinessperiod","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{save_newbusinessperiod_funct:1},
			success:function(data){
				//alert(data);
				load_unclosed_tb();
	}
	})
})
//-----------end generate business period-----

	$("body").delegate("#view_this_periodtb","click",function(){
		

var tb_periodname=$("#tb_periodname").val();
tb_periodname=Number(tb_periodname);
if(isNaN(tb_periodname)){
	$("#tb_periodname").css("background-color","yellow");
}else if(tb_periodname<=0){
	$("#tb_periodname").css("background-color","yellow");
}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_tbtoclose_result_funct:1,tb_periodname:tb_periodname},
			success:function(data){
				
			$(".tb_closeresult_body").html(data);
	}
})}
})

//------close_monthly_tb----

$("body").delegate("#close_monthly_tb_btn","click",function(){
		

var period_toclose_id=$(this).attr('period_toclose_id');
period_toclose_id=Number(period_toclose_id);
if(isNaN(period_toclose_id)){
	alert("Period Not Found");
}else if(period_toclose_id<=0){
	alert("Period Not Found");
}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_saveclosed_monthly_tb_funct:1,period_toclose_id:period_toclose_id},
			success:function(data){
				
			alert(data);
			load_unclosed_tb();
	}
})}
})

//------close_quarterly_tb----

$("body").delegate("#close_quarterly_tb_btn","click",function(){
		

var period_toclose_id=$(this).attr('period_toclose_id');
period_toclose_id=Number(period_toclose_id);
if(isNaN(period_toclose_id)){
	alert("Period Not Found");
}else if(period_toclose_id<=0){
	alert("Period Not Found");
}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_saveclosed_quarterly_tb_funct:1,period_toclose_id:period_toclose_id},
			success:function(data){
				
			alert(data);
			load_unclosed_tb();
	}
})}
})



//------close_biyearly_tb----

$("body").delegate("#close_biyearly_tb_btn","click",function(){
		

var period_toclose_id=$(this).attr('period_toclose_id');
period_toclose_id=Number(period_toclose_id);
if(isNaN(period_toclose_id)){
	alert("Period Not Found");
}else if(period_toclose_id<=0){
	alert("Period Not Found");
}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_saveclosed_biyearly_tb_funct:1,period_toclose_id:period_toclose_id},
			success:function(data){
				
			alert(data);
			load_unclosed_tb();
	}
})}
})
//---------close_yearly_tb---------


$("body").delegate("#close_year_tb_btn","click",function(){
		

var period_toclose_id=$(this).attr('period_toclose_id');
period_toclose_id=Number(period_toclose_id);
if(isNaN(period_toclose_id)){
	alert("Period Not Found");
}else if(period_toclose_id<=0){
	alert("Period Not Found");
}else{
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_saveclosed_yearly_tb_funct:1,period_toclose_id:period_toclose_id},
			success:function(data){
				
			alert(data);
			load_unclosed_tb();
	}
})}
})



//------------------GET TRIALBALANCE
	$("body").delegate("#get_trialbalnce_choose","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_fin_statements_tb_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>TRIAL BALANCE</H5>");
			$(".statement_choose_body").html(data);
	}
	})
})



$("body").delegate("#fstatement_year","click",function(){
		
	var fstatement_year=$("#fstatement_year").val();
	if((fstatement_year.trim().length)<=0){
		
		
	}else{
		
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_closedperiodtype_funct:1,fstatement_year:fstatement_year},
			success:function(data){
				
			$(".finstatement_periodtype_select").html(data);
	}
})
	}
	
	})



$("body").delegate("#fstatement_periodtype","click",function(){
		
	var fstatement_periodtype=$("#fstatement_periodtype").val();
	var fstatement_year=$("#fstatement_year").val();
	
	if((fstatement_year.trim().length)<=0){
		
		
	}else if((fstatement_periodtype.trim().length)<=0){
		
		
	}else{

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_closedperiodname_funct:1,fstatement_year:fstatement_year,fstatement_periodtype:fstatement_periodtype},
			success:function(data){
				
			$(".finstatement_periodname_select").html(data);
	}
})
	}
	
	})
	
	

	$("body").delegate("#view_tb_by_period","click",function(){
	
var tb_year=$("#fstatement_year").val();

var tb_periodtype=$("#fstatement_periodtype").val();
var tb_periodname=$("#tb_periodname").val();
tb_periodname=Number(tb_periodname);
if((tb_year.trim().length)<=0){
	$("#tb_year").css("background-color","yellow");
}else if((tb_periodtype.trim().length)<=0){
	$("#tb_periodtype").css("background-color","yellow");
}else if(isNaN(tb_periodname)){
	$("#tb_periodname").css("background-color","yellow");
}else if(tb_periodname<=0){
	$("#tb_periodname").css("background-color","yellow");
}else{
	
$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_tbresult_funct:1,tb_year:tb_year,tb_periodtype:tb_periodtype,tb_periodname:tb_periodname},
			success:function(data){
				
			$(".tb_result_body").html(data);
	}
})}
})

//----------GET INCOMESTAMENT------
$("body").delegate("#get_incomestatement_choose","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_fin_statements_incomestatement_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>INCOME STATEMENT</H5>");
			$(".statement_choose_body").html(data);
	}
	})
})
//----------GET BALANCE SHEET------
$("body").delegate("#get_balancesheet_choose","click",function(){

$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_fin_statements_bs_funct:1},
			success:function(data){
				$("#cashflow_panel_title").html("<H5>BALANCE SHEET</H5>");
			$(".statement_choose_body").html(data);
	}
	})
})


//---------------SUMMARY REPORT------------------

$("body").delegate("#summaryreports_setting","click",function(){
	var check_sessesion_id=$(this).attr('check_sessesion_id');
	check_sessesion_id=Number(check_sessesion_id);
	if(check_sessesion_id<=0){
		alert("Your Session Has Been Expired Login Again.");
		window.location.href="dashboard.php";
	}else{
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_summaryreport_funct:1,check_sessesion_id:check_sessesion_id},
			success:function(data){
				$(".main_body").html(data);
				$("#report_panel_title").html("<H5>SUMMARY_REPORTS</H5>");
			}
	})}
})


$("body").delegate("#coil_summary_reports","click",function(){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_coil_summaryreport_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>COIL_SUMMARY_REPORT</H5>");
				$(".summary_report_body").html(data);
			}
	})
})


$("body").delegate("#get_coil_summaryreport_btn","click",function(){
	var datefrom=$("#coil_crcproduct_datefrom").val();
var dateto=$("#crc_coilproduct_dateto").val();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewcoil_summaryreport_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$(".get_coil_summary_reportbody").html(data);
			}
	})
})

$("body").delegate("#crc_summary_reports","click",function(){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_crc_summaryreport_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>CRC_SUMMARY_REPORT</H5>");
				$(".summary_report_body").html(data);
			}
	})
})



$("body").delegate("#get_crc_summaryreport_btn","click",function(){
	var datefrom=$("#crc_crcproduct_datefrom").val();
var dateto=$("#crc_crcproduct_dateto").val();

		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewcrc_summaryreport_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$(".get_crc_summary_reportbody").html(data);
			}
	})
})



$("body").delegate("#sales_summary_reports","click",function(){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_sales_summaryreport_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>SALES_SUMMARY_REPORT</H5>");
				$(".summary_report_body").html(data);
			}
	})
})

$("body").delegate("#get_sale_summaryreport_btn","click",function(){
	var datefrom=$("#coil_crcproduct_datefrom").val();
var dateto=$("#crc_coilproduct_dateto").val();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewsales_summaryreport_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$(".get_sales_summary_reportbody").html(data);
			}
	})
})




$("body").delegate("#expense_summary_reports","click",function(){
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_expense_summaryreport_funct:1},
			success:function(data){
				$("#report_panel_title").html("<H5>EXPENSES_SUMMARY_REPORT</H5>");
				$(".summary_report_body").html(data);
			}
	})
})

$("body").delegate("#get_expense_summaryreport_btn","click",function(){
	var datefrom=$("#coil_crcproduct_datefrom").val();
var dateto=$("#crc_coilproduct_dateto").val();
		$.ajax({
			url:"functions.php",
			method:"POST",
			enctype:"multipart/form-data",
			data:{get_viewexpense_summaryreport_funct:1,datefrom:datefrom,dateto:dateto},
			success:function(data){
				$(".get_expense_summary_reportbody").html(data);
			}
	})
})















})