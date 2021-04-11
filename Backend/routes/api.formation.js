const router = require('express').Router();
const Formation = require('../database/models/formation.model');

router.post('/', (req, res) => {
    const body = req.body;
    const newFormation = new Formation(body);
    newFormation.save()
        .then(formation => {
            console.log(formation);
            res.json(body);
        })
        .catch(err => {
            console.log({ err });
            res.status(400).json(err);
        })
});

router.get('/', (req, res) => {
    Formation.find({}).exec().then(response => {
        res.json(response);
    })
})



module.exports = router;