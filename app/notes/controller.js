const android_NOTES_DATA_MODEL = require("./model");
exports.create_notes = async (req, res) => {
  const { mail, notes_title, notes_content} = req.body;
  try {
    const payload = await android_NOTES_DATA_MODEL.create({
      mail,
      notes_title,
      notes_content,
    });
    if (payload) res.status(201).json({ payload });
  } catch (errors) {
    console.log(errors);
    res.status(500).json({ msg: { errors } });
  }
};

exports.get_all_notes = async (req, res) => {
  let data;
  try {
    data = await android_NOTES_DATA_MODEL.find();
  } catch (error) {
    return next(error);
  }
  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
}

exports.get_note_by_email = async (req, res) => {
  const email = req.params.email; 

  let data;
  try {
    data = await android_NOTES_DATA_MODEL.find({ mail: email });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }

  if (!data) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
  return res.status(200).json({ data });
}

exports.edit_note_by_id = async (req, res) => {
  const id = req.params.id;
  const updated_data = req.body;
  try {
    const note = await android_NOTES_DATA_MODEL.findById(id);
    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }
    
    note.notes_title = updated_data.title;
    note.notes_content = updated_data.content;
    const updatedNote = await note.save();
    
    res.json(updatedNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};


exports.delete_by_id = async (req, res) => {
  const noteId = req.params.id; 
  try {
    await android_NOTES_DATA_MODEL.deleteOne({ _id: noteId });
    res.status(200).json({ message: 'Deletion successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error occurred during deletion' });
  }
}

