const { getFormations, createFormation, deleteFormation, formationUpdate, getOneId } = require('../queries/formation.queries');

exports.saveFormation = async(req, res, next) => {
    try {
        const body = req.body;
        await createFormation(body);
    } catch (e) {
        next(e);
    }
}

exports.updateFormation = async(req, res, next) => {
    const formationId = req.params.formationId;
    try {
        const body = req.body;
        const formation = await getOneId(formationId);
        await formationUpdate(formation, body);
        const formations = await getFormations();
        res.json(formations);
    } catch (e) {
        next(e);
        console.error(e);
    }
}

exports.formationList = async(req, res, next) => {
    try {
        res.setHeader('Access-Control-Allow-Origin', '*');
        const formations = await getFormations();
        res.json(formations);
    } catch (e) {
        next(e);
        console.error(e);
    }
};

exports.formationDelete = async(req, res, next) => {
    try {
        const formationId = req.params.formationId;
        await deleteFormation(formationId);
        const formations = await getFormations();
        res.json(formations);
    } catch (e) {
        next(e);
    }
};