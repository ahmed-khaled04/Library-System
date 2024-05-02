import express from "express";
import User from "../models/User.js";

const router = express.Router();

/* User Registration */
router.post("/register", async (req, res) => {
  try {

    /* Create a new user */
    const newuser = await new User({
      userType: req.body.userType,
      userFullName: req.body.userFullName,
      admissionId: req.body.admissionId,
      employeeId: req.body.employeeId,
      age: req.body.age,
      dob: req.body.dob,
      gender: req.body.gender,
      address: req.body.address,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
    });

    /* Save User and Return */
    const user = await newuser.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
});

/* User Login */
router.post("/signin", async (req, res) => {
  try {
    console.log(req.body, "req");
    const user = req.body.admissionId
      ? await User.findOne({ admissionId: req.body.admissionId })
      : await User.findOne({ employeeId: req.body.employeeId });

    console.log(user, "user");

    if (!user) {
      return res.status(404).json("User not found");
    }

    if (!(req.body.password === user.password)) {
      return res.status(400).json("Wrong Password");
    }

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Internal Server Error");
  }
});

export default router;
