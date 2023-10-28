const express = require('express');
const router = express.Router();
const flipController=require('../controller/flipController');
router.route('/')
.get(flipController.getFlipUsers)

router.route('/user')
.get(flipController.getFlipUsers)
.post(flipController.postFlipUsers)

router.route('/user/register')
.get(flipController.getFlipUsersRegister)
.post(flipController.postFlipUsersRegister)

router.route('/user/delete')
.get(flipController.getFlipUsersDelete)
.post(flipController.postFlipUsersDelete)

router.route('/user/update')
.get(flipController.getFlipUsersUpdate)
.post(flipController.postFlipUsersUpdate)



module.exports=router;






