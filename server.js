const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (like HTML, CSS, JS, images) from the current folder
app.use(express.static(path.join(__dirname)));

// Route for the main page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html")); // Serves your HTML file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
