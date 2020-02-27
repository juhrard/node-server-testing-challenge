// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: "postgresql://localhost/projects",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
  },

  testing: {
    client: "pg",
    connection: "postgresql://localhost/testing",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // connection: {
    //   database: 'my_db',
    //   user:     'username',
    //   password: 'password'
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./database/migrations",
      tableName: 'knex_migrations'
    }
  }

};
