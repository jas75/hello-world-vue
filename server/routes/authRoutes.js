const express = require("express");
const router = express.Router();
const jwtService = require("../services/jwtService");

router.post("/api/auth/login", (req, res) => {
  console.log("auth login");
  const { email, password } = req.body;
  if (jwtService.isAuthenticated({ email, password }) === false) {
    const status = 401;
    const message = "Incorrect email or password";
    res.status(status).json({ status, message });
    return;
  }
  const access_token = jwtService.createToken({ email, password });
  res.status(200).json({ access_token });
});

module.exports = router;
