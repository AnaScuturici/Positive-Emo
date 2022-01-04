// Update with your config settings.

module.exports = {
    client: 'pg',
    connection: process.env.DB_URL || `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/positive`,
    searchPath: "public",
    migration: {
      directory: "./migrations",
    },
    seeding: {
      directory: "./seeds"
    }
};
