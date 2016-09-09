//create function
  //control and return statements

function processInput(message)
{
  console.log("i'm inside of the function");
  if(message == "Hello!")
  console.log("Hello World");
  else {
    return("you didn't say hello :(");
  }
}
var userInput;

userInput = prompt();

//Call function
console.log(message);
//Alert user results


var ressponse = processInput(userInput);

console.log (ressponse);
