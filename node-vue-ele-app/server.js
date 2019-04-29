// 实例化
const express = require("express")
const mongoose = require("mongoose")
const app = express();

// 引入users.js
const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;

// Connect to mongoDB
mongoose.connect(db, {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
// 没有页面，无法通过浏览器访问，可以模拟
app.get("/", (req, res) => {
    res.send("Hello World!");
})

// 使用routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})