const db = require("../db/queries");

async function getMeals(req, res) {
    try {
        const rows = await db.getMealsForDate(req.query.date);
        
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({meals: rows}));

    } catch (err) {
        console.error(err);
        res.status(500).send("Getting the rows went wrong");
    }
}

async function createRow(req, res) {
    try {
        console.log({body: req.body})
        const { time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt } = req.body;
        await db.insertRow(time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt);
        res.status(200).end()
    } catch (err) {
        console.error(err);
        res.status(500).send("Creating a row went wrong");
    }
}

module.exports = {
    createRow,
    getMeals,
};