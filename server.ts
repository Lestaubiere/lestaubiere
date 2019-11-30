import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';

import { nextI18next } from './plugins/i18n';

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.get('/ontspanning', (req, res) => {
    return app.render(req, res, '/leisure');
  });

  server.get('/voorzieningen', (req, res) => {
    return app.render(req, res, '/facilities');
  });

  server.get('/omgeving', (req, res) => {
    return app.render(req, res, '/surroundings');
  });

  server.get('/detente', (req, res) => {
    return app.render(req, res, '/leisure');
  });

  server.get('/amenagements', (req, res) => {
    return app.render(req, res, '/facilities');
  });

  server.get('/environs', (req, res) => {
    return app.render(req, res, '/surroundings');
  });

  server.get('*', (req, res) => {
    handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
})();
