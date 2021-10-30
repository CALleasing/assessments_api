const pool = require('../db/db');

exports.queryStaffQuestion = async ({ year, part }) => {
    try {
        return await pool.query("SELECT * FROM question2 WHERE year = ? and part = ?"
            , [year, part]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryStaffQuestionByNumber = async ({ year, part, number }) => {
    try {
        return await pool.query("SELECT * FROM question2 WHERE year = ? and part = ? and number = ?"
            , [year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.insertStaffQuestion = async ({ year, part, number, question }) => {
    try {
        return await pool.query("INSERT INTO question2 (number, year, part, qt) VALUES (?,?,?,?)",
            [number, year, part, question]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.updateStaffQuestion = async ({ year, part, number, question }) => {
    try {
        return await pool.query("UPDATE question2 SET qt=? WHERE year=? and part=? and number=?",
            [question, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};


exports.deleteStaffQuestionByNumber = async ({ year, part, number }) => {
    try {
        return await pool.query("DELETE FROM question2 WHERE year=? and part=? and number=?;",
            [year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryManagerQuestion = async ({ year, part }) => {
    try {
        return await pool.query("SELECT * FROM question1 WHERE year = ? and part = ?"
            , [year, part]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryManagerQuestionByNumber = async ({ year, part, number }) => {
    try {
        return await pool.query("SELECT * FROM question1 WHERE year = ? and part = ? and number = ?"
            , [year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.insertManagerQuestion = async ({ year, part, number, question }) => {
    try {
        return await pool.query("INSERT INTO question1 (number, year, part, qt) VALUES (?,?,?,?)",
            [number, year, part, question, ]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.updateManagerQuestion = async ({ year, part, number, question }) => {
    try {
        return await pool.query("UPDATE question1 SET qt=? WHERE year=? and part=? and number=?",
            [question, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};


exports.deleteManagerQuestionByNumber = async ({ year, part, number }) => {
    try {
        return await pool.query("DELETE FROM question1 WHERE year=? and part=? and number=?;",
            [year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryStaffComment = async ({ year, part }) => {
    try {
        return await pool.query("SELECT * FROM question3 WHERE year = ? and part = ?"
            , [year, part]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.queryStaffCommentByNumber = async ({ year, part, number }) => {
    try {
        return await pool.query("SELECT * FROM question3 WHERE year = ? and part = ? and number = ?"
            , [year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.insertStaffComment = async ({ year, part, number, question }) => {
    try {
        return await pool.query("INSERT INTO question3 (number, year, part, qt) VALUES (?,?,?,?)",
            [number, year, part, question, ]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.updateStaffComment = async ({ year, part, number, question }) => {
    try {
        return await pool.query("UPDATE question3 SET qt=? WHERE year=? and part=? and number=?",
            [question, year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

exports.deleteStaffCommentByNumber = async ({ year, part, number }) => {
    try {
        return await pool.query("DELETE FROM question1 WHERE year=? and part=? and number=?;",
            [year, part, number]);
    }
    catch (err) {
        console.log(err.message);
    }
};

