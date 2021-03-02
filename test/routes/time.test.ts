import * as Server from '../../src/server';

describe('GET /time', () => {
    it('responds with 200', async () => {
        const server = await Server.init();
        const res = await server.inject({
            method: 'get',
            url: '/current-time',
        });
        expect(res.statusCode).toBe(200);
        expect(typeof res.payload).toBe('string');
    });
});

describe('GET /health', () => {
    it('responds with an "all good"', async () => {
        const server = await Server.init();
        const res = await server.inject({
            method: 'get',
            url: '/health',
        });
        expect(res.statusCode).toBe(200);
        expect(res.payload).toBe('all is good');
    });
});
