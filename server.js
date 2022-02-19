
const DotEnv =require( 'dotenv')

const express = require("express");
const app = express();
const User = require("./model/userModel");
const cors = require("cors");
const mongoose = require("mongoose");


const bodyParser = require('body-parser');


const URL = "mongodb+srv://vikas:vikas123@blogcluster.o9lsf.mongodb.net/dreamBig?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGOOSE_URL || URL);


DotEnv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Create in database

app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});


// Get All data

app.get("/api/user", async (req, res) => {
  try {
    User.find({}).then((data) => {
      console.log(data);
      res.json(data);
    });
  } catch (err) {
    console.log(err);
  }
});

// To Get Single by Id

app.get("/api/user/:id", async (req, res) => {
  let id = req.params.id;
  User.findById(id, function (err, data) {
    res.json(data);
  });
});

// Update Student
app.put('/api/editUser/:id' , async (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error)
        return next(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// To Delete 
app.delete("/api/deleteUser/:id", async (req, res, next) => {
  let id = req.params.id;
  User.findByIdAndRemove(id, function (err, data) {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

const PORT = process.env.PORT || 5500

app.listen(PORT, () => {
  console.log("server Started on 5500");
});
