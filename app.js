const express = require("express")
const app = express();
const PORT = 3000;
const mongoose = require("mongoose")
const session = require("express-session")
const userRouter = require("./Routes/user");

require("dotenv").config()

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGOURL;
const secret = process.env.SECRET;

const sessions = {
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
};

app.use(session(sessions));


main().then(() => {
   console.log("connected")
}).catch((err) => {
  console.log(err)
})

async function main() {
  await mongoose.connect(mongoUrl);
}

app.use("/" , userRouter);


app.get("/" , (req,res) => {
    res.send("Hello")
})

app.listen(port , () => {
    console.log("listening");
})