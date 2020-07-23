import { ValidationChain, check } from 'express-validator';

export class Validators {
  static email(field: string): ValidationChain {
    return check(field)
      .exists({ checkFalsy: true })
      .withMessage(`'${field}' field is required.`)
      .bail()
      .normalizeEmail()
      .isEmail()
      .withMessage(`Invalid email format for '${field}' field.`);
  }

  static message(field: string): ValidationChain {
    return check(field)
      .exists({ checkFalsy: true })
      .withMessage(`'${field}' field is required.`)
      .bail()
      .isLength({ min: 30, max: 1000 })
      .withMessage(`'${field}' field requires minimum 30 and maximum 1000 characters.`);
  }
}
