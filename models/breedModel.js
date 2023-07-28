// models/Breed.js
class Breed {
    constructor(id, name, temperament, origin, weight, height, life_span, reference_image_id) {
        this.id = id
        this.name = name
        this.temperament = temperament
        this.origin = origin
        this.weight = weight
        this.height = height
        this.life_span = life_span
        this.reference_image_id = reference_image_id
    }

}

module.exports = Breed


