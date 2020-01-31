const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {
    const routes = require('./routes');
    const server = express();
    const handler = app.getRequestHandler();
    const handle = routes.getRequestHandler(app);
    server.use(handler);

    server.use('/', express.static(path.resolve(__dirname, 'public')));
    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3000');
    });
});
