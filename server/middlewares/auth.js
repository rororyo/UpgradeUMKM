//TODO: Auth Error handling

import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { dbMiddleware } from "./dbsetup.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'
const authApp = express();
authApp.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
authApp.use(express.json());
authApp.use(express.urlencoded({ extended: true }));
authApp.use(cookieParser());
authApp.use(dbMiddleware); // Use the shared database middleware

const saltRounds = 10;

// Check for cookies
export const isLoggedin = (req) => {
    const token = req.cookies.token;
    return !!token;
}

authApp.post("/register", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const client = req.dbClient;
    try {
        const checkResult = await client.query("SELECT * FROM users WHERE email = $1", [email]);

        if (checkResult.rows.length > 0) {
            res.status(400).send("User already exists");
        } else {
            const hash = await bcrypt.hash(password, saltRounds);
            const result = await client.query("INSERT INTO users(email, password) VALUES($1,$2) RETURNING *", [email, hash]);
            const user = result.rows[0];
            const token = generateToken(user);
            res.cookie("token", token);
            res.status(200).send({ user, token });
        }
    } catch (err) {
        console.error('Error in registration:', err);
        res.status(500).send(err.message);
    }
});

authApp.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const client = req.dbClient;

    try {
        const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            const storedHashPassword = user.password;
            const valid = await bcrypt.compare(password, storedHashPassword);

            if (valid) {
                const token = generateToken(user);
                res.cookie("token", token);
                res.status(200).send({ user, token });
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (err) {
        console.error('Error in login:', err);
        res.status(500).json(err.message);
    }
});

authApp.get("/logout", (req, res) => {
    if (isLoggedin(req)) {
        res.clearCookie("token");
        res.send("Logout successful");
    } else {
        res.status(401).send("Not logged in");
    }
});

// POST request to get the user details
authApp.post("/google-user", async (req, res) => {
    const data  = req.body;
    try{
        const result = await req.dbClient.query("SELECT * FROM users WHERE email = $1 AND password = $2", [data.email,data.password]);
        if(result.rows.length === 0){
            await req.dbClient.query("INSERT INTO users (email,password) VALUES($1,$2)", [data.email,data.password]);
        }
        const user = result.rows[0];
        const token = generateToken(user);
        res.cookie("token", token);
        res.status(200).send({ user, token });
    }
    catch(err){
        console.log(err)
    }
})

// TODO: Add middleware to check if user is logged in

// Helper function to generate JWT
const generateToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: "1h",
    });
};

export default authApp;
