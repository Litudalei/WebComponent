// Read 5 Random 3-Digit Numbers & Print Min and Max

{
    let numbers = [];

for (let i = 0; i < 5; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // 100–999
    numbers.push(num);
}

console.log("Numbers:", numbers);

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Minimum:", min);
console.log("Maximum:", max);

}


// Check if Given Day & Month Between March 20 and June 20

{
    // Pass values as: node script.js 25 4
let day = parseInt(process.argv[2]);
let month = parseInt(process.argv[3]);

let isBetween = false;

if ((month === 3 && day >= 20) ||
    (month === 4) ||
    (month === 5) ||
    (month === 6 && day <= 20)) {
    isBetween = true;
}

console.log(isBetween);

}



// Check if a Year is a Leap Year
{
let year = parseInt(process.argv[2]);

if (year >= 1000 && year <= 9999) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
    } else {
        console.log(year + " is NOT a Leap Year");
    }
} else {
    console.log("Please enter a 4-digit year");
}

}

// Simulate a Coin Flip (Heads/Tails)

{

let flip = Math.random();

if (flip < 0.5) {
    console.log("Heads");
} else {
    console.log("Tails");
}

}   