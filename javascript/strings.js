//worte a simple function instead of using a console.log for output 
function print(x){
    console.log(x);
}


var str="Vighnesh Mandaleeka"; //defining the string 
var str1="vicky";
var str2="96669";




print(str1+" "+str2);//prints the output at vikcy 96669

print(str1.concat(str2));//prints the output same as str1+str2 but without any gap vicky96669

print(str.length);//prints the length of the string 


print(str.indexOf("m"));//prints the index of the 'm'

print(str.slice(8));//print the mandaleeka in the str 

print(str.replace("mandaleeka","mandalika"));//replaces the value of mandaleeka in str to mandalika 

print(str.toUpperCase());
print(str.toLowerCase());