const express = require("express");
const userRoutes = require("./routes/users");
const tasksRoutes = require("./routes/tasks");

require("./db/mongoose");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(userRoutes);
app.use(tasksRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
