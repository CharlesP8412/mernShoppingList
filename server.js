require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = new express();



//Body Parser MiddleWare
app.use(bodyParser.json());

// const mongoURI = process.env.MONGOURI;
const mongoAddr = process.env.MONGO_ADDR;
const mongoDBName = process.env.MONGO_DB;
// mongoose.connect(mongoURI)
//   .then(() => { console.log("Connected to MongoDB...") })
//   .catch((e) => console.log(e));


mongoose.connect(`mongodb://${mongoAddr}/${mongoDBName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => { console.log("Connected to MongoDB...") })
  .catch((e) => console.log(e));


//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Server listening on port: ${port}`) })