const notes_router = require("express").Router();
const { create_notes } = require("./controller");
notes_router.post("/create/note", create_notes);
module.exports = notes_router;
