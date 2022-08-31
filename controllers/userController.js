import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const Users = await User.findOne({ email: req.body.email });
    console.log(Users.hash_password);
    const comparePassword = await bcrypt.compareSync(
      req.body.password,
      Users.hash_password
    );
    console.log(comparePassword);
    if (comparePassword) {
      return res.json({
        token: jwt.sign(
          {
            email: Users.email,
            name: Users.fullName,
            _id: Users._id,
          },
          "secret"
        ),
      });
    } else {
      return res
        .status(401)
        .json({ message: "Authentication failed. Invalid password." });
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Authentication failed. Invalid user " });
  }
};
