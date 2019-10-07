var num1;
var num2;

num1 = parseInt(window.prompt("Enter number1"));
num2 = parseInt(window.prompt("Enter number2"));


    if(num1 > num2) {
        window.document.write(num1 + " is Larger");
    }
    else if(num1 < num2) {
        window.document.write(num2 + " is Larger");
    }
    else if(num1 == num2){
        window.document.write("Both numbers are Equal");
    }
else{
    window.alert("Invalid Entry");
}
