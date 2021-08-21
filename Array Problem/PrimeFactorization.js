 //npm install prompt-sync

// taking user input from console 
const prompt = require("prompt-sync")();
var number = prompt("Enter a Number :");

var factArray= new Array(number);
let count=0;

for ( let i=1;i<=number;i++)
{
	if ( (number % i) ==0 )
	{
		count= count+1
    }
}

if ( count == 2 )
{

	console.log("Number is prime");
	console.log("Prime factors are:")
	let num=number
	for (let  i=1;i<=num;i++ )
	{
		if ( (number % i) == 0 )
		{
			factArray[i]=i;
        }
    }
}
else
{
    console.log("Number is not prime");
}


console.log("Array of prime factors are: ")

factArray.forEach(element => console.log(element));
