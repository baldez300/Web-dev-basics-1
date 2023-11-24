// const bcrypt = require("bcrypt")
// const saltRounds = 10
// const password = "Admin@123"


// async function testBcrypt2() {
//     try {
//       const hash = await bcrypt.hash(password, saltRounds);
//       console.log('Hash2: ', hash);
//     } catch (err) {
//       console.error(err.message);
//     }
// }
  
// // Call the testBcrypt2 function to execute it
// testBcrypt2();


const bcrypt = require('bcrypt');

// Function to compare a password with a hash
async function comparePassword() {
  const inputPassword = 'mySecurePassword'; // Replace with the password you want to compare
  const hashedPassword = '$2b$10$xgOnqFLynL3YHw12PYm.punP.yyG1LLt/FmM53zY4OtGD7wPa.uYS'; // Replace with a hashed password stored in your application

  try {
    // Compare the input password with the stored hashed password
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);

    if (isMatch) {
      console.log('Password is correct.');
    } else {
      console.log('Password is incorrect.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to compare the password
comparePassword();