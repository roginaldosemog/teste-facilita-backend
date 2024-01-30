require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "ok!"
    })
})

app.get("/customers", async (req, res) => {
    const clientes = await db.getCustomers();
    res.json(clientes);
})

app.listen(port);

console.log(`Server running at port ${port}`);