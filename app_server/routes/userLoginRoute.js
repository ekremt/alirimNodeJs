const express = require('express');
const router = express.Router();

const ctrlUserLogin=require('../controllers/userLoginController');

router.get('/',ctrlUserLogin.index);

module.exports=router;