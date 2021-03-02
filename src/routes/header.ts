import * as Hapi from '@hapi/hapi';
import Joi from 'joi';

export const headerRoutes = {
    method: 'GET',
    path: '/headers',
    options: {
        handler: async (_request: Hapi.Request, _h: Hapi.ResponseToolkit): Promise<Record<string, unknown>> => {
            // const timezone = _request.query.timezone as string;
            // const now = MomentTz().tz(timezone).format('HH:mm:ss');
            // return now.toString();

            return _request.headers;
        },
        description: 'returns the raw headers from a request',
        response: {
            schema: Joi.object(),
        },
        tags: ['api'],
    },
};
