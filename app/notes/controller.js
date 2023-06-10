const android_NOTES_DATA_MODEL = require("./model");
exports.create_notes = async (req, res) => {
  const { mail, notes_title, notes_content } = req.body;
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


