let number;

do {
    number = prompt("Enter an odd number between 1 and 50");
    if(number % 2 != 0 && number >= 1 && number <= 50)
        break;
    else
        continue;
} while(true);

for(let i=1; i<=50; i++) {
    if(i % 2 === 0) {
        continue;
    } else if(i == number) {
        console.log(`Yikes! Skipping Number: ${number}`);
    } else {
        console.log(`Here is an odd number: ${i}`);
    }
}