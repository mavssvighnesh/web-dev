//arrays in js

function print(x){
    console.log(x);

}
//indices 0   1      2      3      
var arr=[1,"vicky",true,[2,3,4,5]]; //defining a array 

print(arr.length); //returns the lenght of the array 4

print(arr[2]);//print the element present in the 2nd indice 'true' 

arr.push("96669");//add the 96669 to the end of the list 
print(arr);//prints the array 

arr.pop();//removes the last element of the list 
print(arr);//prints the list 

arr.shift();//removes the first element in the list 
print(arr);//prints the array 

arr.unshift(98889);//add the 98889 to the start of the list 
print(arr)//prints the array 

print(arr.slice(1,2));/*prints the elements between the given limit 
starts with the min and ends excluding the maximum limits  output=vicky*/




