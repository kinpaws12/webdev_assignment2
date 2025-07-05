// generateToken.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const userPayload = {
  id: "6659e5adf182a5d4b2456fa3",  
  role: "user"               
};

// const userPayload = {
//   role: ""               
// };


const token = jwt.sign(userPayload, process.env.JWT_SECRET, { expiresIn: "1h" });

console.log("Your JWT token:\n");
console.log(token);