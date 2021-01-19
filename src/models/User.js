const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = mongoose.Schema({
    _id: Number,
    userNickname: String,
    channel_id: [
        {type: Schema.Types.Number, ref: 'Channel'}
    ]
})

module.exports = mongoose.model("User", userSchema, "User")