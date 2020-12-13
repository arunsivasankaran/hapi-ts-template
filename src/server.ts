import * as Hapi from '@hapi/hapi';
import * as Joi from 'joi';

import { Conf } from './conf';
import { SwaggerDocs } from './plugins/documentation';
import { routes } from './routes/time';

export async function init(): Promise<Hapi.Server> {
    const server = Hapi.server({
        port: Conf.appPort,
        host: 'localhost',
    });

    await server.register(SwaggerDocs);

    server.validator(Joi);

    server.route(routes);

    return server;
}
