//Third Party Modules
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";


//ES Modules fix for __dirname
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

//Auth Step 1 - import modules 
import passport from 'passport';
import passportlocal from 'passport-local';
import flash from 'connect-flash';

// Auth step 2 - Authentication strategy
let localStrat = passportlocal.Strategy;

// Auth Step 3 - import the user model
import User from './models/user.js';


//Import mongoose Module
import mongoose from 'mongoose';


//import configuration module
import { MongoDB, Secret } from '../config/config.js';


// Routes
import indexRouter from './routes/routes.server.js';
import businessContactsRouter from './routes/business_Contact_list.route.js';
import authRouter from './routes/auth.route.server.js';

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

//Auth step 4 Setup express Session
app.use(session({
    secret: Secret,
    saveUninitialized: false,
    resave: false
}));

// Auth step 5 - Setup Flash
app.use(flash());

// Auth Step 6  - Initialize Passport and Session
app.use(passport.initialize());
app.use(passport.session());

//Auth Step 7 -impletementing the Auth Strat
passport.use(User.createStrategy());

//Auth Step 8 -Setup Serialization and deSerialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/', businessContactsRouter);
app.use('/', authRouter);

export default app;


