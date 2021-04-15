const User = require('../database/models/user.model');

exports.createUser = async(user) => {
    try {
        const hashedPassword = await User.hashPassword(user.password);
        const newUser = new User({
            pseudo: user.pseudo,
            local: {
                email: user.email,
                password: hashedPassword
            }
        })
        return newUser.save();
    } catch (e) {
        throw e
    }
}

// Signin
exports.findUserPerEmail = async(email) => {
    return await User.findOne({ 'local.email': email }).exec();
}

exports.findUserPerId = (id) => {
    return User.findById(id).exec();
}