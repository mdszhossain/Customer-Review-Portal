// requiring packages
const express = require("express");
const app = express();
const dotenv = require("dotenv");
if (process.env.NODE_ENV !== "production") dotenv.config();
const PORT = process.env.PORT;
const ejs = require("ejs");
const ejsEngine = require("ejs-mate");
const methodOverride = require("method-override");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");

// using middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsEngine);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running`);
});
