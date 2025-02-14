/* Understand var, let and const in depth */



// 1. var

/*  => Variables declared with var are function or global scoped as it doesn't have block scope so it can be accessed anywhere in the file.

    => Can be accessed before declaretion but with undefined value.
    => Can be redeclred in the same scope.
    => Can be reassigned. 
*/

console.log("\nPrinting var output : ");

console.log(x);             // undefined, due to hoisting

var x = 10;
console.log(x);             // 10

function test() {
    var y = 20;

    if (true) {
        var y = 30;         // Same variable; function-scoped
        console.log(y);     // 30
    }

    console.log(y);         // 30
}

test();










// 2. let

/*  => let is block scoped so value can't be accessed outside the scope.

    => Can't be accessed before declaretion.
    => Can't be redeclred in the same scope.
    => Can be reassigned. 
*/

console.log("\nPrinting let output : ");

// console.log(a);          // ReferenceError: Cannot access 'a' before initialization
let a = 15;
console.log(a);             // 15

if (true) {

    let a = 20;             // This 'a' is scoped to the block
    console.log(a);         // 20

}

console.log(a);             // 15 (outer scope remains unchanged)








// 3. const

/*  => let is block scoped so value can't be accessed outside the scope.

    => Can't be accessed before declaretion.
    => Can't be redeclred in the same scope.
    => Can't be reassigned with primitive value. 
*/

console.log("\nPrinting const output : ");

// const num;                   // error : can't declare constants without value

const name = "Hero";
// name = "Sam";                // error : can't reassign constants

if (true) {
    const name = "Sam";
    console.log(name);          // output: Sam

}
console.log(name);              // output: Hero

// Reassigning non-primitive values (object and array)

const User = {
    username: "Aquib Jawed",
    userId: 1
}
console.log(User);              // output: { username: 'Aquib Jawed', userId: 1 }

User.userId = 0;                // Changed userId to 0
console.log(User);              // output: { username: 'Aquib Jawed', userId: 0 }








console.log("\nPrinting unpredictable behaviour of JS: ");

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(`let i: ${i}`), 100);
}

// Using var might lead to unexpected results:
for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log(`var j: ${j}`), 100);
}
// All the logs for var j will output 3, because j is function-scoped.





// // Global variable j
// var j;

// // Loop runs and updates j
// for (j = 0; j < 3; j++) {
//     // Each iteration creates a function that references the same j
//     setTimeout(function () {
//         console.log(j);     // Will print the current value of j at execution time
//     }, 100);
// }

// // After loop, j is 3, so each function prints 3.
