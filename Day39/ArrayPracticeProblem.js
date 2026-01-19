
// Generate 10 Random 3-digit numbers & find 2nd largest & 2nd smallest WITHOUT sorting


{
    // Step a & b: Generate 10 random 3-digit numbers & store in array
let arr = [];

for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 900) + 100; // 100–999
    arr.push(num);
}

console.log("Array:", arr);

// Step c: Find 2nd smallest & 2nd largest WITHOUT sorting
let largest = -Infinity, secondLargest = -Infinity;
let smallest = Infinity, secondSmallest = Infinity;

for (let num of arr) {

    // largest & second largest
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }

    // smallest & second smallest
    if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
    }
}

console.log("2nd Largest (no sorting):", secondLargest);
console.log("2nd Smallest (no sorting):", secondSmallest);

}


// Sort the array & find 2nd largest and 2nd smallest


{
    let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 900) + 100);
}

console.log("Original Array:", arr);

arr.sort((a, b) => a - b);

console.log("Sorted Array:", arr);

console.log("2nd Smallest:", arr[1]);
console.log("2nd Largest:", arr[arr.length - 2]);

}

// Prime Factorization – Store all prime factors in an array

{
    let n = parseInt(process.argv[2]);
let factors = [];

let num = n;

for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
        factors.push(i);
        num /= i;
    }
}

if (num > 1) {
    factors.push(num);  // remaining prime
}

console.log("Prime factors of", n, ":", factors);

}


// Sum of three integers adds to ZERO

{
    let arr = [0, -1, 2, -3, 1];

console.log("Array:", arr);
console.log("Triplets that sum to ZERO:");

for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                console.log(arr[i], arr[j], arr[k]);
            }
        }
    }
}

}

// Find numbers between 0–100 where both digits are same (11, 22, 33...) & store in array

{
    let repeatedDigits = [];

for (let i = 11; i < 100; i += 11) {
    repeatedDigits.push(i);
}

console.log("Repeated digits (0–100):", repeatedDigits);

}