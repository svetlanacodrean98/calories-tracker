const pool = require("./pool");

async function insertRow(time, food, kcal) {
    await pool.query("insert into meals (time, food, kcal) values ($1, $2, $3)", 
        [time, food, kcal]);
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