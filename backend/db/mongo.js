// Mongo \
const { MongoClient } = require('mongodb');
const config = require('../config/index');

// Url of clubster mongodb
const MONGO_URI = `mongodb+srv://${config.dbUser}:${config.dbPassword}@${config.dbHost}/${config.dbName}?retryWrites=true&w=majority`;

class MongoDB {
  // Iniciallly mongodb
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.db_Name = config.dbName;
  }

  // Connection to mongodb
  connect() {
    if (!MongoDB.connection) {
      MongoDB.connection = new Promise((resolve, reject) => {
        this.client.connect((err) => {
          if (err) {
            reject(err);
          }
          console.log('Connected succesfully');
          resolve(this.client.db(this.db_Name));
        });
      });
    }

    return MongoDB.connection;
  }
}

module.exports = MongoDB;
