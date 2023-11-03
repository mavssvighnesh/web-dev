// using map method in js 

arr=[1,2,3,4,5,6];  //defining a array 

arr2=arr.map(function(element){return element*3; }) //defining a funciton with the map method to make the arr elements multiplied byy 3 

arr3=arr.filter(function(element){return element%2==0;}) //returning value if it is divisible by 2


console.log("orignal array "+arr) //printing the orignal array 
console.log("array after applying the mapping method "+arr2); //printing the  array after the map method
console.log("array after apply the fiter method "+arr3);//printing the array after the filter method 
//console.log("array after applying the reduce method  "+arr4);//printing the array after the reduce method 




