const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notesData = new Schema(
  {
    img:String,
    mail: String,
    notes_title: String,
    notes_content: String,
  },

  { timestamps: true }
);
module.exports = mongoose.model("android_NOTES_DATA_MODEL", notesData);
