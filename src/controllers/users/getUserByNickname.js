const User = require('../../models/User')

module.exports = async function (req, res) {
    User.findOne({userNickname: req.params.nickname}).populate("channel_id").exec(function(err, users) {
        res.status(200).json({
            users
        })
    })
}