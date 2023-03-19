import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/user.js";

export const signUp = async (req, res) => {
  // console.log(req.body.data);
  const { name, email, password } = req.body.data;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(406).json({
      msg: "user already exist!! Please Sign In",
    }); //status(406)-not acceptable...
    // ...................................................................
  }

  //hashing.....
  const saltRound = 15;
  const salt = await bcrypt.genSalt(saltRound);
  const hashedPass = await bcrypt.hashSync(password, salt);

  //
  const user = new User({
    name,
    email,
    password: hashedPass,
  });

  await user.save();

  // console.log(user);
  return res.status(200).json({
    msg: "User registered successfully!!!",
  });
};

export const signIn = async (req, res) => {
  const { email, password } = req.body.data;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(406).json({
      msg: "Sorry!!! This email doesnot exist..!! Please SignUp first!!!",
    });
  }

  //check pass with hashed pass
  const passMatch = await bcrypt.compareSync(password, user.password);

  if (passMatch) {
    //pass match now setting up token...
    const payload = {
      userName: email,
      id: user._id,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET);

    return res.status(200).json({
      msg: "Logged In!!!",
      user: user.name,
      token,
    });
  } else {
    return res.status(406).json({
      msg: "Password doesnot match!!!",
    });
  }
};
