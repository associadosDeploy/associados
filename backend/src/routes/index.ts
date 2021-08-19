import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import associatesRouter from './associates.routes';
import coursesRouter from './courses.routes';
import freeRouter from './free.routes';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);
routes.use('/free', freeRouter);

routes.use((request, response, next) => {
  ensureAuthenticated(request, response, next);
});

routes.use('/associates', associatesRouter);
routes.use('/courses', coursesRouter);

export default routes;
