const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const PORT = 3000;

// Import the travel route
const travelRouter = require("./app_server/routes/travel");

// Set view engine and views path
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app_server", "views"));

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Register routes
app.use("/travel", travelRouter);

// Home page (optional)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
