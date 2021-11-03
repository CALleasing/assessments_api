const pool = require('../db/db');

exports.queryStaffQuestionWithAnswer = async ({ year, part, userid }) => {
    try {
        return await pool.query("SELECT * FROM question2 LEFT JOIN aws2 ON question2.year = aws2.year and question2.part = aws2.part and question2.number = aws2.number  WHERE aws2.userid = ? and aws2.year = ? and aws2.part = ? order by aws2.number asc"
            , [userid, year, part]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryManagerQuestionWithAnswer = async ({ year, part, userid }) => {
    try {
        return await pool.query("SELECT * FROM question1 LEFT JOIN aws1 ON question1.year = aws1.year and question1.part = aws1.part and question1.number = aws1.number  WHERE aws1.userid = ? and aws1.year = ? and aws1.part = ? order by aws1.number asc"
            , [userid, year, part]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryStaffCommentWithAnswer = async ({ year, part, manager_id, userid }) => {
    try {
        return await pool.query("SELECT * FROM question3 LEFT JOIN aws3 ON question3.year = aws3.year and question3.part = aws3.part and question3.number = aws3.number  WHERE aws3.userid = ? and aws3.year = ? and aws3.part = ? and aws3.manager_id = ? order by aws3.number asc"
            , [userid, year, part, manager_id]);
    }
    catch (err) {
        console.log(err.message);
    }
};

//=============================  STAFF ANSWER =================================

exports.queryStaffAnswer = async ({ year, part, userid, number }) => {
    try {
        return await pool.query("SELECT * FROM aws2 WHERE userid=? and year = ? and part = ? and number= ?",
            [userid, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.insertStaffAnswer = async ({ userid, answer, year, part, number, videoURL, date }) => {
    try {
        return await pool.query("INSERT INTO aws2 (userid, answer, year, part,number,videoURL,date) VALUES (?,?,?,?,?,?,?)",
            [userid, answer, year, part, number, videoURL, date]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.updateStaffAnswer = async ({ userid, answer, year, part, number, videoURL, date }) => {
    try {
        return await pool.query("UPDATE aws2 SET  answer=?,  videoURL=?,date=? WHERE userid=? and year=? and part=? and number=?",
            [answer, videoURL, date, userid, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

//============================= MANAGER ANSWER ===================================

exports.queryManagerAnswer = async ({ year, part, userid, number }) => {
    try {
        return await pool.query("SELECT * FROM aws1 WHERE userid=? and year = ? and part = ? and number= ?",
            [userid, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.insertManagerAnswer = async ({ userid, answer, year, part, number, videoURL, date }) => {
    try {
        return await pool.query("INSERT INTO aws1 (userid, answer, year, part,number,videoURL,date) VALUES (?,?,?,?,?,?,?)",
            [userid, answer, year, part, number, videoURL, date]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.updateManagerAnswer = async ({ userid, answer, year, part, number, videoURL, date }) => {
    try {
        return await pool.query("UPDATE aws1 SET  answer=?,  videoURL=?,date=? WHERE userid=? and year=? and part=? and number=?",
            [answer, videoURL, date, userid, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

//========================= STAFF COMMENT ==============================

exports.queryStaffComment = async ({ year, part, userid, number, manager_id }) => {
    try {
        console.log("GET")
        // return await pool.query("SELECT aws3.userid, aws3.year, aws3.part, aws3.number, question3.qt, aws3.answer, aws3.date, aws3.department FROM `cal2009`.`aws3` INNER JOIN `cal2009`.`question3` ON  aws3.`year` = question3.`year` AND aws3.part = question3.part AND aws3.number = question3.number WHERE aws3.userid = ? AND aws3.year = ? AND aws3.part = ? ORDER BY number ",
        return await pool.query("SELECT * FROM aws3 WHERE userid =? and year = ? and part = ? and number= ? and manager_id =?",
            [userid, year, part, number, manager_id]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryStaffCommentWithManagerIdAndNumber = async ({ year, part, manager_id, number }) => {
    try {
        return await pool.query("SELECT * FROM aws3 LEFT JOIN history ON aws3.userid = history.userid WHERE year = ? and part = ? and manager_id = ? and number= ? ",
            [year, part, manager_id, number]);
    }
    catch (err) {
        console.log(err.message);
    }
}

exports.queryAllStaffCommentWithManagerId = async ({ year, part, manager_id }) => {
    try {
        return await pool.query("SELECT aws3.userid, answer, aws3.year, aws3.part , aws3.number, date, aws3.department, reveal, manager_id, qt, name, lastname, nickname FROM aws3 LEFT JOIN question3 ON aws3.year = question3.year AND aws3.part = question3.part AND aws3.number = question3.number LEFT JOIN history ON aws3.userid = history.userid WHERE aws3.year=? AND aws3.part=? AND `manager_id` = ? ORDER BY userid, aws3.number",
            [year, part, manager_id]);
    }
    catch (err) {
        console.log(err.message);
    }
}

exports.insertStaffComment = async ({ userid, answer, year, part, number, date, department, reveal, manager_id }) => {
    try {
        console.log("INSERT", reveal)
        return await pool.query("INSERT INTO aws3 (userid, answer, year, part, number, date, department, reveal, manager_id) VALUES (?,?,?,?,?,?,?,?,?)",
            [userid, answer, year, part, number, date, department, reveal, manager_id]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.updateStaffComment = async ({ userid, answer, year, part, number, date, reveal, manager_id }) => {
    try {
        console.log("UPDATE", reveal)
        return await pool.query("UPDATE aws3 SET answer=?, date=?, reveal=? WHERE userid=? and year=? and part=? and number=? and manager_id=?",
            [answer, date, reveal, userid, year, part, number, manager_id]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryAllStaffCOmment = async ({ year, part, department }) => {
    try {
        return await pool.query("SELECT * FROM aws3 INNER JOIN history ON aws3.userid = history.userid WHERE aws3.year=? and aws3.part=? and aws3.department=?",
            [year, part, department]);
    }
    catch (err) {
        console.log(err.message);
    }
};
