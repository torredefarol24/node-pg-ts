module.exports = {  
  "type": process.env.DATABASE_DRIVER,
  "host": process.env.DATABASE_HOST,
  "port": process.env.DATABASEB_PORT,
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASS,
  "database": process.env.DATABASE_NAME,
  "synchronize": true,
  "migrationsRun" : true,
  "logging": false,
  "entities": [
    "dist/models/**/*.js"
  ],
  "migrations": [
    "dist/migrations/**/*.js"
  ],
  "subscribers": [
    "dist/subscribers/**/*.js"
  ],
  "cli": {
    "entitiesDir": "src/models",
    "migrationsDir": "src/migrations",
    "subscribersDir": "src/subscribers"
  }
}