const Location = require("../models/locations");
const data = require("./locations.json");


let locationData =  data.map(locations => {
    let myData = {
        id: locations.id,
        name: locations.name,
        type: locations.type,
        dimension: locations.dimension
    };
return myData;
});

Location.remove({}).then(locations => {
    Location.collection.insert(locationData).then(locations => {
        console.log(locations);
    });
});