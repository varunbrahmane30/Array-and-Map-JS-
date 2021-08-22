var dict = {}; 

var count1 =0;
var count2 =0;
var count3 =0;
var count4 =0;
var count5 =0;
var count6 =0;

function printDictionary()
{
	for(var key in dict )
	{
		console.log(key+ ":" +dict[key])	
	}
}

while (true)
{
	var number = Math.floor(Math.random()*6)+1
	//var number= dict[value];
	if (number == 1)
	{
		dict["one"]=number
		count1++;
	}
	if (number == 2)
	{
		dict["two"]= number
		count2++;
	}
	if (number == 3)
	{
		dict["three"]= number
		count3++;
	}
	if (number == 4)
	{
		dict["four"]= number
		count4++;
	}
	if (number == 5)
	{
		dict["five"]= number
		count5++;
	}
	if (number == 6)
	{
		dict["six"]= number
		count6++;
	}

	if(count1 == 10)
	{
		console.log("Count of one is reached to 10");
		break;
	}

	if(count2 == 10)
	{
		console.log("Count of two is reached to 10");
		break;
	}

	if(count3 == 10)
	{
		console.log("Count of three is reached to 10");
		break;
	}

	if(count4 == 10)
	{
		console.log("Count of four is reached to 10");
		break;
	}

	if(count5 == 10)
	{
		console.log("Count of five is reached to 10");
		break;
	}

	if(count6 == 10)
	{
		console.log("Count of six is reached to 10");
		break;
	}
}

var array =  [count1,count2,count3,count4,count5,count6]
array.forEach(element => console.log(element))

printDictionary()



console.log("Store the array result into Dictionary : ")
dict["one"]= count1
dict["two"]= count2
dict["three"]= count3
dict["four"]= count4
dict["five"]= count5
dict["six"]= count6

printDictionary();

var min=array[0]
var max=array[0]

for(var i in array)
{
	if (i < min )
	{
		min=array[i];
	}
	if ( i > max )
	{
		max=array[i];
	}
}

console.log("Minimum is :" + min)
console.log("Maximum is :" + max)

