"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

let analyzeColor = function(color) {
    if(color === 'blue') {
        return 'blue is the color of the sky';
    } else if(color === 'red') {
        return 'Strawberries are red';
    } else {
        return "I don't know anything about " + color;
    }

    // if(color === 'red') {
    //     return "red is the color of a rose";
    // } else if(color === 'orange') {
    //     return "orange is the color of an orange";
    // } else if(color === 'yellow') {
    //     return "yellow is the color of a sunflower";
    // } else if(color === 'green') {
    //     return "green is the color of grass"
    // } else if(color === 'blue') {
    //     return "blue is the color of the sky";
    // } else if(color === 'indigo') {
    //     return "indigo is the color of blueberries";
    // } else if(color === 'purple') {
    //     return "purple is the color of grapes";
    // } else {
    //     return "I don't know anything about " + color;
    // }
}

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

analyzeColor = function(color) {
    switch(color) {
        case 'red':
            return 'Strawberries are red';
        case 'orange':
            return 'Oranges are orange';
        case 'yellow':
            return 'Sunflowers are yellow';
        case 'green':
            return 'Grass is green';
        case 'blue':
            return 'The sky is blue';
        case 'indigo':
            return 'Blueberries are indigo'
        case 'violet':
            return 'Grapes are violet';
        default:
            return "I don't know anything about " + color;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let colorPrompt = prompt("Please enter a color");
alert(analyzeColor(colorPrompt));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

const calculateTotal = function(number, total) {
    switch(number) {
        case 0:
            console.log('No Discount');
            return total;
            break;
        case 1:
            console.log('10% Discount!');
            return total - (total * 0.1);
            break;
        case 2:
            console.log('25% Discount!');
            return total - (total * 0.25);
            break;
        case 3:
            console.log('35% Discount!');
            return total - (total * 0.35);
            break;
        case 4:
            console.log('35% Discount!');
            return total - (total * 0.5);
            break;
        case 5:
            console.log('Lucky Break! You get it all for free!');
            return 0;
            break;
        default:
            console.log('Error not acceptable number');
    }
}
calculateTotal(5,100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
let totalPrompt = parseFloat(prompt("Enter your total amount"));
let afterDiscount = calculateTotal(luckyNumber, totalPrompt);

alert(`Your lucky number was: ${luckyNumber}`);
alert(`Your total before the lucky number discount was: $${totalPrompt}`);
alert(`Your total after the lucky number discount is: $${afterDiscount}`);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
// const isEven = function(number) {
//     return number % 2 === 0;
// }
//
// const plus100 = function(number) {
//     return number + 100;
// }
//
// const positiveOrNegative = function(number) {
//         return number > 0;
// }

const isEven = function(number) {
    return (number % 2 === 0) ? 'even' : 'odd';
}

const plus100 = function(number) {
    return number + 100;
}

const positiveOrNegative = function(number) {
    return (number > 0) ? 'positive' : 'negative';
}

const game = function() {
    let play = confirm("Would you like to enter a number?");
    if(play) {
        let number = parseFloat(prompt("Please enter a number"));
        if(isNaN(number)) {
            alert("Your input is not a number. Please refresh the page and try again.");
        } else {
            if(number === 0) {
                alert("Your number is 0");
                alert("Your number plus 100 is: " + plus100(number));
                alert("Your number is neither positive nor negative. It is 0");
            } else {
                alert("Your number is " + isEven(number));
                alert("Your number plus 100 is " + plus100(number));
                alert("Your number is " + positiveOrNegative(number));
            }
        }
    }
}
game();
