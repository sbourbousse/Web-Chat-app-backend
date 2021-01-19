const Channel = require('../../models/Channel')
const User = require('../../models/User')

module.exports = async function (req, res) {
    User.findByIdAndUpdate(req.body.user_id, {$push: {channel_id: req.body.channel_id}}).then(
        Channel.findByIdAndUpdate(req.body.channel_id, {$push: {user_id: req.body.user_id}}, function(err, result) {
        if (err) {
            res.json({message: err})
        } else {
            res.json({message: result})
        }
    }))
    
    
}