/* eslint-disable no-undef */

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], 
    createdAt: { type: Date, default: Date.now }, 
});

const Event = mongoose.model("Event", eventSchema, "events");

module.exports = Event;
