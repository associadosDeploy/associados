import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import associatesRouter from './associates.routes';
import coursesRouter from './courses.routes';
import freeRouter from './free.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import { Request, Response, NextFunction } from 'express';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);
routes.use('/free', freeRouter);

routes.use((request:Request, response:Response, next:NextFunction) => {
  ensureAuthenticated(request, response, next);
});

routes.use('/associates', associatesRouter);
routes.use('/courses', coursesRouter);

export default routes;
