// Module dependencies.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema definition of Pokemon collection
// FIXME: Joint collection with type
const pokemon = new Schema({
    base: {
        Attack: Number,
        Defense: Number,
        HP: Number,
        SpAtk: Number,
        SpDef: Number,
        Speed: Number,
    },
    cname: String,
    ename: String,
    id: Number,
    jname: String,
    skills: {
        egg: [Number],
        level_up: [Number],
        tm: [Number],
        transfer: [Number],
        tutor: [Number],
    },
    type: [{ type: Schema.Types.ObjectId, ref: 'Type' }]
});

// Define model 

let Pokemon = mongoose.model('Pokemon', pokemon);

module.exports = Pokemon;