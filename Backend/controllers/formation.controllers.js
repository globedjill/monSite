const { getFormations, createFormation } = require('../queries/formation.queries');

exports.saveFormation = async(req, res) => {
    try {
        const body = req.body;
        console.log(body);
        await createFormation(body);
        res.json(body);
    } catch (e) {
        console.error(e);
    }
}

exports.formationList = async(req, res) => {
    try {
        const formations = await getFormations();
        res.json(formations);
    } catch (e) {
        console.error(e);
    }
};

exports.formationRepucOne = async(req, res) => {
    try {
        const formation = await Formation.find({ nomFormation: "virgil" }).exec();
        res.json(formation);
        console.log(formation);
    } catch (e) {
        console.error(e)
    }
};

exports.formationDelete = async(req, res, next) => {
    try {
        const formationId = req.params.formationId;
        await deleteFormation(formationId);

    } catch (e) {
        next()
    }
}