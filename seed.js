let {db, Vegetable, Gardener} = require("./models.js");


db.sync().then(() => {
  console.log('Database synced!')
  db.close();
}).catch(function(err) {
  console.log('Disaster! Something went wrong! ')
  console.log(err)
  db.close();
});

const vegetables = [
  {name: 'potato', color: 'red', planted_on: new Date()},
  {name: 'carrot', color: 'yellow', planted_on: new Date()}];
vegetables.map(veg => {
  let res = Vegetable.create(veg);
  console.log(res);
  return res;
});
Promise.all(vegetables)
  .then(values => {
    console.log(values);
  })
  .catch(err => {
    console.log(err);
  });


const gardenerData = [
  {name: 'alice', age: 83}
  // {name: 'q', age: 25}
]
// gardener.map(gardener => Gardener.create(gardener))

Gardener.bulkCreate(gardenerData).then(() => {
  return Gardener.findAll();
}).then(gard => {
  console.log(gard)
})

Promise.all([Gardener.bulkCreate(gardenerData).then(() => {
  return Gardener.findAll();
}).then(gard => {
  console.log(gard)
})])

// .finally(() => { // only if using a version of node WITH `finally`
//     db.close()
//   })
