// JavaScript Document

function EnableDisableTextBox() {
        var deli = document.getElementById("deli");
        var deAdd = document.getElementById("deAdd");
        deAdd.disabled = deli.checked ? false : true;
        if (!deAdd.disabled) {
            deAdd.focus();
        }
}
function EnableDisableCredit()
{
	var creNum = document.getElementById("creNum");
	var payOn = document.getElementById("payOn");
	creNum.disabled = payOn.checked ? false : true;
	if (!creNum.disabled)
	{
		creNum.focus();
	}
}

function addressFill()
{
	if (document.getElementById("fulfill").checked)
		{
			document.getElementById("biAdd").value = document.getElementById("deAdd").value;
		}
	else 
		{
			document.getElementById("biAdd").value = "";
		}
}