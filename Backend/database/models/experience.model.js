const mongoose = require('mongoose');
const schema = mongoose.Schema;

const experienceSchema = schema({
    dateEntree: { type: Date },
    dateSortie: { type: Date },
    image: { type: String },
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