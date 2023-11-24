// const User = require("../models/UsersModel");

const Blog = require("../models/UsersModel");
const bcrypt = require('bcrypt');
const validator = require('validator')

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ error: "All fields (name, email, password) are required" });
    }

    // // Validate email
    // if (!validator.isEmail(email)) {
    //   return res.status(400).json({ error: "Invalid email" });
    // }

    // // Validate password
    // if (!validator.isStrongPassword(password)) {
    //   return res.status(400).json({ error: "Password not strong enough" });
    // }

    // // Check if the user already exists
    // const exists = await this.findOne({ email })

    // if (exists) {
    //   throw Error('Email already in use')
    // }

    // Generate a salt with 10 rounds (you can adjust this number)
    const salt = await bcrypt.genSalt(10);
    
    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user data with the hashed password
    const newBlog = new Blog({ name, email, password: hashedPassword});
    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single blog by ID
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a blog by ID
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single blog by ID
const patchBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        {
            new: true, // To return the updated document
        }
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single blog by ID
const putBlog = async (req, res) => {
  try {
    const blog = await Blog.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }// To return the updated document
    );

    if (!blog) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  getBlog,
  deleteBlog,
  patchBlog,
  putBlog,
};
