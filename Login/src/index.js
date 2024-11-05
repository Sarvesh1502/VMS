/* eslint-disable no-undef */
const express = require("express");
// eslint-disable-next-line no-unused-vars
const path = require("path");
const bcrypt = require("bcrypt");
const { Student } = require("./config");  // Ensure your config file exports the Student model correctly

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.post("/signup", async (req, res) => {
    try {
        const { username, srn, password,  email, branch, year, semester } = req.body;

        // Check if all fields are filled out
        if (!username || !srn || !password || !email || !branch || !year || !semester) {
            return res.status(400).send("All fields are required");
        }

        // Check if password and confirmPassword match
        

        // Check if the username is already taken
        const existingUser = await Student.findOne({ name: username });
        if (existingUser) {
            return res.status(400).send("User already exists. Please choose a different username");
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
            semester
        });

        await newStudent.save();
        console.log("User registered:", newStudent);
        res.status(201).send("Registration successful");

    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).send("Error registering user");
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await Student.findOne({ name: username });
        if (!user) {
            return res.status(400).send("User not found");
        }

        // Compare the password
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (isPasswordMatch) {
            res.render("home");
        } else {
            res.status(400).send("Incorrect password");
        }
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send("Error logging in");
    }
});

const port = 5003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
