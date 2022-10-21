import express from 'express';

// import passport
import passport from 'passport';

// include user model for authentication
import User from '../models/user.js';

// import DisplayName utility method
import { UserDisplayName } from '../utils/index.js';

//Display Functions
export function DisplayLoginPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Login', page: 'login', messages: req.flash('loginMessage') })
    }
    return res.redirect('/business-contact-list');
}

export function DisplayRegistrationPage(req, res, next) {
    if (!req.user) {
        return res.render('index', { title: 'Register', page: 'register', messages: req.flash('registerMessage') })
    }
    return res.redirect('/business-contact-list');
}

//Processing Functions 
export function ProcessLoginPage(req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        if (!user) {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.logIn(user, function (err) {
            if (err) {
                console.error(err);
                res.end(err);
            }

            return res.redirecct('/');
        })

    })(req, res, next);
}

export function ProcessRegirationPage(req, res, bext) {
    let newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName
    });
    User.register(newUser, req.body.password, function (err) {
        if (err) {
            if (err.name == "UserExistsError") {
                console.error('ERROR: User Already Exist!');
                req.flash('registerMessage', 'Registration Error')

            } else {
                console.error(err.name);
                req.flash('registerMessage', 'Server Error')
            }

            return res.redirecct('/register');
        }

        return passport.authenticate('local')(req, res, function () {
            return res.redirect('/');
        });
    });
}

export function ProcessLogoutPage(req, res, next) {
    req.logOut(function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        console.log("user logged out successfully");
    });

    res.redirect('/login');
}