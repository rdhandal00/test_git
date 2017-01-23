const myVal=process.argv;
 
 let arry = [];
 let mealcost=arry.push(Number(myVal[2]));
 let tipPercent=arry.push(Number(myVal[3]));
 const tipAmount = (Number(myVal[3])/100) * Number(myVal[2])
 
 const TotalSalary = tipAmount + Number(myVal[2])
 const output = `Your Meal is $${Number(myVal[2])} + $${tipAmount} = $${TotalSalary}`
 
 
 console.log(output)
 
 