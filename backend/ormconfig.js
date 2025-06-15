require('dotenv/config');

console.log('process.env.POSTGRES_HOST', process.env.POSTGRES_HOST);
console.log('process.env.POSTGRES_USER', process.env.POSTGRES_USER);
console.log('process.env.POSTGRES_PASSWORD', process.env.POSTGRES_PASSWORD);
console.log('process.env.POSTGRES_DATABASE', process.env.POSTGRES_DATABASE);

module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  ssl: { rejectUnauthorized: false },
  synchronize: true,
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
