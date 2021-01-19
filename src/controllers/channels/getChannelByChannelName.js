const Channel = require('../../models/Channel')

module.exports = async function (req, res) {
    Channel.findOne({channelName: req.params.channelName}).then(channels => {
        res.status(200).json({
            channels
        })
    })
}