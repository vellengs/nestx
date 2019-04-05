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

const envMapping: { [k: string]: string } = {
  production: 'MONGODB_URI_PRODUCTION',
  development: 'MONGODB_URI_DEV',
  test: 'MONGODB_URI_TEST'
};

let mongoUriKey: string = envMapping[ENVIRONMENT] || 'MONGODB_URI_TEST';

export const MONGODB_URI = process.env[mongoUriKey];
export const SESSION_SECRET = process.env['SESSION_SECRET'];
export const PORT = process.env['PORT'] || 5600;

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
