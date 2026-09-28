'use strict';

const test = require('node:test');
const assert = require('node:assert');
const express = require('express');
const rateLimiter = require('..');

test('passes requests through to the next handler', async () => {
  const app = express();
  app.use(rateLimiter());
  app.get('/', (req, res) => res.send('ok'));

  const server = app.listen(0);
  try {
    const { port } = server.address();
    const res = await fetch(`http://localhost:${port}/`);
    assert.strictEqual(res.status, 200);
    assert.strictEqual(await res.text(), 'ok');
  } finally {
    server.close();
  }
});
