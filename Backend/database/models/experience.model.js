const mongoose = require('mongoose');
const schema = mongoose.Schema;

const experienceSchema = schema({
    dateEntree: { type: Date },
    dateSortie: { type: Date },
    image: { type: String, default: 'http://localhost:3000/Capture d’écran 2021-04-05 à 16.26.17.png' },
    alt: { type: String },
    typeContrat: { type: String },
    enseigne: { type: String },
    lieu: { type: String },
    fonction: { type: String },
}, {
    timestamps: true
});

const Experience = mongoose.model('experience', experienceSchema);

module.exports = Experience;