const notes_router = require("express").Router();
const { create_notes, get_all_notes,get_note_by_email,delete_by_id,edit_note_by_id } = require("./controller");
notes_router.post("/create/note", create_notes);
notes_router.get("/get/all/note", get_all_notes);
notes_router.patch("/edit/note/:id", edit_note_by_id);
notes_router.delete("/delete/note/:id", delete_by_id);
notes_router.get("/get/notes/:email", get_note_by_email);
module.exports = notes_router;
