const { check, validationResult } = require('express-validator');

exports.userSchemaValidation = [
    check('name').isString(),
    check('email').isEmail(),
    check('mob').isMobilePhone(),
    check('dob').isString(),
    check('city').isString(),
    check('states').isString(),
    check('address').isString(),
    check('pincode').isNumeric(),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        else next();
    }
];