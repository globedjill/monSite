const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formationSchema = schema({
    nomFormation: {
        type: String,
        // maxlenght: 140,
        // minlenght: 3,
        // required: true,
        // index: Number
    },
    option: { type: String },
    image: { type: String, default: 'image_default_formation-min.jpeg' },
    alt: { type: String },
    lieu: { type: String },
    adresse: { type: String },
    dateEntree: { type: Date },
    dateSortie: { type: Date },
    contenu: { type: String },
    liste: { type: [] },
    lieu: { type: String },
}, {
    timestamps: true
});

const Formation = mongoose.model('formation', formationSchema);

module.exports = Formation;