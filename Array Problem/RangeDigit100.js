var arrCnt=0;
var myArray = new Array(100);

for (var  i=0;i<100;i++ )
{
	var num=i;
	var sum=0;
	var last=0;
	if ( num > 10 && num < 100 )
	{
		while ( num != 0 )
		{
			last= num%10
			sum=sum*10+last 
			num=num/10 
        }

		if ( i == sum )
		{
			myArray[arrCnt++]=i;
        }
    }
}

console.log("Array of repeated digits are :")

myArray.forEach(element => console.log(element))
