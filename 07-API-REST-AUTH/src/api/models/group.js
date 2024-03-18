const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema(
     {
          name: { type: String },
          title: { type: String },
          tipe: { type: String },
          activities: { type: String },
          users: [{ type: mongoose.Types.ObjectId, ref: "user"}]
     },
     {
          timestamps: true,
          collection: "group"
     }
);

const Group = mongoose.model("group", groupSchema, "group");

module.exports = Group;