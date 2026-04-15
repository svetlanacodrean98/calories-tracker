const db = require("../db/queries");

async function getIndex(req, res) {
    try {
        const rows = await db.getTodayRows();
        res.render("index", { rows });
    } catch (err) {
        console.error(err);
        res.status(500).send("Getting the rows went wrong");
    }
}

async function createRow(req, res) {
    try {
        const { time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt } = req.body;
        console.log(req.body);
        await db.insertRow(time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Creating a row went wrong");
    }
}

module.exports = {
    getIndex,
    createRow
};