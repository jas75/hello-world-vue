/* eslint-disable @typescript-eslint/no-unused-vars */
const fs = require("fs");
const jwt = require("jsonwebtoken");
const userdb = JSON.parse(fs.readFileSync("./mock/users.json", "UTF-8"));

const SECRET_KEY = "123456789";
const expiresIn = "1h";
// Create a token from a payload
function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

// Verify the token
function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY, (err, decode) =>
    decode !== undefined ? decode : err
  );
}

// Check if the user exists in database
function isAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

module.exports = {
  isAuthenticated,
  verifyToken,
  createToken,
};
