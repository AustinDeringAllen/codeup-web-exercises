"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my Website!');
var color = prompt("What's your favorite color?");
alert(`Awesome! ${color} is my favorite color too!`);

// Movies
var littleM = 3, brotherB = 5, herc = 1;
var movieTotal = (littleM + brotherB + herc) * 3;
alert(movieTotal);

// Pay
var googlePay = 400, amazonPay = 380, facebookPay = 350;
var googleHours = 6, amazonHours = 4, facebookHours = 10;
var totalPay = (googlePay * googleHours) + (amazonPay * amazonHours) + (facebookPay * facebookHours);
alert(totalPay);

// Enrollment
var notFull = confirm('Is the class full?'), conflictWithCurrent = confirm('Does this schedule conflict with your current schedule?');
var eligible = notFull && !conflictWithCurrent;
if(eligible)
    alert('Congratulations! You can enroll in this class!');
else
    alert(`We're sorry. You can't enroll in this class.`);

// Product
var items = confirm('Are you purchasing more than two items?'),
    premium = confirm('Are you a premium member?'),
    notExpired = confirm('Is the offer still valid?');

if((premium || items) && notExpired )
    alert(`You're eligible for the discount!`);
else
    alert(`We're sorry. You're not eligible for the discount`);