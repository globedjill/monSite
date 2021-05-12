const mongoose = require('mongoose');
const env = require(`../environment/${ process.env.NODE_ENV}`);

exports.clientPromise = mongoose.connect(env.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async() => { console.log('Connexion db admin OK') })
    .catch(err => console.log(err + 'Quelque chose n\'a pas fonctionné'));