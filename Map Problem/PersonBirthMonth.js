var dictOfBirthData = {};
var dict={};

var jan=0;
var feb=0;
var mar=0;
var apr=0;
var may=0;
var jun=0;
var jul=0;
var aug=0;
var sep=0;
var oct=0;
var nov=0;
var dec=0;

function printDictionary(dict)
{
	for(var key in dict )
	{
		console.log(key+ ":" +dict[key])	
	}
}

for(var i=1;i<=50;i++)
{
    var personDOB= Math.floor(Math.random()*12)+1
    dictOfBirthData[i]= personDOB;
}

printDictionary(dictOfBirthData)

for(i in dictOfBirthData)
{
    if(dictOfBirthData[i]== 1)
    {
        jan++;
    }
    if(dictOfBirthData[i]== 2)
    {
        feb++;
    }
    if(dictOfBirthData[i]== 3)
    {
        mar++;
    }
    if(dictOfBirthData[i]== 4)
    {
        apr++;
    }
    if(dictOfBirthData[i]== 5)
    {
        may++;
    }
    if(dictOfBirthData[i]== 6)
    {
        jun++;
    }
    if(dictOfBirthData[i]== 7)
    {
        jul++;
    }
    if(dictOfBirthData[i]== 8)
    {
        aug++;
    }
    if(dictOfBirthData[i]== 9)
    {
        sep++;
    }
    if(dictOfBirthData[i]== 10)
    {
        oct++;
    }
    if(dictOfBirthData[i]== 11)
    {
        nov++;
    }
    if(dictOfBirthData[i]== 12)
    {
        dec++;
    }
}

dict = {
    "jan": jan,
    "feb": feb,
    "mar": mar,
    "apr": apr,
    "may": may,
    "jun": jun,
    "jul": jul,
    "aug": aug,
    "sep": sep,
    "oct": oct,
    "nov": nov,
    "dec": dec
  };
  
console.log("Person of having same Dob :")
printDictionary(dict)

