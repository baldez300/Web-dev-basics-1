const bcrypt = require("bcrypt")
const saltRounds = 10
const password = "Admin@123"

async function testBcrypt() {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      console.log('Salt: ', salt);
      const hash = await bcrypt.hash(password, salt);
      console.log('Hash: ', hash);
    } catch (err) {
      console.error(err.message);
    }
}

testBcrypt()