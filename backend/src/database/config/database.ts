import 'dotenv/config';
import { Options } from 'sequelize';

const config:Options = {
  dialect:'mysql',
  port: Number(process.env.DB_PORT) || 3001,
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'secret',
  database: 'allugator'
}

module.exports = config;