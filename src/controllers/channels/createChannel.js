const Channel = require('../../models/Channel')

module.exports = async function (req, res) {
    const newChannel = new Channel(
    { 
        _id: new Date()-1611050050197, 
        channelName: req.body.channelName, 
        channelMessage: [],
        user_id: []
    }
    );

    newChannel.save(function (err) {
        if (err) {
            res.status(500)
            throw err;
        }
        res.status(200).json({
            message : "channel added!"
        })
    });
    
}