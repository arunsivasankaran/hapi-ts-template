import * as Inert from '@hapi/inert';
import * as Vision from '@hapi/vision';
import * as HapiSwagger from 'hapi-swagger';

const options = {
    info: {
        title: 'Time API Documentation',
        version: '0.0.1',
    },
};
export const SwaggerDocs = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options,
    },
];
