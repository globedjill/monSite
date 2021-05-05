const mongoose = require('mongoose');
const schema = mongoose.Schema;

const portfolioSchema = schema({
    name: { type: String },
    lienSite: { type: String },
    description: { type: String },
    lienGit: { type: String },
    image: { type: String }
}, {
    timestamps: true
});

const Portfolio = mongoose.model('portfolio', portfolioSchema);
module.exports = Portfolio;