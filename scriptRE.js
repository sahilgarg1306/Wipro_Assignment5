// ============================================
// Q5. Validate Email Address
// ============================================

console.log("Q5. Validate Email Address");

let email = "example@gmail.com";

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
console.log("Input Email:", email);
if (emailPattern.test(email)) {
    console.log("Valid Email");
} else {
    console.log("Invalid Email");
}

console.log("\n-----------------------------\n");


// ============================================
// Q6. Password Validation
// ============================================

console.log("Q6. Password Validation");
console.log("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
let password = "Abc@1234";

let passwordPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

console.log("Input Password:", password);
if (passwordPattern.test(password)) {
    console.log("Valid Password");
} else {
    console.log("Invalid Password");
}

console.log("\n-----------------------------\n");


// ============================================
// Q7. Mobile Number Validation
// ============================================

console.log("Q7. Mobile Number Validation");

let mobile = "9876543210";

let mobilePattern = /^[6-9]\d{9}$/;

console.log("Input Mobile Number:", mobile);
if (mobilePattern.test(mobile)) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}

console.log("\n-----------------------------\n");


// ============================================
// Q8. Extract Numbers from String
// ============================================

console.log("Q8. Extract Numbers from String");

let str1 = "Order123Amount450";

let numbers = str1.match(/\d+/g);
console.log("Input String:", str1);
console.log("Extracted Numbers:", numbers);

console.log("\n-----------------------------\n");


// ============================================
// Q9. Replace Spaces with *
// ============================================

console.log("Q9. Replace Spaces with *");

let str2 = "JavaScript Regular Expression";

let result = str2.replace(/\s+/g, "*");

console.log("Input String:", str2);
console.log("Output:", result);

console.log("\n-----------------------------\n");


// ============================================
// End of Program
// ============================================