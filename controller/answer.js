const express = require('express');
const answersModel = require('../model/answer');
const questionsModel = require('../model/question')

exports.getStaffQuestionByUserId = (req, res, next) => {
    const { year, part, userid } = req.params;

    answersModel.queryStaffQuestionWithAnswer({ year, part, userid })
        .then(([row]) => {
            if (row.length !== 0) {
                te = []
                questionsModel.queryStaffQuestion({ year, part })
                    .then(([row1]) => {
                        row1.forEach((element, index) => {

                            row.forEach((element1) => {

                                if (element.number === element1.number) {
                                    te.push({
                                        userid: element1.userid, year: element.year, part: element.part
                                        , number: element.number, qt: element.qt, answer: element1.answer
                                        , videoURL: element1.videoURL, date: element1.date
                                    })

                                }

                            })
                            if (index >= te.length) {
                                te.push({
                                    year: element.year, part: element.part
                                    , number: element.number, qt: element.qt
                                })
                            }
                        })
                        res.send(te)

                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    })

            } else {
                questionsModel.queryStaffQuestion({ year, part })
                    .then(([row]) => {
                        res.send(row)
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    })
            }

        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

exports.getManagerQuestionByUserId = (req, res, next) => {
    const { year, part, userid } = req.params;

    answersModel.queryManagerQuestionWithAnswer({ year, part, userid })
        .then(([row]) => {

            if (row.length !== 0) {
                te = []

                questionsModel.queryManagerQuestion({ year, part })
                    .then(([row1]) => {
                        row1.forEach((element, index) => {

                            row.forEach((element1) => {

                                if (element.number === element1.number) {
                                    te.push({
                                        userid: element1.userid, year: element.year, part: element.part
                                        , number: element.number, qt: element.qt, answer: element1.answer
                                        , videoURL: element1.videoURL, date: element1.date
                                    })

                                }

                            })
                            if (index >= te.length) {
                                te.push({
                                    year: element.year, part: element.part
                                    , number: element.number, qt: element.qt
                                })
                            }
                        })
                        res.send(te)

                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    })



            } else {
                questionsModel.queryManagerQuestion({ year, part })
                    .then(([row]) => {
                        res.send(row)
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    })

            }

        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        })
};

//============================= STAFF ANSWER ================================

exports.getStaffAnswerFromUserIdByNumber = (req, res, next) => {
    const { year, part, userid, number } = req.params;
    answersModel.queryStaffAnswer({ year, part, number, userid })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
}

exports.postOrPutStaffAnswer = (req, res, next) => {
    const { year, part, userid, number } = req.params;
    const { answer, videoURL, date } = req.body;

    answersModel.queryStaffAnswer({ year, part, number, userid })
        .then(([row]) => {
            if (row.length !== 0) {
                answersModel.updateStaffAnswer({ userid, answer, year, part, number, videoURL, date })
                    .then(() => {
                        res.status(201)
                            .json({
                                message: 'success',
                            })
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    });
            } else {
                answersModel.insertStaffAnswer({ userid, answer, year, part, number, videoURL, date })
                    .then(() => {
                        res.status(201)
                            .json({
                                message: 'success',

                            })
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    })
            }
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

//============================= MANAGER ANSWER ================================

exports.getManagerAnswerFromUserIdByNumber = (req, res, next) => {
    const { year, part, userid, number } = req.params;
    // console.log(req.params);
    answersModel.queryManagerAnswer({ year, part, number, userid })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

exports.postOrPutManagerAnswer = (req, res, next) => {
    const { year, part, userid, number } = req.params;
    const { answer, videoURL, date } = req.body;

    answersModel.queryManagerAnswer({ userid, year, part, number })
        .then(([row]) => {
            if (row.length !== 0) {
                answersModel.updateManagerAnswer({ userid, answer, year, part, number, videoURL, date })
                    .then(() => {
                        res.status(201)
                            .json({
                                message: 'success',
                            })
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    });
            } else {
                answersModel.insertManagerAnswer({ userid, answer, year, part, number, videoURL, date })
                    .then(() => {
                        res.status(201)
                            .json({
                                message: 'success',

                            })
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    })
            }
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

// exports.putManagerAnswer = (req, res, next) => {
//     const { year, part, userid, number } = req.params;
//     const { answer, videoURL, date } = req.body;

//     answersModel.updateManagerAnswer({ userid, answer, year, part, number, videoURL, date })
//         .then(() => {
//             res.status(201)
//                 .json({
//                     message: 'success',
//                 })
//         }).catch((error) => {
//             res.status(500)
//                 .json({
//                     message: error
//                 })
//         });
// };