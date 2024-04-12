const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
     {
          title: { type: String, required: true },
          img: { type: String, required: true },
          description: { type: String, required: true },
          location: { type: String, required: true },
          user: { type: Schema.Types.ObjectId, ref: "usuarios" },
          comentarios: [{ type: Schema.Types.ObjectId, ref: "comments" }]

     },
     {
          timestamps: true,
          collection: "events"
     }
);

const Event = mongoose.model("events", eventSchema, "events");
module.exports = Event;