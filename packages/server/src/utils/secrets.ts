import { logger } from './logger';
import { existsSync } from 'fs';
import { config } from 'dotenv';

if (existsSync('.env')) {
  config({ path: '.env' });
} else if (existsSync('.env.example')) {
  config({ path: '.env.example' }); // you can delete this after you create your own .env file!
} else {
  console.log('Using .env file to supply config environment variables');
  logger.debug(
    'Using .env file to supply config environment variables',
  );
}

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
export const SESSION_SECRET = process.env['SESSION_SECRET'];

export const MONGODB_URI = prod
  ? process.env['MONGODB_URI']
  : process.env['MONGODB_URI_LOCAL'];

if (!SESSION_SECRET) {
  console.log('No client secret. Set SESSION_SECRET environment variable.');
  logger.error('No client secret. Set SESSION_SECRET environment variable.');
  process.exit(1);
}

if (!MONGODB_URI) {
  console.log('No mongo connection string. Set MONGODB_URI environment variable.');
  logger.error(
    'No mongo connection string. Set MONGODB_URI environment variable.',
  );
  process.exit(1);
}
