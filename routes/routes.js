const express = require('express')
const router = express.Router()
const { getBreedData } = require('../controllers/breedDataController')


router.get('/', (req, res) => {
  res.render('home')
})


router.post('/breedList', async function (req, res) {
  let breed = req.body.title
  let data = await getBreedData(breed)
  res.render('breeds', { dogs: data })
})

module.exports = router
