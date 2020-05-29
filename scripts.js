// variables and functions for our page


//alert("scripts.js has loaded");
//var name = "Ehsan";

function printStar()
{
	document.write("*");
}

function printAt(numTimes)
{
	for(i=1; i<= numTimes; i++)
	{
		document.write("@");
	}
	document.write("<br>");
	//document.write("<br>");
	//document.write("<br>");	
}

function printCopyright(numTimes)
{	
	for (i=1; i<=numTimes; i++)
	{
		document.write("&copy;");
	}
	return "printing is complete";
}