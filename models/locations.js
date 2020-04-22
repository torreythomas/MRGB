const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const locationsSchema = new Schema ({
    id: Number,
    name: String,
    type: String,
    dimension: String
});

const Location = mongoose.model("Location", locationsSchema);

module.exports = Location;