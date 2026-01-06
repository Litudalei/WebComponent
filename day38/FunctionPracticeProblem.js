// Temperature Conversion using switch-case

{
let choice = parseInt(process.argv[2]);   // 1 = C→F , 2 = F→C
let value = parseFloat(process.argv[3]);

switch (choice) {

    case 1: // Celsius → Fahrenheit
        if (value < 0 || value > 100) {
            console.log("Enter Celsius value between 0°C and 100°C");
        } else {
            let degF = (value * 9 / 5) + 32;
            console.log(`${value} °C = ${degF} °F`);
        }
        break;

    case 2: // Fahrenheit → Celsius
        if (value < 32 || value > 212) {
            console.log("Enter Fahrenheit value between 32°F and 212°F");
        }
        else {
            let degC = (value - 32) * 5 / 9;
            console.log(`${value} °F = ${degC} °C`);
        }
        break;

    default:
        console.log("Invalid choice! Use 1 for C→F, 2 for F→C.");
}

}


// Function to check if two numbers are Palindromes


{
    function isPalindrome(num1, num2) {
    function reverse(n) {
        return parseInt(n.toString().split("").reverse().join(""));
    }

    return reverse(num1) === num2;
}

// Example:
console.log(isPalindrome(121, 121));  // true
console.log(isPalindrome(123, 321));  // true
console.log(isPalindrome(123, 123));  // false

}


// Check if number is prime AND its palindrome is also prime

{
    function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split("").reverse().join(""));
}

let num = parseInt(process.argv[2]);

if (isPrime(num)) {
    console.log(num, "is Prime.");

    let pal = getPalindrome(num);
    console.log("Palindrome:", pal);

    if (isPrime(pal)) {
        console.log("Palindrome", pal, "is also Prime.");
    } else {
        console.log("Palindrome", pal, "is NOT Prime.");
    }
} 
else {
    console.log(num, "is NOT a Prime.");
}

}