const express = require('express');
const loginModel = require('../model/login');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.postLogin = (req, res, next) => {
    const { userid, password } = req.body;
    // console.log(userid);
    loginModel.queryLogin({ id: userid })
        .then(([row]) => {
            if (row.length !== 0) {
                return bcrypt.compare(password, row[0].password)
                    .then((result) => {
                        if (!result) {
                            res.status(401)
                                .json({
                                    message: "Authentication failed"
                                })
                        }
                        else {

                            let jwtToken = jwt.sign({
                                userid: row[0].userid,
                                expiresIn: 3600
                            },
                                "create-authen-nodejs", {
                                expiresIn: "1h"
                            });
                            res.status(200).json({
                                userid: row[0].userid,
                                title_name: row[0].title_name,
                                name: row[0].name,
                                lastname: row[0].lastname,
                                nickname: row[0].nickname,
                                phone: row[0].phone,
                                email: row[0].email,
                                department: row[0].department,
                                position: row[0].position,
                                status_login: true,
                            });
                        }
                    }).catch((error) => {
                        res.status(401)
                            .json({
                                message: "Authentication failed1",
                                error: error

                            })
                    })
            } else {
                res.status(401)
                    .json({
                        message: "Authentication failed"
                    })
            }
        })
        .catch((error) => {
            res.status(500)
                .json({
                    message: error
                })
        });
};