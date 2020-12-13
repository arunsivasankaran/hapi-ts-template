export const options = {
    path: '/health',
    tags: ['health', 'monitor'],
    responses: {
        healthy: {
            message: 'all is good',
        },
        unhealthy: {
            statusCode: 500,
        },
    },
    healthCheck: async function (_server: unknown): Promise<boolean> {
        return true;
    },
    auth: false,
};

export const HealthCHeckPlugin = {
    plugin: require('hapi-alive'),
    options,
};
