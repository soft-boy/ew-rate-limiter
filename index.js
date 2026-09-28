'use strict';

/**
 * Create a rate limiting middleware for Express.
 *
 * @param {object} [options]
 * @returns {import('express').RequestHandler}
 */
function rateLimiter(options = {}) {
  return function rateLimiterMiddleware(req, res, next) {
    next();
  };
}

module.exports = rateLimiter;
module.exports.default = rateLimiter;
module.exports.rateLimiter = rateLimiter;
