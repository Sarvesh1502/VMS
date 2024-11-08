const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const { Student } = require("./config");
const cors = require("cors");

const app = express();

// Define the CORS options
const corsOptions = {
    origin: "http://localhost:5173", // Only allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies if needed
};

// Apply the CORS middleware with your options
app.use(cors(corsOptions));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set view engine and static folder
app.set("view engine", "ejs");
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

// Signup route
app.post("/signup", async (req, res) => {
    try {
        const { username, srn, password, email, branch, year, semester } = req.body;

        // Check if all fields are filled out
        if (!username || !srn || !password || !email || !branch || !year || !semester) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Check if username is already taken
        const existingUser = await Student.findOne({ name: username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists. Please choose a different username" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save new student
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
app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await Student.findOne({ name: username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Compare the password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            res.render("home");
        } else {
            res.status(400).json({ message: "Incorrect password" });
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Error logging in" });
    }
});

// Server configuration
const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
