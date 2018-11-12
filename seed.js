let db = require("models.js");

db.sync({force: true}).then(() => {
  console.log('Database synced!')
  db.close();
}).catch(function(err) {
  console.log('Disaster! Something went wrong! ')
  console.log(err)
  db.close();
})
// .finally(() => { // only if using a version of node WITH `finally`
//     db.close()
//   })
