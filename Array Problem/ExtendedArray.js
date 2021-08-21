var myArray = new Array(10);

for(let i=1 ;i<=10;i++ )
{
	randomValue= Math.floor(Math.random() * 1000);
	myArray[i]=randomValue
}

myArray.forEach(element => console.log(element));

var large=myArray[1];
var small=myArray[1];

for ( i=0; i<myArray.length; i++ )
{
	for ( j=i; j<myArray.length; j++ )
	{
		if ( myArray[i] > myArray[j] )
		{
			temp=myArray[i]
			myArray[i]=myArray[j]
			myArray[j]=temp
		}
	}
}

console.log("Array after sorting: ")
myArray.forEach(element => console.log(element));

var large=myArray[2];
var small=myArray[2];

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

console.log("Largest element in array is : "+myArray[2]);
console.log("Smallest element in array is : "+myArray[9]);