const bcrypt = require("bcrypt")
const saltRounds = 10
const password = "Admin@123"


async function testBcrypt2() {
    try {
      const hash = await bcrypt.hash(password, saltRounds);
      console.log('Hash2: ', hash);
    } catch (err) {
      console.error(err.message);
    }
}
  
// Call the testBcrypt2 function to execute it
testBcrypt2();