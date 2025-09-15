const mongoose = require("mongoose");

const MeetingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true,
    },
    photoUrl: {
        type: String,
        required: true,
    },
    location:{
         type: String,

    },
    locDetails:{
        type:String,
    },
    startTimeandDate: {
        type: Date,
        required: true,
    },
    endTimeandDate: {
        type: Date,
        required: true,
    },
    eventType: {
        type: String,
        enum: ['online', 'offline', 'both'],
        required: true
    },
    paid: {
        type: Boolean,
        default: false
    },
    Cost: {
        type: Number,
        default: 0
    },
    DressCode: {
        type: String,
        default: "Formal",
    },
    Age: {
        type: String,
    },
    tags: {
        type: [String],
    },
    hosted: {
        type: String,
    },
    speakers: [{
        name: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: true
        },
        photoUrl: {
            type: String,
            default: ''
        }
    }]
});

const Meeting = mongoose.model("Meeting", MeetingSchema);
module.exports = Meeting;