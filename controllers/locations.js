const Locations = require("../models/locations");


module.exports = {

    index: (req,res) => {
        Locations.find({}).then(x =>{
            res.json(x);
        });
    },
    create: (req,res) => {
        const newLocation = req.body; 

       Locations.create(newLocation).then(x => res.json(x));
    },
    show: (req,res) => {
        Locations.findOne({name: req.params.name}).then(x =>
            res.json(x));
    },
    update: (req,res) => {
        const updatedLocation = req.body;

        Locations.findOneAndUpdate({name: req.params.name}, updatedLocation, {
            new: true
        }).then(x => res.json(x));
    },
    destroy: (req,res) => {
        Locations.findOneAndDelete({name: req.params.name}).then(x => res.json(x));
    }
}