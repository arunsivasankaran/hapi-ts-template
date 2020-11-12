import Inert = require('@hapi/inert')
import Vision = require('@hapi/vision')
import HapiSwagger = require('hapi-swagger')

const options = {
    info: {
        title: 'Time API Documentation',
        version: '0.0.1',
    },
}
export const SwaggerDocs = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options,
    },
]
