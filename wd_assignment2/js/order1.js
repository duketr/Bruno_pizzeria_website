// JavaScript Document
function valid ()
{
	var deAdd = document.getElementById("deAdd").value;
	var errMsg = "";
	var result = true;
	
	if ((document.getElementById("fulfill").checked) && (deAdd == ""))
	{
		errMsg += "Please enter your delivery adress first.\n";
	}
	if (errMsg != "")
		{
			alert(errMsg);
			result = false;
		}
	return result;
}

function init(){
	var ordForm	= document.getElementById("ordForm");
	ordForm.onsubmit = function(){return valid()};
}

window.onload = init;