// const config = {
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: "postgres"
// }
const config = {
  username: 'main_owner',
  password: '',
  database: 'main',
  host: '',
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
module.exports = {
  development: config,
  test: config,
  production: config
}