import { Application, Request, Response } from 'express';

export class NotFoundRoutes {
  public route(app: Application): void {
    // Mismatch URL
    app.all('*', (_req: Request, res: Response) => {
      res.status(404).send({ message: 'Invalid route!' });
    });
  }
}
