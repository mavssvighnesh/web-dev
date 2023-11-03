//simple calculator 
const prompt = require("prompt-sync")();

function print(x) {
    console.log(x);
}

print("this program is to demonstrate a simple calculator");

var a;
var b;


while (1) {
    print("------------MENU-------------");
    print("1.new values\n2.subtraction\n3.multiplication\n4.division\n5.modulus\n6.addition\n7.exit\n");
    let z=prompt("enter the any one choice: ");
    switch(z){
        case "1":
            {var a = prompt("please enter a value for a  ");
             var b = prompt("please enter a value for b  ");
            break;}
        case "2":
             { print(a-b);
                break;
             }
        case "3":
            {print(a*b);
            break;}
        case "4":
            {print(a/b);
            break;}
        case "5":
            {print(a%b);
            break;}
        case "6":
            {
                print(a+b);
                break;
               }
           
        case "7":
            {exit();
            }

    }

}

