import * as Hapi from '@hapi/hapi';
import Joi from 'joi';

export const headerRoutes = {
    method: 'GET',
    path: '/headers',
    options: {
        handler: async (_request: Hapi.Request, _h: Hapi.ResponseToolkit): Promise<any> => {
            // const timezone = _request.query.timezone as string;
            // const now = MomentTz().tz(timezone).format('HH:mm:ss');
            // return now.toString();

            console.log(_request.headers);
            return _request.headers;
        },
        description: 'returns the current time',
        notes: [
            'NOTE: "timezone" defaults to "America/Los_Angeles"',
            'NOTE: The dropdown for "timezone" only list a small subset...BUT any valid timezone should work',
        ],
        response: {
            schema: Joi.object(),
        },
        tags: ['api'],
    },
};
