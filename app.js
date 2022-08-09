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

app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect("/sessions/new");
  } else {
    next();
  }  
}; 

mongoose.connect('mongodb://localhost:27017/finances')
const database = mongoose.connection
database.on('error', (error) => console.error(error))
database.once('open', () => console.log("Connected to the Database"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static('public'))

const HomeRouter = require('./routes/home');
const YearRouter = require('./routes/year');
const UsersRouter = require('./routes/users');
const MessagesRouter = require('./routes/messages');
const MonthRouter = require('./routes/month');
const SessionRouter = require('./routes/sessions');
const expenseRouter = require('./routes/expense');

// middleware function to check for logged-in users
app.use('/', HomeRouter)
app.use('/year', sessionChecker, YearRouter)
app.use('/users/availability', sessionChecker, UsersRouter)
app.use('/users/profile', sessionChecker, UsersRouter)
app.use('/users', UsersRouter)
app.use('/messages', sessionChecker, MessagesRouter)
app.use('/month', sessionChecker, MonthRouter)
app.use('/sessions', SessionRouter)
app.use('/expenses', sessionChecker, expenseRouter)

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