const router = require('express').Router();
const { savePortfolio, listPortfolio, deleteUnSiteDuPortfolio, updateSite } = require('../controllers/portfolio.controllers');

/*Destinantion api/portfolio*/

router.post('/update/:portfolioId', updateSite);
router.post('/', savePortfolio);
router.get('/', listPortfolio);
router.delete('/:portfolioId', deleteUnSiteDuPortfolio);

module.exports = router;