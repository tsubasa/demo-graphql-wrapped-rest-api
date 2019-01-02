const { send } = require('micro');
const { router, get } = require('microrouter');

const itemData = require('../data/items.json');
const categoryData = require('../data/categories.json');
const specData = require('../data/specs.json');

const items = (req, res) => {
  console.log(`/items`)
  const { items } = itemData
  return send(res, 200, items)
}

const itemById = (req, res) => {
  console.log(`/items/:id`)
  const { items } = itemData
  const itemIndex = items.findIndex(item => item.id === Number(req.params.id))
  return send(res, 200, items[itemIndex])
}

const categories = (req, res) => {
  console.log(`/categories`)
  const { categories } = categoryData
  return send(res, 200, categories)
}

const categoryById = (req, res) => {
  console.log(`/categories/:id`)
  const { categories } = categoryData
  const categoryIndex = categories.findIndex(category => category.id === Number(req.params.id))
  return send(res, 200, categories[categoryIndex])
}

const specs = (req, res) => {
  console.log(`/specs`)
  const { specs } = specData
  return send(res, 200, specs)
}

const specById = (req, res) => {
  console.log(`/specs/:id`)
  const { specs } = specData
  const specIndex = specs.findIndex(spec => spec.id === Number(req.params.id))
  return send(res, 200, specs[specIndex])
}

const notfound = (req, res) => send(res, 404, 'Not found')

module.exports = router(
  get('/items/:id', itemById),
  get('/items', items),
  get('/categories/:id', categoryById),
  get('/categories', categories),
  get('/specs/:id', specById),
  get('/specs', specs),
  get('/*', notfound),
)
