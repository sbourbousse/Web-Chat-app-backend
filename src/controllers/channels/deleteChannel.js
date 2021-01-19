const Channel = require('../../models/Channel')

module.exports = async function (req, res) {
    Channel.deleteOne({_id: req.params.id}, err => {
        if (err) {
            res.status(500)
            throw err;
        }
        res.status(200).json({
            message: "Channel deleted successfuly"
        })
    });
}