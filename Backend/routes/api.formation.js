const router = require('express').Router();
const Formation = require('../database/models/formation.model');


router.post('/', (req, res) => {
    const body = req.body;
    console.log({ body });

    const newFormation = new Formation(body);

    console.log(newFormation);

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

module.exports = router;