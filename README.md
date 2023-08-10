# TOP-rock-paper-scissors

## Learning from this project
`Things where i struggled and adding here as my learning from this project`

Math.random():
 gives us a random number between 0 and 1. 
 It's like spinning a wheel and stopping at a random point.

Math.floor():
 rounds down a number to the nearest whole number. So, if you have 3.7, it becomes 3.

Math.random() * arr.length:
 gets a random number between 0 and the number of things in the array. 
 For example, if there are 5 things, this part could give us a number like 2.73.

Math.floor(Math.random() * arr.length):
 makes that random number a whole number. If it was 2.73, now it's just 2.

arr[(Math.floor(Math.random() * arr.length))] uses that whole number as an index to pick one thing from the array. It's like saying, "Get me the thing at position 2 from the array."


Variable Scope Issue:
Return Statement Placement:
In JavaScript, when a return statement is encountered, the function stops executing and immediately exits. So, the lines that come after the return statements won't be executed.

Missing Variable Assignments:
when you call a function and it produces a result or value that you want to use later, you need to save that result in a variable so you can work with it in your program.

while (!["rock", "paper", "scissors"].includes(choice))

while Loop:
while is a loop in programming that keeps running as long as a certain condition is true. In this case, it's used to repeatedly ask the user for their choice until they provide a valid choice.

! Operator:
The exclamation mark (!) is a logical operator that means "not." It's used to reverse the truth of an expression. So, !true becomes false, and !false becomes true.

["rock", "paper", "scissors"]:
This is an array containing the valid choices: "rock," "paper," and "scissors." Arrays are like lists that can hold multiple items.

.includes(choice):
The .includes() method is used on arrays to check if a specific value is present in the array. Here, it checks if the user's input (choice) matches any of the valid choices.

Putting it all together, the line while (!["rock", "paper", "scissors"].includes(choice))  is saying: "Keep asking the user for their choice (choice) as long as their choice is NOT included in the valid choices ('rock', 'paper', 'scissors')."

This ensures that the loop will continue asking the user until they provide a valid choice among the allowed options.
