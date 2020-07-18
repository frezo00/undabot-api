import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

class App {
  public app: Application;

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
    // Move this into 'routes' folder
    this.app.get('/', (req, res) => {
      res.status(200).json({ message: 'Hello from Node.js!' });
    });
  }
}

export default new App().app;
