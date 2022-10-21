import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";


//ES Modules fix for __dirname
import path, { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


//Import mongoose Module
import mongoose from 'mongoose';


//import configuration module
import { MongoDB, Secret } from '../config/config.js';


// Routes
import indexRouter from './routes/routes.server.js';
import businessContactsRouter from './routes/business_Contact_list.route.js';

//Instantiate Express App
const app = express();

//Complete the Db config
mongoose.connect(MongoDB);
const db = mongoose.connection;

//Success or error Listeners
db.on('open', () => console.log("Connected to MongoDB"));
db.on('error', () => console.log("MongoDB Connection Error"));


// view Engine EJS 
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

app.use('/', indexRouter);
app.use('/', businessContactsRouter);

export default app;


