const myVal = process.argv

// creating an array
let rav = [];

// adding values to array
rav.push(Number(myVal[2]));
rav.push(Number(myVal[3]));

//console log the array
console.log(rav);

// adding the values to create sum
let a = Number(myVal[2]) + Number(myVal[3]);

// checking sum using if else conditions
if (a < 10)
{ 
   console.log(' The given sum is less than 10');
}

else if  ( a>10 && a<100)
{
    console.log('The given sum is greater than 10 but less than 100');
}

else if ( a>100 && a<1000)
{
    console.log('The given sum is greater than 100 but less than 1000')
}
    else
    {
        console.log('The given sum is greater than 1000')
    }
        

