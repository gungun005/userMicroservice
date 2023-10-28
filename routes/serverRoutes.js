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
.delete(flipController.getFlipUsersDelete)

router.route('/user/update')
.post(flipController.updateFlipUsersUpdate)



module.exports=router;






