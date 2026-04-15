const pool = require("./pool");

async function insertRow(time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt) {
    await pool.query("insert into meals (time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)", 
        [time, food, energy, weight, fat, saturated_fat, carbs, sugar, fiber, protein, salt]);
}

async function getTodayRows() {
    const { rows } = await pool.query(
        "select * from meals where time::date = CURRENT_DATE"
    );
    return rows;
}

module.exports = {
    getTodayRows,
    insertRow
};