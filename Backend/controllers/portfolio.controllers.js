const { createPortfolio, recupTouLePortFolio, deleteOneSiteById, getSiteById, siteUpdate } = require('../queries/portfolio.queries');

exports.savePortfolio = async(req, res, next) => {
    try {
        const body = req.body;
        await createPortfolio(body);
    } catch (e) {
        console.log('erreur de sauvegarde du portfolio');
        next(e);
    }
}

exports.listPortfolio = async(req, res, next) => {
    try {
        const recupList = await recupTouLePortFolio();
        const essai = res.json(recupList);
        console.log(essai);

    } catch (e) {
        console.log('erreur de recuperation de la liste du portfolio');
        next(e);
    }
}

exports.updateSite = async(req, res, next) => {
    try {
        const siteId = req.params.portfolioId;
        const body = req.body;
        const recupSiteById = await getSiteById(siteId);
        await siteUpdate(recupSiteById, body);
        const recupPortfolio = await recupTouLePortFolio();
        res.json(recupPortfolio);
    } catch (e) {
        console.log('une erreur est survenu lors de l\'enregistrement');
        next(e);
    }
}

exports.deleteUnSiteDuPortfolio = async(req, res, next) => {
    try {
        const recupIdDunSite = req.params.portfolioId;
        await deleteOneSiteById(recupIdDunSite);
        const portfolio = await recupTouLePortFolio();
        res.json(portfolio);
    } catch (e) {
        console.log('une erreur est survenu lors de la suppression d\'un site du portfolio');
        next(e);
    }
}