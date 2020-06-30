let i = 1;
while(i <= 16) {
    console.log(2**i);
    i++;
}

let allCones = Math.floor(Math.random() * 50) + 50;
do {
    let randomCones = Math.floor(Math.random() * 5) + 1;
    if(randomCones > allCones) {
        console.log(`Cannot sell you ${randomCones} cones, I only have ${allCones}...`)
    } else {
        console.log(`${randomCones} sold...`);
        allCones -= randomCones;
    }
} while(allCones > 0);
console.log("Yay! I sold them all!");

