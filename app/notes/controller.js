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

