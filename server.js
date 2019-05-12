const express = require("express");
const users = require("./routes/api_v1/users");
const profile = require("./routes/api_v1/profile");
const posts = require("./routes/api_v1/posts");

const app = express();

app.get("/", (req, res) => res.send("Hello World"));

//Use routes
app.use("/api_v1/users", users);
app.use("/api_v1/profile", profile);
app.use("/api_v1/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
