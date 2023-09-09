const express = require("express");
const methodOverride = require('method-override');
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require("uuid");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let users = [
    {
        id: uuidv4(),
        username: "Pratham_Singh",
        email: "rajputpratham27@gmail.com",
        password: "1234",
        content : "I love coding.",
    },
    {
        id: uuidv4(),
        username: "Abhishek shukla",
        password: "1234",
        content : "I love AI and anime.",
    },{
        id: uuidv4(),
        username: "lavi moor",
        password: "1234",
        content : "I love data science.",
    },
    {
        id: uuidv4(),
        username: "admin",
        password: "admin",
        content: "Login As Admin",
    }
]

app.get("/home", (req, res) =>{
    res.render("index.ejs");
});

app.get("/home/login", (req, res) =>{
    res.render("login.ejs");
   
});

app.get("/home/new", (req, res) =>{
    res.render("register.ejs");
   
});

app.post("/home/", (req, res) =>{
    let {username} = req.body;
    res.render("loginsuccess.ejs", {username});
});

app.patch("/home/:username", (req, res) =>{
    res.redirect("/home");
});

app.listen(port, () => {
    console.log(`Listening start at port ${port}`);
});