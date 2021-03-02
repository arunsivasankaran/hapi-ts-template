import * as Hapi from '@hapi/hapi';
import Joi from 'joi';
import _ from 'lodash';
import MomentTz from 'moment-timezone';

export const timeRoutes = {
    method: 'GET',
    path: '/current-time',
    options: {
        handler: async (_request: Hapi.Request, _h: Hapi.ResponseToolkit): Promise<string> => {
            const timezone = _request.query.timezone as string;
            const now = MomentTz().tz(timezone).format('HH:mm:ss');
            return now.toString();
        },
        description: 'returns the current time',
        notes: [
            'NOTE: "timezone" defaults to "America/Los_Angeles"',
            'NOTE: The dropdown for "timezone" only list a small subset...BUT any valid timezone should work',
        ],
        validate: {
            query: Joi.object().keys({
                timezone: Joi.string()
                    .allow(..._.sampleSize(MomentTz.tz.zonesForCountry('US'), 10))
                    .default('America/Los_Angeles'),
            }),
        },
        tags: ['api'],
    },
};
