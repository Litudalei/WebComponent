// 1. Die Roll Simulation Using Dictionary (Object)

{
    // Step c: dictionary to store counts
let diceCount = {
    1: 0, 2: 0, 3: 0,
    4: 0, 5: 0, 6: 0
};

let reached = false;

// Step b & d: repeat rolling until any number reaches 10
while (!reached) {
    let roll = Math.floor(Math.random() * 6) + 1; // a: roll die
    diceCount[roll]++;

    console.log("Rolled:", roll);

    // stop condition
    if (diceCount[roll] === 10) {
        reached = true;
    }
}

console.log("\nFinal Counts:", diceCount);

// Step e: find max & min
let maxNum = null, minNum = null;
let maxValue = -Infinity, minValue = Infinity;

for (let key in diceCount) {
    let val = diceCount[key];

    if (val > maxValue) {
        maxValue = val;
        maxNum = key;
    }
    if (val < minValue) {
        minValue = val;
        minNum = key;
    }
}

console.log("\nNumber reached max times:", maxNum, "→", maxValue);
console.log("Number reached min times:", minNum, "→", minValue);

}

// 2. Generate Birth Month for 50 Individuals (1992–1993)

{
    // Store months in dictionary (1-12)
let birthMonths = {
    1: [],  2: [],  3: [],  4: [], 
    5: [],  6: [],  7: [],  8: [],
    9: [], 10: [], 11: [], 12: []
};

for (let i = 1; i <= 50; i++) {
    // Generate month 1–12
    let month = Math.floor(Math.random() * 12) + 1;

    // Store individual in that month
    birthMonths[month].push(i);
}

// Print the result
console.log("Birthdays grouped by month:\n");

for (let month in birthMonths) {
    console.log(
        "Month", month, "→ Individuals:", birthMonths[month]
    );
}

}