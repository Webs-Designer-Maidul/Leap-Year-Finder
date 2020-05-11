function leapYear(year)
{
	document.getElementById("demo").innerHTML = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0 ? 'Yes' : 'No')//? 'Yes' : 'No') kete dile yes no bade True or false asbe;
}
