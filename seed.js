let {db, Vegetable} = require("./models.js");


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


// .finally(() => { // only if using a version of node WITH `finally`
//     db.close()
//   })
