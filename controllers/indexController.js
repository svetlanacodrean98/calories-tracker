const db = require("../db/queries");

async function getIndex(req, res) {
    const rows = await db.getTodayRows();
    res.render("index", {
        rows: rows
    });
}

async function createRow(req, res) {
    try {
        const { time, food, kcal } = req.body;
        await db.insertRow(time, food, kcal);
        res.redirect("/");
    }
    catch(err) {
        res.status(500).send("Something went wrong");
    }
}

module.exports = {
    getIndex,
    createRow
};