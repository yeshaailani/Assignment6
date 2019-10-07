var choice;
var result;
var coinFlip = parseInt(Math.random() * 10);

coinFlip <= 5 ? result = "heads" : result = "tails";
choice = window.prompt("Heads or Tails?");
choice=choice.toLowerCase();

//Check selection 
if(result === "heads" && choice === "heads"){
    window.alert("The flip was heads and you chose heads...you win!");
}
else if(result === "heads" && choice === "tails"){
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(result === "tails" && choice === "heads"){
    window.alert("The flip was tails but you chose heads...you lose!");
}
else if(result === "tails" && choice === "tails"){
    window.alert("The flip was tails and you chose tails...you win!");
}
else{
    window.alert("Invalid choice");
}