const express = require("express");

const cors = require("cors");
const userRoutes = require("./routes/user");
const loginRoutes = require("./routes/login");
const answerRoutes = require("./routes/answer");
const questionRoutes = require("./routes/question");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "assessment data" });
});

app.use("/login", loginRoutes);
app.use("/users", userRoutes);
app.use("/answer", answerRoutes);
app.use("/question", questionRoutes);

app.listen(PORT, () => {
  console.log("Server is running");
});
