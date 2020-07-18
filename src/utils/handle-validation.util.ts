import { NextFunction, Request, Response } from 'express';
import { Result, validationResult } from 'express-validator';

import { ErrorMessages } from '../models';

export const handleValidationErrors = (req: Request, res: Response, next: NextFunction): Response | void => {
  const errors: Result<ErrorMessages> = validationResult(req).formatWith(({ msg }) => msg);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
