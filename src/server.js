const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

// Страницы из src/pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "home.html"));
});
// Страницы из src/pages
app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "projects.html"));
});
app.get("/writing", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "writing.html"));
});
app.get("/photography", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "photography.html"));
});
app.get("/videography", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "videography.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "about.html"));
});
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "src", "pages", "about.html"));
// });

// app.get("/portfolio", (req, res) => {
//   res.sendFile(path.join(__dirname, "src", "pages", "portfolio.html"));
// });

// // 404

// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
// });

app.listen(3000, "127.0.0.1", () => {
  console.log("🚀 http://localhost:3000");
});
