import { Application, Request, Response } from 'express';

import { ErrorMessages } from '../models';

export class NotFoundRoutes {
  public route(app: Application): void {
    // Mismatch URL
    app.all('*', (_req: Request, res: Response) => {
      const errorResponse: ErrorMessages = {
        errors: ['Invalid API URL']
      };
      res.status(404).send(errorResponse);
    });
  }
}
