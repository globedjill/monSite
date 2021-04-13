const Formation = require("../database/models/formation.model")

exports.getFormations = () => {
    return Formation.find({})
        .sort({ dateSortie: -1 })
        .exec();
}

exports.getOneId = (formationId) => {
    return Formation.findOne({ _id: formationId }).exec();
}

exports.formationUpdate = (formationId, formation) => {
    return Formation.updateOne(formationId, formation)
}

exports.createFormation = (formation) => {
    const newFormation = new Formation(formation);
    return newFormation.save(formation);
}

exports.deleteFormation = (formationId) => {
    return Formation.findByIdAndDelete({ _id: formationId }).exec();
}