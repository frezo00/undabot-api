import { Application } from 'express';

export abstract class BaseRoute {
  abstract route(app: Application): void;
}
