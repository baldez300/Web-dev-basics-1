// const bcrypt = require("bcrypt")
// const saltRounds = 10
// const password = "Admin@123"

// async function testBcrypt() {
//     try {
//       const salt = await bcrypt.genSalt(saltRounds);
//       console.log('Salt: ', salt);
//       const hash = await bcrypt.hash(password, salt);
//       console.log('Hash: ', hash);
//     } catch (err) {
//       console.error(err.message);
//     }
// }

// testBcrypt()


const bcrypt = require('bcrypt');

// Function to hash a password
async function hashPassword() {
  const password = 'mySecurePassword'; // Replace with your password

  try {
    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log('Password:', password);
    console.log('Salt:', salt);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to hash the password
hashPassword();