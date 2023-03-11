const createError = require("http-errors");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const path = require("path");
const session = require("express-session");
const mongoose = require('mongoose');
var cookieParser = require("cookie-parser");
var morgan = require("morgan");

app.use(morgan("dev"));

app.use(cookieParser());

app.use(
  session({
    key: "user_sid",
    secret: "somerandonstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
  );

mongoose.connect('mongodb://localhost:27017/todo_list')
const database = mongoose.connection
database.on('error', (error) => console.error(error))
database.once('open', () => console.log("Connected to the Database"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static('public'))

const HomeRouter = require('./routes/home');
const ListRouter = require('./routes/list');

app.use('/', HomeRouter)
app.use('/list', ListRouter)

// initialize express-session to allow us track the logged-in user across sessions.
 
app.listen(3000, () => console.log("Server is listening on port 3000"))
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;  