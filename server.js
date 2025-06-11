
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("static"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/static/index.html");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
