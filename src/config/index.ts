// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Dialect } from 'sequelize/types';

export const ApplicationConfig = {
  port: +process.env.PORT || 3000,
};

export const DatabaseConfig = {
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
