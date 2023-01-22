const { Router } = require('express');
const router = Router();


const { register, login} = require('./controller/controller');
//const { register } = require('./repository/repository');

router.post('/user', register);
router.put('/login',login)
module.exports = router;
