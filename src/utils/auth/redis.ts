import Redis from 'ioredis';
import fs from 'fs';

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost',
  port: Number(process.env.REDIS_PORT) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  tls: {
    rejectUnauthorized: true,
    ca: [fs.readFileSync('./certificates/ca-cert.pem')],
  }
});

export default redis;
