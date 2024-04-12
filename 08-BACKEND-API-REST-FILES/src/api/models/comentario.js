const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
     {
          text: { type: String, required: true },
          event: { type: Schema.Types.ObjectId, ref: "events" }
     },
     {
          timestamps: true,
          collection: "comments"
     }
);

const Comment = mongoose.model("comments", commentSchema, "comments");
module.exports = Comment;