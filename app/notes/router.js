const notes_router = require("express").Router();
const { create_notes, get_all_notes } = require("./controller");
notes_router.post("/create/note", create_notes);
notes_router.get("/get/all/note", get_all_notes);
module.exports = notes_router;
