const User = require('../../models/User')

module.exports = async function (req, res) {
    User.findById(req.params.id).populate("channel_id").exec(function(err, user) {
        res.status(200).json({
            user
        })
    })
}