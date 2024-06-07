const express = require('express');
const router = express.Router();
const flipController=require('../controller/flipController');
const validate = require('../validations/user.validation');

router.route('/')
.get(flipController.getFlipUsers)

router.route('/user')
.get(flipController.getFlipUsers)
.post(validate.userSchemaValidation,flipController.postFlipUsers)

router.route('/user/register')
.get(flipController.getFlipUsersRegister)
.post(validate.userSchemaValidation, flipController.postFlipUsersRegister)
.patch(flipController.updateFlipUsersUpdate)

router.route('/user/delete')
.delete(flipController.getFlipUsersDelete)




module.exports=router;






