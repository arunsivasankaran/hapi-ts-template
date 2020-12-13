import * as Server from '../../src/server';

describe('GET /time', () => {
    it('responds with 200', async () => {
        const server = await Server.init();
        const res = await server.inject({
            method: 'get',
            url: '/current-time',
        });
        expect(res.statusCode).toBe(200);
        // todo: mock moment and test
        expect(typeof res.payload).toBe('string');
    });
});
