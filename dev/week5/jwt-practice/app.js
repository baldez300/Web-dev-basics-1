// configure environment - DO NOT MODIFY
require('dotenv').config();

// Import package
const jwt = require('jsonwebtoken');

// Your code here
const secret = process.env.SECRET_KEY;

// 1. Define payload
let payload = {
    email: 'example@example.com',
    // Add other claims as needed
};

// 2. Sign (create) a JWT containing your email address
let token = jwt.sign(payload, secret, { expiresIn: '1s' });

// See the JWT in the console - DO NOT MODIFY
console.log('JWT:', token);

// 3. Decode a JWT Payload
let decodedPayload = jwt.decode(token);

// See the decoded payload in the console - DO NOT MODIFY
console.log('Decoded Payload:', decodedPayload);

// 4. Verify a JWT
let verifiedPayload = jwt.verify(token, secret);

// See the verified payload in the console - DO NOT MODIFY
console.log('Verified Payload:', verifiedPayload);

// (Optional) Bonus: Catch Error With Invalid Signature
// Generate an alternate secret key and use it
// To "try" to get the payload using jwt.verify
// Then "catch" the error and log it to the console.

// Your code here
try {
    verifiedPayload = jwt.verify(token, 'wrong secret');
} catch (err) {
    console.log('Error with invalid signature:', err.message);
}

// (Optional) Bonus: Catch Error With Expired Token
// First, set the token's expiration (above) to 1 second
// Second, add a setTimeout longer than 1 second
// To "try" to get the payload using jwt.verify (with proper secret)
// Then "catch" the error and log it to the console

// Your code here
setTimeout(() => {
    try {
        verifiedPayload = jwt.verify(token, secret);
    } catch (err) {
        console.log('Error with expired token:', err.message);
    }
}, 2000);
