//Q1:
var posint=prompt("Enter a positive integer!");
//part a
var a=Number(posint);
document.write("<br>Number is: "+ a);
//part b
posint=Math.round(posint);
document.write("<br>Round value: "+ posint);
//part c
var floorfunc=Math.floor(posint);
document.write("<br>FLoor value: "+ floorfunc);
//part d
var ceil_Fun=Math.ceil(posint);
document.write("<br> Ceil value: "+ ceil_Fun);

//Q2:
var Negint=prompt("Enter a Negative integer!");
//part a
var b=Number(Negint);
document.write("<br>Number is: "+ b);
//part b
Negint=Math.round(Negint);
document.write("<br>Round value: "+ Negint);
//part c
var floor_function=Math.floor(Negint);
document.write("<br>FLoor value:"+ floor_function);
//part d
var ceil_Function=Math.ceil(Negint);
document.write("<br>Ceil value:"+ ceil_Function);

//Q3:
var val=prompt("Enter the value!");
var Abs_val=Math.abs(val);
document.write("<br>Absolute value is: "+ Abs_val);

//Q4:
var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write('<br>Random dice value: ' + diceRoll);

//Q5:
var coinToss = Math.random() < 0.5 ? "Heads" : "Tails";

// Display the result in the browser
document.write("<br>The coin landed on " + coinToss + "!");

//Q6:
var Random_num=Math.floor(Math.random() *100) +1;
document.write("<br>Random no between 1 to 100: "+ Random_num);

//Q7:
var WeightInput=prompt("What is your weight?in kgs");
var weight=parseFloat(WeightInput);
document.write("<br>The weight  of user is : "+ weight+ "kgs");

//Q8:
const secretNumber = Math.floor(Math.random() * 10) + 1;
//user to input a number between 1 and 10
const Input_no = prompt("Guess the secret number between 1 and 10:");
const guess = parseInt(Input_no);
// Check if the user input equals the secret number and congratulate the user
if (guess === secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Sorry, the secret number was " + secretNumber + ".");
}

