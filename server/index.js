//imports
import express from "express";
import  env  from "dotenv";
import bodyParser from "body-parser";
import authApp from "./middlewares/auth.js"
import cors from 'cors'
import http from 'http'
import { dbMiddleware } from "./middlewares/dbsetup.js";
import cookieParser from "cookie-parser";
//const
const port=4000

//middleware
const app = express();
const server= http.createServer(app)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
app.use(dbMiddleware)
app.use(authApp)

env.config()


server.listen(port, () => console.log(`Server running on port ${port}`))