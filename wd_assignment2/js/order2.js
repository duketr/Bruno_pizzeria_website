// JavaScript Document

function onlyNumberKey(evt){ 
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
			return false; 
	}
	return true; 
} 

function val ()
{
	var conNum = document.getElementById("conNum").value;
	var email = document.getElementById("email").value;
	var biAdd = document.getElementById("biAdd").value;
	var postcode = document.getElementById("postcode").value;
	var errMsg = "";
	var result = true;
	
	if (conNum == "")
		{
			errMsg += "Please enter your contact number.\n";
		}
	if (email == "")
		{
			errMsg += "Please enter your email for receipt.\n";
		}
	if (biAdd == "")
		{
			errMsg += "Please enter your billing address.\n";
		}
	if (postcode == "")
		{
			errMsg += "Please enter your postcode.\n";
		}
	if (errMsg != "")
		{
			alert(errMsg);
			result = false;
		}
	return result;
}

function init_2()
{
	var ordForm = document.getElementById("ordForm");
	var postcode = document.getElementById("postcode");
	var conNum = document.getElementById("conNum");
	postcode.onkeypress = function(){return onlyNumberKey(event);}
	conNum.onkeypress = function(){return onlyNumberKey(event);}
	ordForm.onsubmit = function(){return val()};	
}