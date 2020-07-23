import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

import { ContactRoutes, NotFoundRoutes } from './routes';

class App {
  public app: Application;
  private _contactRoutes: ContactRoutes = new ContactRoutes();
  private _notFound: NotFoundRoutes = new NotFoundRoutes();

  constructor() {
    this.app = express();
    this._setMiddlewares();
    this._setRoutes();
  }

  private _setMiddlewares(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private _setRoutes(): void {
    this._contactRoutes.route(this.app);
    this._notFound.route(this.app);
  }
}

export default new App().app;
