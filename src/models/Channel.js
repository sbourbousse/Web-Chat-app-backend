const mongoose = require('mongoose')

const channelSchema = mongoose.Schema({
    _id: Number,
    channelName: String,
    channelMessage: [
        {
            user_id: Number,
            message: String,
            date: Date
        }
    ],
    user_id: [
        Number
    ]
})

module.exports = mongoose.model("Channel", channelSchema, "Channel")