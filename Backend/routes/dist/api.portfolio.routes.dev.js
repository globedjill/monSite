"use strict";

var router = require('express').Router();

var _require = require('../controllers/portfolio.controllers'),
    savePortfolio = _require.savePortfolio,
    listPortfolio = _require.listPortfolio,
    deleteUnSiteDuPortfolio = _require.deleteUnSiteDuPortfolio,
    updateSite = _require.updateSite;
/*Destinantion api/portfolio*/


router.post('/update/:portfolioId', updateSite);
router.post('/', savePortfolio);
router.get('/', listPortfolio);
router["delete"]('/:portfolioId', deleteUnSiteDuPortfolio);
module.exports = router;