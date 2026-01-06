// Powers of 2 table using while loop (stop if 2^n or 256 reached)

{
    let n = parseInt(process.argv[2]);
let i = 0;

while (i <= n && Math.pow(2, i) <= 256) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
    i++;
}

}


// Magic Number (Binary Search using while loop)

{
    const readline = require("readline-sync");

console.log("Think of a number between 1 and 100.");
let low = 1, high = 100;

while (low <= high) {

    let mid = Math.floor((low + high) / 2);

    let ans = readline.question(
        `Is your number ${mid}? (yes / low / high): `
    );

    if (ans === "yes") {
        console.log("Magic Number Found:", mid);
        break;
    }
    else if (ans === "low") {   // your number is smaller than mid
        high = mid - 1;
    }
    else if (ans === "high") {  // your number is greater than mid
        low = mid + 1;
    }
    else {
        console.log("Type: yes / low / high");
    }
}

}


// Flip Coin until Heads OR Tails reaches 11 wins

{
    let heads = 0;
let tails = 0;

while (heads < 11 && tails < 11) {
    let flip = Math.random();

    if (flip < 0.5) {
        heads++;
        console.log("Heads:", heads);
    } else {
        tails++;
        console.log("Tails:", tails);
    }
}

if (heads === 11)
    console.log("Heads wins!");
else
    console.log("Tails wins!");

}

// Gambler Game — Start with Rs 100, Goal Rs 200

{
    let money = 100;
let wins = 0;
let bets = 0;

while (money > 0 && money < 200) {

    bets++;

    // 50% win or lose
    if (Math.random() < 0.5) {
        money++;     // win
        wins++;
    } else {
        money--;     // lose
    }
}

console.log("Final Money:", money);
console.log("Total Bets:", bets);
console.log("Total Wins:", wins);

if (money === 200)
    console.log("Gambler reached the goal!");
else
    console.log("Gambler went broke!");

}