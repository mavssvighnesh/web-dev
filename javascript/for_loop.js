
//standard for loop

//syntax for(intialization,condition,increment/decrement)

for(i=0;i<=2;i++) // for loop with i=0 and i<=2 and incrementing by 1 i++
{
    console.log(i);  //prints the numbers from o to 2 
}


//for in loop 

//looping through the elements like  objects keys etc 

//syntax for(variable in object)

let people={name:"vighnesh",age:20,job:"senior developer"}
for(let key in people)
{
    console.log(key+": "+people[key]); //prints out the data present in people

}


//for of loop 
//syntax for(variable of object)

let no=[1,4,67,2,3]; //defining a list

for(let number of no)
{
    console.log(number); //prints out the numbers in the list 
    
}