const Formation = require("../database/models/formation.model")

exports.getFormations = () => {
    return Formation.find({}).exec();
}

exports.createFormation = (formation) => {
    const newFormation = new Formation(body);
    return newFormation.save();
}