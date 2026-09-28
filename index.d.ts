import type { RequestHandler } from 'express';

export interface RateLimiterOptions {}

declare function rateLimiter(options?: RateLimiterOptions): RequestHandler;

export default rateLimiter;
export { rateLimiter };
