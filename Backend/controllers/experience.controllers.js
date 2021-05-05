const { createExperience, getExperience, getOneId, experienceUpdate, experienceDelete } = require('../queries/experience.queries');

exports.saveExperience = async(req, res, next) => {
    try {
        const body = req.body;
        await createExperience(body);
    } catch (e) {
        next(e);
    }
}

exports.experienceList = async(req, res, next) => {
    try {
        const experience = await getExperience();
        res.json(experience);
    } catch (e) {
        console.log('erreur dans la recuperation de la liste des experiences');
        next(e);
    }
}

exports.updateExperience = async(req, res, next) => {
    const experienceId = req.params.experienceId;
    try {
        const body = req.body;
        const experience = await getOneId(experienceId);
        await experienceUpdate(experience, body);
        const experiences = await getExperience();
        res.json(experiences);
    } catch (e) {
        next(e);
    }
}

exports.deleteExperience = async(req, res, next) => {
    try {
        const experienceId = req.params.experienceId;
        await experienceDelete(experienceId);
        const experiences = await getExperience();
        res.json(experiences);
    } catch (e) {
        next(e);
    }
}