// ============================================
// Q10. Divide by Zero Exception
// ============================================

console.log("Q10. Divide by Zero Exception");

let num1 = 10;
let num2 = 0;
console.log("Numerator:", num1);
console.log("Denominator:", num2);
try {
    if (num2 === 0) {
        throw new Error("Denominator cannot be zero");
    }
    
    let result = num1 / num2;
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n-----------------------------\n");


// ============================================
// Q11. Invalid Age Exception
// ============================================

console.log("Q11. Invalid Age Exception");

let age = 21;
console.log("Input Age:", age);
try {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }
    if(age < 18) {
        throw new Error("Not Eligible for voting");
    }
    console.log("Eligible for voting");
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n-----------------------------\n");


// ============================================
// Q13. Custom Exception
// ============================================

console.log("Q13. Custom Exception");

let username="Hello";
console.log("Input Username:", username);
try{
    if(username.length < 5){
        throw new Error("Invalid Username: String length is less than 5");
    }
    console.log("Valid Username");
} catch (error) {
    console.log("Error:", error.message);
}

console.log("\n-----------------------------\n");


// ============================================
// Q15. Multiple Catch Scenarios -- CALCULATOR
// ============================================

console.log("Q15. Multiple Catch Scenarios");

let number1=10;
let number2=2;
console.log("Input Number 1:", number1);
console.log("Input Number 2:", number2);
try{
    if(typeof number1 !== "number" || typeof number2 !== "number"){
        throw new Error("Invalid Input: Both inputs must be numbers");
    }
    if(number2 === 0){
        throw new Error("Division by zero is not allowed");
    }
    console.log("Addition:", number1 + number2);
    console.log("Subtraction:", number1 - number2);
    console.log("Multiplication:", number1 * number2);
    console.log("Division:", number1 / number2);
} catch (error) {
    console.log("Error:", error.message);
}