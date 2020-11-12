# Hapi TS Template

## TODO

- [ ] auto reload on change
- [ ] layered folder structure
- [ ] checklist for https://12factor.net/
- [ ] postgres and redis
- [ ] tracing
- [ ] logging
- [ ] sentry?

```
// run server
npm run build // if have not already
node build/src/index.js
// OR
npm run server:timeserver
```

Once the server is running, you can visit the swagger docs local site [here](http://localhost:3000/documentation).
The dropdown only lists a subset of timezones available. But any valid timezone should work.

Example curl request
```
curl -X GET "http://localhost:3000/current-time?timezone=America%2FLos_Angeles" -H "accept: application/json"
```
Notes
1. The server exposes a single endpoint at `/current-time`. 
2. The endpoint takes an optional query param `timezone`. The server uses a default value of `America/Los_Angeles` if no timezone is provided
