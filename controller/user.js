const express = require('express');
const userModel = require('../model/user');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

exports.getAllUsers = (req, res, next) => {
    userModel.queryAllUsers()
        .then(([row]) => {
            console.log(row);
            res.send(row)
        }).catch((err) => {
            res.status(500).json({ message: err })
        });
};

exports.getUserById = (req, res, next) => {
    const userid = req.params.userid;
    // console.log(userid);
    userModel.queryUserById(userid)
        .then(([row]) => {
            console.log(row);
            res.send(row)
        }).catch((err) => {
            res.status(500).json({ message: err })
        });
};

exports.getAllManagerPosition = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    userModel.queryAllManagerPosition(id)
        .then(([row]) => {
            console.log(row);
            res.send(row)
        }).catch((err) => {
            res.status(500).json({ message: err })
        });
};

exports.getUserByDepartment = (req, res, next) => {
    const id = req.params.id;
    // console.log(department);
    userModel.queryUserByDepartment(id)
        .then(([row]) => {
            console.log(row);
            res.send(row)
        }).catch((err) => {
            res.status(500).json({ message: err })
        });
};

exports.getUserStaffAnswerAllChoice = (req, res, next) => {
    const { year, part, choiceCount } = req.params;
    console.log(req.params);
    userModel.queryUserStaffAnswerAllChoice({ year, part, choiceCount })
        .then(([row]) => {
            console.log(row);
            res.send(row)
        }).catch((err) => {
            res.status(500).json({ message: err })
        });
};


