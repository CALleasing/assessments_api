const pool = require('../db/db');

exports.queryLogin = async ({ id }) => {
    try {
        // const { userid, password } = req.body;
        return await pool.query("SELECT history.userid, loginqt.password, title_name, name, lastname, nickname, phone, email, department, history.position FROM loginqt LEFT JOIN history ON loginqt.userid = history.userid WHERE loginqt.userid = ?", [id]);
    }
    catch (err) {
        console.log(err.message);
    }
};