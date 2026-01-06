//Print Table of Powers of 2 up to 2^n
{
    let n = parseInt(process.argv[2]);

for (let i = 0; i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}

}

// Print the n-th Harmonic Number

{
    let n = parseInt(process.argv[2]);
let harmonic = 0;

for (let i = 1; i <= n; i++) {
    harmonic += 1 / i;
}

console.log("Harmonic Number H(" + n + ") =", harmonic);

}


// Check if a Number is Prime

{
    let num = parseInt(process.argv[2]);
let isPrime = true;

if (num < 2) {
    isPrime = false;
}

for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

console.log(num, isPrime ? "is Prime" : "is NOT Prime");

}


// Print All Prime Numbers in a Given Range

{
    let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

for (let num = start; num <= end; num++) {

    let isPrime = true;

    if (num < 2) continue;

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

}

// Factorial of a Number

{
    let n = parseInt(process.argv[2]);
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log("Factorial of", n, "is", factorial);

}

// Prime Factorization of N (Efficient method)
{
    let n = parseInt(process.argv[2]);

console.log("Prime factors of", n, ":");

for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        console.log(i);
        n = n / i;
    }
}

if (n > 1) {
    console.log(n);   // remaining prime number
}

}