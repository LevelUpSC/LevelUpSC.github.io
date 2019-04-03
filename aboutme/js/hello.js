var myName = 'Mr. Baltz';
var myAge = 33;
var tired = false;

function sayName()
{
	//access our html file 
	document.getElementById("nameResult").innerHTML = "Name: " + myName;
	
	//like the print feature of Python
	//console.log("Name: " + myName);
	
	//alert("Hello " + myName);
}

function sayAge()
{
	document.getElementById("ageResult").innerHTML = "Age: " + myAge;
}

function isTired()
{
	//we want to use the boolean to say 'yes' or 'no'
	if (tired)
	{
		document.getElementById("tiredResult").innerHTML = "Tired: " + "Yes, GET SOME SLEEP!"
	}
	else
	{
		document.getElementById("tiredResult").innerHTML = "Tired: " + "No...Luckyyyyyyy!"
	}
}