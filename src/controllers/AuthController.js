const express = require("express");
const UserModel = require("../models/User");
const router = express.Router();

// Middleware para analisar o corpo da solicitação
router.use(express.json());

// Rota de registro de usuário
// Roga para test: http://localhost:3001/auth/register
router.post("/register", (req, res) => {
  console.log(req.body);
  return res.json({
    error: false,
    message: "Registered with success!",
  });
});

module.exports = router;
