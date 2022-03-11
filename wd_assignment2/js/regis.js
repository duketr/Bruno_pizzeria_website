// JavaScript Document
function validate() 
{
	var username = document.getElementById("username").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
	var email = document.getElementById("email").value;
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var errMsg = "";
	var result = true;
	var pattern = /^[a-zA-Z ]+$/;
	if (firstname == "")
	{
		errMsg += "First name cannot be empty.\n";	
	}
	if (lastname == "")
	{
		errMsg += "Last name cannot be empty.\n";	
	}
	if (password1 == "") 
	{
		errMsg += "Password cannot be empty.\n";
	}
	if (password2 == "") 
	{
		errMsg += "Retype password cannot be empty.\n";
	}
	if (username == "") 
	{
		errMsg += "Username cannot be empty.\n";
	}
	if (email == "")
	{
		errMsg += "Email address cannot be empty.\n";	
	}
	if ((male == "")&&(female == "")) 
	{
		errMsg += "A gender must be selected.\n";
	}
	if (password1.length < 8)
	{
		errMsg += "Password must be at least 8 digits.\n";	
	}
	if (email.indexOf('@') == 0 ) 
	{
		errMsg += "Email address cannot start with an @ symbol.\n";
	}
	if (email.indexOf('@') < 0 ) 
	{
		errMsg += "Email address must contain an @ symbol.\n";
	}
	if (password1 != password2) 
	{
		errMsg += "Passwords do not match.\n";
	}	
	if (! username.match (pattern)) {
		errMsg += "Username contains symbols.\n";
	}
	if (errMsg != "")
	{
		alert (errMsg);
		result = false;
	} 
	return result;
}

function init()
{
	var regForm = document.getElementById("regform");
	regForm.onsubmit = validate;
}

window.onload = init;