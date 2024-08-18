const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  hall_id: String,
  data: Buffer,
  contentType: String,
});

const HallSchema = new mongoose.Schema({
  hall_id: {
    type: String,
    required: true,
  },
  hall_name: {
    type: String,
    required: true,
  },
  hall_image: {
    type: ImageSchema,
  },
  hall_address: {
    type: String,
    required: true,
  },
  admin_id: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    // enum: ["Available", "Booked"],
  },
  hall_rental_cost: {
    type: Number,
    required: true,
  },
  hall_max_capacity: {
    type: Number,
    required: true,
  },
  hall_price_per_plate: {
    type: Number,
    // required: true,
  },
  // hall_catering: {
  //   type: String,
  //   required: true,
  //   enum: ["Available", "Not Available"],
  // },
  hall_duration: {
    type: Number,
    required: true,
    // enum: [24],
  },
  hall_rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  reviews: {
    type: Number,
    default: 0,
  },
});

const HallModel = mongoose.model("hall", HallSchema);
module.exports = HallModel;
