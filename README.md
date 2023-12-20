<!-- All MERN development basics -->
1. NodeJS 
2. ExpressJS
3. MongoDB
4. ReactJS

<!-- All installations -->

npm install create-react-app
npm install express
npm install mongoose
npm install nodemon
npm install concurrently

<!-- Token creation -->
Creating `TOKEN_SECRETS` for JWT token generation`
Create a file called `.env` in the root folder

Open new terminal and run `node` to open node console

Run `require('crypto').randomBytes(64).toString('hex')`` to generate a random string

Copy the string and paste it to `.env`n file as `ACCESS_TOKEN_SECRET=yourRandomString`

Do the same for `REFRESH_TOKEN_SECRET`just like above