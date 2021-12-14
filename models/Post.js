const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = model("post", PostSchema);
