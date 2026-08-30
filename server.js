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
const ExpressError = require("./utils/ExpressError");
const {connectDB} = require("./db/connectDB");
const User = require("./models/userModel");


// using middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public/css")));
app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsEngine);
app.use(express.json());
app.use(methodOverride("_method"));
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

// using passport for authentication and authorization
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// db connection
connectDB();

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
})

// routes
const reviewerRouter = require("./routes/reviewerRouter");
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const shopRouter = require("./routes/shopRouter");


// using routes
app.use("/crp", reviewerRouter);
app.use("/crp", adminRouter);
app.use("/crp", userRouter);
app.use("/crp", shopRouter);



// error handling middleware

app.use((req, res, next) => {
  throw new ExpressError(404, "Page Not Found");
})

app.use((err, req, res, next) => {
  const { status = 500, message = "Some Error" } = err;
  res.status(status).send(message);
});

app.listen(PORT, () => {
  console.log(`Server is running`);
});
