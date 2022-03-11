// JavaScript Document
function onlyNumberKey(evt){ 
	var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
	if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
			return false; 
	}
	return true; 
} 


function processCreditCard(){
	var creNum = document.getElementById("creNum");
	var visa = document.getElementById("visa");
	var master = document.getElementById("master");
	var ameEx = document.getElementById("ameEx");
	if(visa.checked || master.checked){
		creNum.maxLength = "16";
		creNum.disabled = false;
		creNum.value = "";
	} else if(ameEx.checked){
		creNum.maxLength = "15";
		creNum.disabled = false;
		creNum.value = "";
	} else{
		creNum.disabled = true;
	}
}

function init(){
	//order.js
	EnableDisableTextBox();
	EnableDisableCredit();
	addressFill();
	//order2.js
	init_2()
	//order3.js
	var creNum = document.getElementById("creNum");
	var visa = document.getElementById("visa");
	var master = document.getElementById("master");
	var ameEx = document.getElementById("ameEx");
	visa.onchange = function(){return processCreditCard();}
	master.onchange = function(){return processCreditCard();}
	ameEx.onchange = function(){return processCreditCard();}
	creNum.onkeypress = function(){return onlyNumberKey(event);}
}

window.onload = init;