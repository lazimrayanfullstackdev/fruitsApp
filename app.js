//New Code
const mongoose = require('mongoose');

// Connecting to Database
mongoose.connect('mongodb://127.0.0.1:27017/FruitsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => {
  console.log('Connected to database');

  const fruitSchema = new mongoose.Schema({
    name: String,
    rating: {
      type: Number,
      min: 1,
      max: 10
    },
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const peopleSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
  });

  const papaya = new Fruit({
    name: "Papaya",
    rating: 10,
    review: "Great for Blood Production"
  });

  papaya.save();

  const People = mongoose.model("People",peopleSchema);

  // const people = new People({
  //   name: "Lazim",
  //   age: 28,
  //   favouriteFruit: pineapple
  // });

  //people.save();
  
//   // const kiwi = new Fruit({
//   //   name: "Kiwi",
//   //   rating: 6,
//   //   review: "Sour Taste"
//   // });

//   // const orange = new Fruit({
//   //   name: "Orange",
//   //   rating: 8,
//   //   review: "I love oranges!"
//   // });

//   // const banana = new Fruit({
//   //   name: "Banana",
//   //   rating: 10,
//   //   review: "Healthiest fruit ever."
//   // });

//   // // Inserting data using insertMany
//   // // Fruit.insertMany([apple, kiwi, orange, banana]).then(function(fruits) {
//   // //   console.log("Data inserted", fruits); // Success
//   // //   mongoose.connection.close(); // Close the connection
//   // // }).catch(function(error) {
//   // //   console.log(error);
//   // //   mongoose.connection.close(); // Close the connection on error as well
//   // // });
  // const jackfruit = new Fruit({
  //   rating: 8,
  //   review: "Best energetic fruit!."
  // });

  Fruit.find().then(function(fruits) {
    fruits.forEach(function(fruit) {
      console.log("Fruit name:", fruit.name);
    });
    mongoose.connection.close();
  }).catch(function(error) {
    console.log(error);
  });

People.updateOne({name:"John"}, {favouriteFruit: papaya }).then(function(result){
  console.log("Updated Document");
}).catch(function(error){
  console.log(error);
});
//   Fruit.updateOne({ _id: "64dc983ff9bea84eef65ed22" }, { name: "Jackfruit" }).then(function(result) {
//     console.log("Updated Name!");
//   }).catch(function(error) {
//     console.log(error);
//   });

    // Fruit.deleteOne({name:"Peach"}).then(function(fruit){
    //   console.log("Deleted ");
    // }).catch(function(error){
    //   console.log(error);
    // })
});
