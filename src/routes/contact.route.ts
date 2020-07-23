import { Application, Request, Response } from 'express';

import { BaseRoute } from '../models';
import { handleValidationErrors, Validators } from '../utils';

export class ContactRoutes extends BaseRoute {
  public route(app: Application): void {
    app.post(
      '/api/contact',
      [Validators.email('email'), Validators.message('message')],
      handleValidationErrors,
      (_req: Request, res: Response) => {
        res.status(200).json({ message: 'Your message has been sent!' });
      }
    );
  }
}
