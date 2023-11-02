const prompt=require("prompt-sync")(); //importing module
let x=prompt("please enter a text")  //taking a text input from user 


// returns true if  x is hello vighnesh 
if(x=="hello vighnesh"){
    console.log("true vicky 1");

}
//returns true if x is vighnesh 
else if(x=="vighnesh"){
    console.log("true vicky2");
}
//returns the false if both conditions fail 
else{
    console.log("false");
}