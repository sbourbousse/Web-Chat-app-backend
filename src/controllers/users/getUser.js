const User = require('../../models/User')

module.exports = async function (req, res) {
    User.find({}).then(users => {
        res.status(200).json({
            users
        })
    })
}