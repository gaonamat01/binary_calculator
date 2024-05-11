
const userInput =  document.querySelector("#user_input");
var expression = '';

function press(num){
  expression += num;
  userInput.value = expression;
}

function equal(){
  expression = parseInt(expression, 2);
  userInput.value =  eval(expression)
  expression = '';
}

function erase(){
  expression = '';
  userInput.value = expression;
}
