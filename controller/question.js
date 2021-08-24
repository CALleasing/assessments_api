const express = require('express');
const questionsModel = require('../model/question');

exports.getStaffQuestion = (req, res, next) => {
    const { year, part } = req.params;
    questionsModel.queryStaffQuestion({ year, part })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

exports.getStaffQuestionByNumber = (req, res, next) => {
    const { year, part, number } = req.params;
    questionsModel.queryStaffQuestionByNumber({ year, part, number })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

exports.getManagerQuestion = (req, res, next) => {
    const { year, part } = req.params;
    questionsModel.queryManagerQuestion({ year, part })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

exports.getManagerQuestionByNumber = (req, res, next) => {
    const { year, part, number } = req.params;
    questionsModel.queryManagerQuestionByNumber({ year, part, number })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};


exports.postOrPutStaffQuestion = (req, res, next) => {
    const { year, part, number } = req.params;
    const { question } = req.body;
    // const { answer, videoURL, date } = req.body;

    questionsModel.queryStaffQuestionByNumber({ year, part, number })
        .then(([row]) => {
            if (row.length !== 0) {
                questionsModel.updateStaffQuestion({ year, part, number, question })
                    .then(() => {
                        res.status(201)
                            .json({
                                message: 'update success',
                            })
                    }).catch((error) => {
                        res.status(500)
                            .json({
                                message: error
                            })
                    });
            } else {
                questionsModel.insertStaffQuestion({ year, part, number, question })
                    .then(() => {
                        res.status(201)
                            .json({
                                message: 'insert success',

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

exports.postOrPutManagerQuestion = (req, res, next) => {
    const { year, part, number } = req.params;
    const { question } = req.body;
    // const { answer, videoURL, date } = req.body;

    questionsModel.queryManagerQuestionByNumber({ year, part, number })
        .then(([row]) => {
            if (row.length !== 0) {
                questionsModel.updateManagerQuestion({ year, part, number, question })
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
                questionsModel.insertManagerQuestion({ year, part, number, question })
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

exports.deleteStaffQuestionByNumber = (req, res, next) => {
    const { year, part, number } = req.params;
    questionsModel.deleteStaffQuestionByNumber({ year, part, number })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};

exports.deleteManagerQuestionByNumber = (req, res, next) => {
    const { year, part, number } = req.params;
    questionsModel.deleteManagerQuestionByNumber({ year, part, number })
        .then(([row]) => {
            res.send(row);
        }).catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};