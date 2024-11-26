const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file

const app = express();

// MongoDB connection (single connection instance)
let isConnected = false;

const connectToDB = async () => {
    if (isConnected) {
        console.log("Already connected to MongoDB");
        return; // Prevent multiple connections
    }

    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the application if the connection fails
    }
};

// Call the MongoDB connection function
connectToDB();

// Define the CORS options
const corsOptions = {
    origin: "http://localhost:5173", // React development server URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    optionsSuccessStatus: 200,
};

// Apply the CORS middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Define the Student schema directly in server.js
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    srn: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    semester: {
        type: Number,
        required: true,
    },
});

// Create the Student model
const Student = mongoose.model("Student", studentSchema);

// Root route - This will prevent "Cannot GET /"
app.get("/", (req, res) => {
    res.send("Welcome to the backend API");
});

// Signup route
app.post("/Register", async (req, res) => {
    try {
        const { username, srn, password, email, branch, year, semester } = req.body;

        // Validate input
        if (!username || !srn || !password || !email || !branch || !year || !semester) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await Student.findOne({ name: username });
        if (existingUser) {
            return res
                .status(400)
                .json({ message: "User already exists. Please choose a different username" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new student
        const newStudent = new Student({
            name: username,
            srn,
            email,
            password: hashedPassword,
            branch,
            year,
            semester,
        });

        await newStudent.save();
        console.log("User registered:", newStudent);
        res.status(201).json({ message: "Registration successful" });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Error registering user" });
    }
});

// Login route
app.post("/Stdlogin", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await Student.findOne({ name: { $regex: new RegExp(`^${username}$`, "i") } });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Verify password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            res.status(200).json({ message: "Login successful" });
        } else {
            res.status(400).json({ message: "Incorrect password" });
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in" });
    }
});

// Server configuration
const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
