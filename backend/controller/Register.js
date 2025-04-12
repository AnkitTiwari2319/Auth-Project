import User from "../model/User.js";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();

const Register = async (req, res) => {
  const { name, dob, email, password } = req.body;
  console.log({
    name, dob, email, password
  });

  try {
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "User already exists. Please login." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newuser = new User({
      name,
      dob,
      email,
      password: hashedPassword
    });

    await newuser.save();
    // const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    //   expiresIn: "5h",
    // });
    const token = jwt.sign({ email }, process.env.JWT_SECRET);

    res.status(201).json({
      token,
      user: { name, dob, email },
    });

  } catch (err) {
    console.error("Register Error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export default Register;
