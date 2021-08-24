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
