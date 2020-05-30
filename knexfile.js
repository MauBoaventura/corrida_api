// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'password',
      database: 'corrida',
      timezone: 'utc'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'heroku_2d5130b8f8fafc2',
      host: 'us-cdbr-east-05.cleardb.net',
      user: 'b319737a1cb84b',
      password: 'd941d1ae',
      timezone: 'utc'

    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

};
