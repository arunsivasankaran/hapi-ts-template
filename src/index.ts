/* istanbul ignore file */
import { init } from './server';

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

void init().then((server) => {
    return server.start().then((_r) => console.log('Server running on %s', server.info.uri));
});
