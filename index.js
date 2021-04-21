// Express
const express = require('express');
const app = express();
const router = express.Router();

//Id of mongodb
const { ObjectId } = require('mongodb');
// Service mongodb
const MongoDB = require('./backend/db/mongo');
const mongoDB = new MongoDB();

// Midllewares
app.use(express.json());

// Routes
app.use('/api/drinks', router);

const collectionDB = 'drinks';

// Get All
router.get('/', async (req, res) => {
  const drinks = await mongoDB.connect().then((db) => {
    return db.collection(collectionDB).find().toArray();
  });
  console.log(drinks);
  res.status(200).json({
    data: drinks,
    message: 'all drinks',
  });
});

// Create new drinks
router.post('/', async (req, res) => {
  const { body: drink } = req;

  const drinkResponse = await mongoDB
    .connect()
    .then((db) => {
      return db.collection(collectionDB).insertOne(drink);
    })
    .then((result) => result.insertedId);

  console.log(drinkResponse);
  res.status(201).json({
    data: drinkResponse,
    message: 'drink created',
  });
});

// Delete new drinks
router.delete('/:drinkId', async (req, res) => {
  const { drinkId } = req.params;

  const drink = await mongoDB
    .connect()
    .then((db) => {
      return db.collection(collectionDB).deleteOne({ _id: ObjectId(drinkId) });
    })
    .then(() => drinkId);

  console.log(drink);
  res.status(200).json({
    data: drink,
    message: 'drink created',
  });
});

// Server listening
app.listen(3006, () => {
  console.log(`Listening http://localhost:3006`);
});
