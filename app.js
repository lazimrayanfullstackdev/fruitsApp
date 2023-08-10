const mongoose = require('mongoose');

// Connecting to Database
mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Event listener to execute code once the connection is open
mongoose.connection.once('open', () => {
  console.log('Connected to database');

  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Very Good fruit"
  });
  
  const kiwi = new Fruit({
    name: "Kiwi",
    rating: 6,
    review: "Sour Taste"
  });

  const orange = new Fruit({
    name: "Orange",
    rating: 8,
    review: "I love oranges!"
  });

  const banana = new Fruit({
    name: "Banana",
    rating: 10,
    review: "Healthiest fruit ever."
  });

  Fruit.insertMany([apple,kiwi, orange, banana]).then(function(){
    console.log("Data inserted")  // Success
  }).catch(function(error){
    console.log(error)
    // Now you can close the connection
    mongoose.connection.close();
  });
});
