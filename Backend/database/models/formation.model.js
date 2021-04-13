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
    image: { type: String },
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

// formationSchema.pre('save', function() {
//     return Formation.countDocuments().exec().then(nbr => this.index = nbr + 1);
// })

const Formation = mongoose.model('formation', formationSchema);

module.exports = Formation;