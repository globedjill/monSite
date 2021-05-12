const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://virgil_admin:Ser0t7aTsqhXGdRH@cluster0.z3wus.mongodb.net/monSite?retryWrites=true&w=majority',
    cert: path.join(__dirname, '../ssl/crt/local.crt'),
    key: path.join(__dirname, '../ssl/crt/local.key'),
    portHTTP: 3000,
    portHTTPs: 3001
}