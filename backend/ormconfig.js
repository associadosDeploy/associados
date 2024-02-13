require('dotenv/config');

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  ssl: {
    ca: process.env.POSTGRES_URL_NO_SSL,
  },
  entities: [
    './src/models/*.ts'
  ],
  migrations: [
    './src/database/migrations/*.ts'
  ],
  cli: {
    migrationsDir: './src/database/migrations'
  }
}
