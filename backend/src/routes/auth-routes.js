const express = require('express')
const {resgisterUser , LoginUser , LogoutUser} = require('../Controllers/auth-controller')
const router = express.Router();

router.post("/register",resgisterUser)

router.post("/login",LoginUser)

router.post("/logout",LogoutUser)

module.exports = router;