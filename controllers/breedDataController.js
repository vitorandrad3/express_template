const baseApiUrl = 'https://api.thedogapi.com/v1/breeds/'
const Breed = require('../models/breedModel')
const axios = require('axios')


async function getBreedData(breed) {
    let apiUrl = baseApiUrl + 'search?q=' + breed
    let response = await axios.get(apiUrl)
    const breeds = response.data.map((breedData) => {
        const { id, name, temperament, origin, weight, height, life_span, reference_image_id } = breedData
        return new Breed(id, name, temperament, origin, weight, height, life_span, reference_image_id)
    })
    return breeds
}


module.exports = { getBreedData }
