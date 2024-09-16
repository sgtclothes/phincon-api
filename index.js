const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/test", (req, res) => {
    res.send("Hello, Test Phincon!");
});

// Menjalankan server
const port = process.env.PORT || 3000; // gunakan PORT dari environment atau default ke 3000
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
