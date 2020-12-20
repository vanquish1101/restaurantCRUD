const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  name_en: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: url,
    required: false
  },
  locatio: {
    type: String,
    required: true
  },
  phone: {
    type: number,
    required: true
  },
  google_map: {
    type: url,
    required: false
  },
  rating: {
    type: number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)