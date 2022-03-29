var faker = require("@faker-js/faker").faker;
// var axios = require("axios");
var database = { products: [] };

for (var i = 1; i <= 1000; i++) {
  database.products.push({
    id: i,
    name: faker.random.words(),
    cost: Math.random() * 100,
    quantity: Math.random() * 1000,
  });
}

console.log(JSON.stringify(database));
