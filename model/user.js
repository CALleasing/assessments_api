const pool = require('../db/db');

exports.queryAllUsers = async () => {
    try {
        // const { userid, password } = req.body;
        return await pool.query("SELECT * FROM history");
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryAllManagerPosition = async (id) => {
    try {
        return await pool.query("SELECT * FROM history WHERE position = ?", [id]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryUserById = async (userid) => {
    try {
        return await pool.query("SELECT * FROM history WHERE userid = ?", [userid]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryUserByDepartment = async (id) => {
    // console.log(department)
    try {
        return await pool.query("SELECT * FROM history WHERE department = ?", [id]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryUserStaffAnswerAllChoice = async ({ year, part, choiceCount }) => {
    try {
        return await pool.query("SELECT  *  FROM history LEFT JOIN aws2 ON aws2.userid = history.userid WHERE aws2.year = ? and aws2.part = ? GROUP BY aws2.userid HAVING count(aws2.number) >= ?",
            [year, part, choiceCount]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryUserManagerAnswerAllChoice = async ({ year, part, choiseCount }) => {
    try {
        return await pool.query("SELECT  *  FROM history LEFT JOIN aws1 ON aws1.userid = history.userid WHERE aws1.year = ? and aws1.part = ? GROUP BY aws1.userid HAVING count(aws1.number) >= ?",
            [year, part, choiseCount]);
    }
    catch (err) {
        console.log(err.message);
    }
};

// exports.queryUserByDepartment = async ({ id }) => {
//     try {
//         return await pool.query("SELECT * FROM history LEFT JOIN aws2 ON aws2.userid = history.userid where history.department = ? and GROUP BY aws2.userid",
//         [department]);
//     }
//     catch (err) {
//         console.log(err.message);
//     }
// }

