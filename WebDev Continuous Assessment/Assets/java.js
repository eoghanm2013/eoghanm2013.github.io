// java file //

function validate() {
	var age = document.getElementById("age").value;
	var age = age * 1;
	var email = document.getElementById("email").value;
	var pict_array = ["Pict1.jpg","Pict2.jpg","Pict3.jpg","Pict4.jpg"];
	var counter = 0;
	
// check that the name value is noot blank

if ( document.getElementById("name").value == "" )  {
	alert('You must Give a Name');
	}	
	
//checking last name isnot blank 
if (document.getElementById("last").value == "" ) {
	alert('Please input last name');
	}
	
	//is age blank
	if ( document.getElementById("age").value == "" )  {
	alert('You must enter your age');
	}
	
	
	
// check for age being number	
	if (isNaN(age) ) {
		alert ('Age is not a number');
		return false;
	}
	
	//is email empty
	if ( document.getElementById("email").value == "" )  {
	alert('You must enter your email');
	}
	
	//is email valid
	if ( validateEmail(email) == false  ) {
		alert('Email is not in valid format');
		
	}
	
	
	
	
	
}// end validation function

function	validateEmail(email)	{	
	var	re	=	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[09]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return	re.test(email);
	}	
	
	/*rotating pics function! was not able to get working???
function rotatePicts() {
	alert(pict_array[counter]);
	counter++;
} */ 

	
	
	
	
	
	
	
	
	
