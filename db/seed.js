const characters = require("../models/characters");
const data = require("./characters.json");


let charactersData = data.map(x => {
    let myData = {
        id: x.id,
        name: x.name,
        species: x.species,
        image: x.image
    };
return myData;
});

characters.remove({}).then(x => {
   characters.collection.insert(charactersData).then(x => {
        console.log(x);
    });
});