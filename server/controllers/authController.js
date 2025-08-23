const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// generate token
const generateToken = (id) => {
   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//register a new user

const registerUser = async (req, res) => {
    const { name, email, password } = req.body; 

    try {
        //check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);            

        //create new user                                                                
        const user = await User.create({
            name, email, password:hashedPassword
        });
        

        res.status(201).json({ _id:user._id, name:user.name, email:user.email, token:generateToken(user._id) });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" , error:error.message});                        
    }   
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // send user data + token
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};


const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send user data as JSON
    res.json({ success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



module.exports = { registerUser, loginUser, getUserProfile };
