const User = require('../../models/User')

module.exports = async function (req, res) {
    User.deleteOne({_id: req.params.id}, err => {
        if (err) {
            res.status(500);
            throw err;
        }
        res.status(200).json({
            message: "User deleted successfuly"
        })
    });
}