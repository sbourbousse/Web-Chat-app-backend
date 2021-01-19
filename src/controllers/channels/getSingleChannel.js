const Channel = require('../../models/Channel')

module.exports = async function (req, res) {
    console.log(req.params.id)
    Channel.findById(req.params.id, function(err, channel) {
        res.status(200).json({
            channel
        })
    })
}