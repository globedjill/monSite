const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bCrypt = require('bcrypt');

const userSchema = schema({

    pseudo: { type: String, required: true },
    local: {
        email: { type: String, required: true },
        password: { type: String, required: true },
    }
});

userSchema.statics.hashPassword = (password) => {
    return bCrypt.hash(password, 10);
}

userSchema.methods.comparePassword = function(password) {
    return bCrypt.compare(password, this.local.password)
}

const User = mongoose.model('user', userSchema);

module.exports = User;