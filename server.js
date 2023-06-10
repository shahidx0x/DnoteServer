const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 9000;
const cors = require("cors");
const bodyParser = require("body-parser");
const server_log = require("./middleware/server_log");
const connectDB = require("./config/database");
const auth_router = require("./app/auth/router");
const notes_router = require("./app/notes/router");
require("colors");

//  middleware
app.set("view engine", "ejs");
app.use(express.static("./"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//custom middleware
app.use(server_log);

app.use(auth_router);
app.use(notes_router);

// Connect to the database
connectDB();

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`.bgCyan);
});
