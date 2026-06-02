const express = require("express");
const cors = require("cors");

const todoRoutes = require("./routes/todo");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Todo API Running"
    });
});

app.use("/api/todos", todoRoutes);

module.exports = app;