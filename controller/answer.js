const express = require("express");
const answersModel = require("../model/answer");
const questionsModel = require("../model/question");

exports.getStaffQuestionByUserId = (req, res, next) => {
  const { year, part, userid } = req.params;

  answersModel
    .queryStaffQuestionWithAnswer({ year, part, userid })
    .then(([row]) => {
      if (row.length !== 0) {
        te = [];
        questionsModel
          .queryStaffQuestion({ year, part })
          .then(([row1]) => {
            row1.forEach((element, index) => {
              row.forEach((element1) => {
                if (element.number === element1.number) {
                  te.push({
                    userid: element1.userid,
                    year: element.year,
                    part: element.part,
                    number: element.number,
                    qt: element.qt,
                    answer: element1.answer,
                    videoURL: element1.videoURL,
                    date: element1.date,
                  });
                }
              });
              if (index >= te.length) {
                te.push({
                  year: element.year,
                  part: element.part,
                  number: element.number,
                  qt: element.qt,
                });
              }
            });
            res.send(te);
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        questionsModel
          .queryStaffQuestion({ year, part })
          .then(([row]) => {
            res.send(row);
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.getManagerQuestionByUserId = (req, res, next) => {
  const { year, part, userid } = req.params;

  answersModel
    .queryManagerQuestionWithAnswer({ year, part, userid })
    .then(([row]) => {
      if (row.length !== 0) {
        te = [];

        questionsModel
          .queryManagerQuestion({ year, part })
          .then(([row1]) => {
            row1.forEach((element, index) => {
              row.forEach((element1) => {
                if (element.number === element1.number) {
                  te.push({
                    userid: element1.userid,
                    year: element.year,
                    part: element.part,
                    number: element.number,
                    qt: element.qt,
                    answer: element1.answer,
                    videoURL: element1.videoURL,
                    date: element1.date,
                  });
                }
              });
              if (index >= te.length) {
                te.push({
                  year: element.year,
                  part: element.part,
                  number: element.number,
                  qt: element.qt,
                });
              }
            });
            res.send(te);
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        questionsModel
          .queryManagerQuestion({ year, part })
          .then(([row]) => {
            res.send(row);
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

//============================== STAFF ANSWER ================================

exports.getStaffAnswerFromUserIdByNumber = (req, res, next) => {
  const { year, part, userid, number } = req.params;
  answersModel
    .queryStaffAnswer({ year, part, number, userid })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.postOrPutStaffAnswer = (req, res, next) => {
  const { year, part, userid, number } = req.params;
  const { answer, videoURL, date } = req.body;

  answersModel
    .queryStaffAnswer({ year, part, number, userid })
    .then(([row]) => {
      if (row.length !== 0) {
        answersModel
          .updateStaffAnswer({
            userid,
            answer,
            year,
            part,
            number,
            videoURL,
            date,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        answersModel
          .insertStaffAnswer({
            userid,
            answer,
            year,
            part,
            number,
            videoURL,
            date,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

//============================= STAFF COMMENT ==================================

exports.getAllStaffComment = (req, res, next) => {
  const { year, part, department } = req.params;

  answersModel
    .queryAllStaffCOmment({ year, part, department })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
};

exports.getStaffCommentByUserId = (req, res, next) => {
  const { year, part, manager_id, userid } = req.params;

  answersModel
    .queryStaffCommentWithAnswer({ year, part, manager_id, userid })
    .then(([row]) => {
      if (row.length !== 0) {
        te = [];
        questionsModel
          .queryStaffComment({ year, part })
          .then(([row1]) => {
            row1.forEach((element, index) => {
              row.forEach((element1) => {
                if (element.number === element1.number) {
                  console.log(element1);
                  te.push({
                    userid: element1.userid,
                    year: element.year,
                    part: element.part,
                    number: element.number,
                    qt: element.qt,
                    answer: element1.answer,
                    department: element1.department,
                    date: element1.date,
                    reveal: element1.reveal,
                    manager_id: element1.manager_id,
                  });
                }
              });
              if (index >= te.length) {
                te.push({
                  year: element.year,
                  part: element.part,
                  number: element.number,
                  qt: element.qt,
                });
              }
            });
            res.send(te);
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        questionsModel
          .queryStaffComment({ year, part })
          .then(([row]) => {
            res.send(row);
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.getStaffCommentWithManagerIdAndNumber = (req, res, next) => {
  const { year, part, manager_id, number } = req.params;

  answersModel
    .queryStaffCommentWithManagerIdAndNumber({ year, part, manager_id, number })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.getAllStaffCommentWithManagerId = (req, res, next) => {
  const { year, part, manager_id } = req.params;

  answersModel
    .queryAllStaffCommentWithManagerId({ year, part, manager_id })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.postOrPutStaffComment = (req, res, next) => {
  const { year, part, userid, number } = req.params;
  const { answer, date, department, reveal, manager_id } = req.body;

  answersModel
    .queryStaffComment({ year, part, userid, number, manager_id })
    .then(([row]) => {
      if (row.length !== 0) {
        answersModel
          .updateStaffComment({
            userid,
            answer,
            year,
            part,
            number,
            date,
            reveal,
            manager_id,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        answersModel
          .insertStaffComment({
            userid,
            answer,
            year,
            part,
            number,
            date,
            department,
            reveal,
            manager_id,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

//============================= MANAGER ANSWER ================================

exports.getManagerAnswerFromUserIdByNumber = (req, res, next) => {
  const { year, part, userid, number } = req.params;
  // console.log(req.params);
  answersModel
    .queryManagerAnswer({ year, part, number, userid })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.postOrPutManagerAnswer = (req, res, next) => {
  const { year, part, userid, number } = req.params;
  const { answer, videoURL, date } = req.body;

  answersModel
    .queryManagerAnswer({ userid, year, part, number })
    .then(([row]) => {
      if (row.length !== 0) {
        answersModel
          .updateManagerAnswer({
            userid,
            answer,
            year,
            part,
            number,
            videoURL,
            date,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        answersModel
          .insertManagerAnswer({
            userid,
            answer,
            year,
            part,
            number,
            videoURL,
            date,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

// =================================== MANAGER EMPLOYEE ASSESSMENT ===================================

exports.postEmployeeAssessment = (req, res, next) => {
  const { year, part } = req.params;
  const {
    userid,
    answer,
    reason,
    name,
    lastname,
    nickname,
    date,
    department,
    manager_id,
    manager_name,
    manager_lastname,
    manager_nickname,
  } = req.body;

  answersModel
    .queryEmployeeAssessmentUserIdByManagerid({
      year,
      part,
      userid,
      manager_id,
    })
    .then(([row]) => {
      // res.send(row);
      console.log(row);
      if (row.length !== 0) {
        answersModel
          .updateEmployeeAssessmentByUserid({
            year,
            part,
            userid,
            answer,
            reason,
            date,
          })
          .then(() => {
            res.status(201).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      } else {
        answersModel
          .insertEmployeeAssessment({
            year,
            part,
            userid,
            answer,
            reason,
            name,
            lastname,
            nickname,
            date,
            department,
            manager_id,
            manager_name,
            manager_lastname,
            manager_nickname,
          })
          .then(() => {
            res.status(200).json({
              message: "success",
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: error,
            });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.getAllEmployeeAssessment = (req, res, next) => {
  const { year, part } = req.params;
  answersModel
    .queryAllEmployeeAssessment({ year, part })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.getEmployeeAssessmentByDepartment = (req, res, next) => {
  const { year, part, department } = req.params;

  answersModel
    .queryEmployeeAssessmentByDepartment({ year, part, department })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.getEmployeeAssessmentUserIdByManagerId = (req, res, next) => {
  const { year, part, manager_id, userid } = req.params;
  console.log(req.params);

  answersModel
    .queryEmployeeAssessmentUserIdByManagerid({
      year,
      part,
      userid,
      manager_id,
    })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};

exports.deleteEmployeeAssessmentFromUserid = (req, res, next) => {
  console.log(req.body);
  const { userid, answer, manager_id } = req.body;

  answersModel
    .deleteEmployeeAssessment({ userid, answer, manager_id })
    .then(([row]) => {
      res.send(row);
    })
    .catch((error) => {
      res.status(500).json({
        message: error,
      });
    });
};
