const User = require('../../models/User')

module.exports = async function (req, res) {
    const newUser = new User(
        { 
            _id: new Date()-1611050050197, 
            userNickname: req.body.userNickname, 
            channel_id: [],
        }
    );
    
    newUser.save(function (err) {
        if (err) {
            res.status(500)
            throw err;
        }
        res.status(200).json({
            message : "user added!"
        })
    });
}