const showMultiplicationTable = function(number) {
    for(let i=1; i<=10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
showMultiplicationTable(7);

const oddOrEven = function() {
    for(let i=0; i<10; i++) {
        let random = Math.floor(Math.random() * 20) + 180;
        console.log(`${random} is ${(random % 2 === 0) ? "even" : "odd"}`);
    }
}
oddOrEven();

const numberPyramid = function() {
    for(let i=1; i<=9; i++) {
        let STRING = ""
        for (let j = 0; j < i; j++) {
            STRING += i;
        }
        console.log(STRING);
    }
}
numberPyramid();

const minusFive = function() {
    for(let i=100; i>0; i-=5) {
        console.log(i);
    }
}
minusFive();