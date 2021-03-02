import * as Hapi from '@hapi/hapi';
import * as Joi from 'joi';

import { Conf } from './conf';
import { SwaggerDocs } from './plugins/documentation';
import { HealthCHeckPlugin } from './plugins/health';
import { headerRoutes } from './routes/header';
import { timeRoutes } from './routes/time';

export async function init(): Promise<Hapi.Server> {
    const server = Hapi.server({
        port: Conf.appPort,
        host: 'localhost',
    });

    await server.register(SwaggerDocs);
    await server.register(HealthCHeckPlugin);

    server.validator(Joi);

    server.route(timeRoutes);
    server.route(headerRoutes);

    return server;
}
