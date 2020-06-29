// While loops
// let times = 0;
// while(times < 10) {
//     times++;
//     console.log('We have done this ' + times + ' times.');
// }
// console.log("We are done.");

// DO While loop
// let x = Math.floor((Math.random() * 10) + 1);
// let guess;
// do {
//     guess = prompt("I chose a number between 1 and 10. Guess what it is.");
//     if(guess != x) {
//         alert("That wasn't it.");
//         continue;
//     } else {
//         alert("That was it!");
//         break;
//     }
// } while(guess != x);

// While loop and it's for loop equivalent.
let x = 1;
while(x <= 10) {
    console.log(x);
    x++;
}

for(let i=1; i<=10; i++) {
    console.log(i);
}

for(let i=0; i<=20; i++) {
    if(i % 2 !== 0)
        continue;
    console.log(i);
}

let multiply = function(numberOne, numberTwo) {
    let result = 0;
    for(let i = 0; i<numberTwo; i++) {
        result += numberOne;
    }
    return result;
}

console.log(multiply(3, 8));