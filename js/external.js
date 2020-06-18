"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my Website!');
var color = prompt("What's your favorite color?");
alert(`Awesome! ${color} is my favorite color too!`);

// Movies
var littleM = parseInt(prompt('How many days would you like to rent the Little Mermaid?')),
    brotherB = parseInt(prompt('How many days would you like to rent Brother Bear?')),
    herc = parseInt(prompt('How many days would you like to rent Hercules?')),
    movieCost = 3,
    movieTotal = (littleM + brotherB + herc) * movieCost;
alert(`The total for your movies will be $${movieTotal}`);

// Pay
var googlePay = parseInt(prompt('How much is Google paying you?')),
    amazonPay = parseInt(prompt('How much is Amazon paying you?')),
    facebookPay = parseInt(prompt('How much is Facebook paying you?'));
var googleHours = parseInt(prompt('How many hours did you work at Google this week?')),
    amazonHours = parseInt(prompt('How many hours did you work at Amazon this week?')),
    facebookHours = parseInt(prompt('How many hours did you work at Facebook this week?'));
var totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert(`Your total pay for this week will be $${totalPay}`);

// Enrollment
var notFull = confirm('Is the class full?'), conflictWithCurrent = confirm('Does this schedule conflict with your current schedule?');
var eligible = notFull && !conflictWithCurrent;
if(eligible)
    alert('Congratulations! You can enroll in this class!');
else
    alert(`We're sorry. You can't enroll in this class.`);

// Product
var items = parseInt(prompt('How many items are you purchasing?')),
    premium = confirm('Are you a premium member?'),
    notExpired = confirm('Is the offer still valid?');

if((premium || items > 2) && notExpired )
    alert(`You're eligible for the discount!`);
else
    alert(`We're sorry. You're not eligible for the discount`);