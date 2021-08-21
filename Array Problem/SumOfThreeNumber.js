
// taking user input from console 
const prompt = require("prompt-sync")();
var size = prompt("Enter a size of array: ");

var arr = new Array(size);

for (let i=0;i<size;i++)
{
    var element = prompt("Enter Elemnet : ");
    arr[i]=element;
}

arr.forEach(element => console.log(element));

for (var i=0;i<size-2; i++ )
{
    for (var j=i+1;j<size-1;j++ )
    {
        for (var k=k+1;k<size;k++ )
        {
            let sum= arr[i]+arr[j]+arr[k] 
            if ( sum == 0 )
            {
                document.write(arr[i] + " " + arr[j] + " " +arr[k]); 
                console.log("sum of three elements is equals to zero.")
                
            }
            else
            {
                console.log("Sum of three element is not zero.")
            }
		}
	}
}
