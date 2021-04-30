const Experience = require('../database/models/experience.model');

exports.getExperience = () => {
    return Experience.find({})
        .sort({ dateSortie: -1 })
        .exec();
}

exports.createExperience = (experience) => {
    const newExperience = new Experience(experience);
    return newExperience.save(experience);
}

exports.getOneId = (experienceId) => {
    return Experience.findOne({ _id: experienceId }).exec();
}

exports.experienceUpdate = (experienceId, experience) => {
    return Experience.updateOne(experienceId, experience);
}

exports.experienceDelete = (experienceId) => {
    return Experience.findByIdAndDelete({ _id: experienceId }).exec();
}