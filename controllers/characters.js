const Characters = require("../models/characters");


module.exports = {

    index: (req,res) => {
        Characters.find({}).then(x =>{
            res.json(x);
        });
    },
    create: (req,res) => {
        const newCharacter = req.body; 

        Character.create(newCharacter).then(x => res.json(x));
    },
    show: (req,res) => {
        Characters.findOne({name: req.params.name}).then(x =>
            res.json(x));
    },
    update: (req,res) => {
        const updatedCharacter = req.body;

        Characters.findOneAndUpdate({name: req.params.name}, updatedCharacter, {
            new: true
        }).then(x => res.json(x));
    },
    destroy: (req,res) => {
        Characters.findOneAndDelete({name: req.params.name}).then(x => res.json(x));
    }
}