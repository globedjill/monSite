const Portfolio = require('../database/models/portfolio.model');

exports.recupTouLePortFolio = () => {
    return Portfolio.find({})
        .exec();
}

exports.getSiteById = (siteId) => {
    return Portfolio.findOne({ _id: siteId }).exec();
}

exports.siteUpdate = (oldValues, newValues) => {
    return Portfolio.updateOne(oldValues, newValues);
}

exports.createPortfolio = (portfolio) => {
    const newPortfolio = new Portfolio(portfolio);
    return newPortfolio.save(portfolio);
}


exports.deleteOneSiteById = (siteId) => {
    return Portfolio.findByIdAndDelete({ _id: siteId }).exec();
}