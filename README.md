# ew-rate-limiter

Rate limiting middleware for Express.

## Install

```sh
npm install ew-rate-limiter
```

## Usage

```js
const express = require('express');
const rateLimiter = require('ew-rate-limiter');

const app = express();
app.use(rateLimiter());
```

ESM / TypeScript:

```ts
import rateLimiter from 'ew-rate-limiter';
```
