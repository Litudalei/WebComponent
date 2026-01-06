// Read a Single Digit Number → Print in Words (using switch-case)
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

// Read a Number → Display Weekday

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
        console.log("Enter a valid number between 1 and 7");
}

}

// Read a Number (1, 10, 100, 1000…) → Display Unit/Ten/Hundred/etc

{
    let value = parseInt(process.argv[2]);

switch (value) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    case 10000: console.log("Ten Thousand"); break;
    case 100000: console.log("Lakh"); break;

    default:
        console.log("Enter values only like 1, 10, 100, 1000...");
}

}


// Unit Conversion Program (Feet/Inch/Meter)

{
    let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1:
        console.log(value + " Feet =", value * 12, "Inch");
        break;

    case 2:
        console.log(value + " Feet =", value * 0.3048, "Meter");
        break;

    case 3:
        console.log(value + " Inch =", value / 12, "Feet");
        break;

    case 4:
        console.log(value + " Meter =", value * 3.28084, "Feet");
        break;

    default:
        console.log("Invalid Choice! Enter 1, 2, 3, or 4");
}

}
