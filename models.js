let Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/plantr", {
  logging: false
})

const Gardener = db.define("gardener", {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  }
})

const Plot = db.define("plot", {
  size: {
    type: Sequelize.INTEGER
  },
  shaded: {
    type: Sequelize.BOOLEAN
  }
})

const Vegetable = db.define("vegetable", {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  },
  planted_on: {
    type: Sequelize.DATE
  }
})

// one-to-one
Plot.belongsTo(Gardener);

// many-to-many
Vegetable.belongsToMany(Plot, {through: 'plot/vegetable'});
Plot.belongsToMany(Vegetable, {through: 'plot/vegetable'});

// one-to-one
Gardener.belongsTo(Vegetable, {as: 'favoriteVegetable'})

module.exports = {db, Vegetable, Plot, Gardener};
