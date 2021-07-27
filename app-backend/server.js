const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const users = require('./routes/api/users');

const db = require('./config/db.config');

//App config

const app = express();
const port = process.env.PORT || 5001;


var corsOptions = {
    origin: "http://localhost:5001"
};
//Middlewares

app.use(session({
    secret: "This is out little secret!",
    resave: false,
    saveUninitialized: false
}));

// required for start useing passport.
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.use("/",require("./routes/api/users"))



// DB config




const User = require('./db/users.schema');

passport.use(User.createStrategy());


// serializeUser Creates cookie
// deserializeUser reveels the cookie data

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("mongoDB Connected... ");
}).catch(error => {
    console.log("Error connecting", error);
    process.exit();
});

mongoose.set("useCreateIndex", true);
//API Endpoints


app.get("/", (req, res) => {
    res.json({
        massege: "Hello there"
    });
});




// Routes
app.use("/api/users",users);

//Listener
app.listen(port, () => console.log(`server started on port ${port}`));