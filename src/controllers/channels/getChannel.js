const Channel = require('../../models/Channel')

module.exports = async function (req, res) {
    Channel.find({}).then(channels => {
        res.status(200).json({
            channels
        })
    })
    
}