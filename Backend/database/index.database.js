const mongoose = require('mongoose');

exports.clientPromise = mongoose.connect('mongodb+srv://virgil_admin:@cluster0.z3wus.mongodb.net/monSite?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async() => { console.log('Connexion db OK') })
    .catch(err => console.log(err));