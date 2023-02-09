const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cors = require('cors');

require("dotenv").config();
require("./config/database");

const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to verify token and assign user object of payload to req.user.
app.use(require('./config/checkToken'));

// Put API routes here
app.use('/api/users', require('./routes/api/users'))
app.use('/api/skills', require('./routes/api/skills'))
app.use('/api/projects', require('./routes/api/projects'))

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
