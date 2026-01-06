// Read a Single Digit Number and Print in Words
{
    let num = parseInt(process.argv[2]);

switch (num) {
    case 0: console.log("Zero"); break;
    case 1: console.log("One"); break;
    case 2: console.log("Two"); break;
    case 3: console.log("Three"); break;
    case 4: console.log("Four"); break;
    case 5: console.log("Five"); break;
    case 6: console.log("Six"); break;
    case 7: console.log("Seven"); break;
    case 8: console.log("Eight"); break;
    case 9: console.log("Nine"); break;
    default:
        console.log("Please enter a single digit number (0–9)");
}

}

// Read a Number and Display the Weekday


{
    let day = parseInt(process.argv[2]);

switch (day) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default:
        console.log("Enter a number between 1 and 7");
}

}


// Read Number (1, 10, 100, 1000…) and Print Unit/Ten/Hundred

{
    let n = parseInt(process.argv[2]);

switch (n) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    case 10000: console.log("Ten Thousand"); break;
    case 100000: console.log("Lakh"); break;
    case 1000000: console.log("Ten Lakh"); break;
    default:
        console.log("Enter values like 1, 10, 100, 1000...");
}

}


// Enter 3 Numbers → Perform Operations → Find Max & Min

{
    let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

console.log("Op1 (a + b*c) =", op1);
console.log("Op2 (a % b + c) =", op2);
console.log("Op3 (c + a/b) =", op3);
console.log("Op4 (a*b + c) =", op4);

let max = Math.max(op1, op2, op3, op4);
let min = Math.min(op1, op2, op3, op4);

console.log("Maximum =", max);
console.log("Minimum =", min);

}