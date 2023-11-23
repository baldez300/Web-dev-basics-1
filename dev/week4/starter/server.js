// import cors from "cors";

// const connectDB = require("./config/db");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");

// express app
const app = express();
connectDB();

// Import the controllers (alias for the functions)
const servicesController = require("./controllers/ServicesController");
const usersController = require("./controllers/UsersController");
const toursController = require("./controllers/ToursController");

// middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

// Services Routes
app.get("/api/services/:id", servicesController.getBlog);
app.delete("/api/services/:id", servicesController.deleteBlog);
app.patch("/api/services/:id", servicesController.patchBlog);
app.put("/api/services/:id", servicesController.putBlog);
app.post("/api/services", servicesController.createBlog);
app.get("/api/services", servicesController.getBlogs);

// Users Routes
app.get("/api/users/:id", usersController.getBlog);
app.delete("/api/users/:id", usersController.deleteBlog);
app.patch("/api/users/:id", usersController.patchBlog);
app.put("/api/users/:id", usersController.putBlog);
app.post("/api/users", usersController.createBlog);
app.get("/api/users", usersController.getBlogs);

// Tours Routes
app.get("/api/tours/:id", toursController.getBlog);
app.delete("/api/tours/:id", toursController.deleteBlog);
app.patch("/api/tours/:id", toursController.patchBlog);
app.put("/api/tours/:id", toursController.putBlog);
app.post("/api/tours", toursController.createBlog);
app.get("/api/tours", toursController.getBlogs);

const PORT = process.env.PORT || 3001; // Access the port from .env or use 3001 if not found
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
