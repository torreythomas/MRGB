const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const charactersSchema = new Schema ({
    id: Number,
    name: String,
    species: String,
    image: String
});

const Character = mongoose.model("Character", charactersSchema);

module.exports = Character;