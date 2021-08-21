var myArray = new Array(10);

for(let i=1 ;i<=10;i++ )
{
	randomValue= Math.floor(Math.random() * 1000);
	myArray[i]=randomValue
}

myArray.forEach(element => console.log(element));

var large=myArray[1];
var small=myArray[1];

for (var i=0;i<=myArray.length;i++)
{
	if(myArray[i] >= large)
	{
		large= myArray[i];
	}
	if( myArray[i] <= small )
	{
		small = myArray[i];
	}
}

console.log("Largest element in array is : "+large);
console.log("Smallest element in array is : "+small);