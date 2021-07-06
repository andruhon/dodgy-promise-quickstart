# runaway-promise

Quickstart for vue cli e2e plugin showing runaway promise warning in a very simple setup.
```
(node:3448) Warning: a promise was created in a handler at internal/timers.js:461:21 but was not returned from it, see http://goo.gl/rRqMUw
    at Function.Promise.cast (C:\Users\andrei.kondratev\AppData\Local\Cypress\Cache\7.6.0\Cypress\resources\app\packages\server\node_modules\bluebird\js\release\promise.js:225:13)

```
Also takes quite a long time to terminate the process after "All specs passed!"

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
