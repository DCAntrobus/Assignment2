import { Router } from 'express';
import { DisplayLoginPage, DisplayRegistrationPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegirationPage } from '../controller/auth.controller.server.js';

const router = Router();

//Display Login Page
router.get('/login', DisplayLoginPage);
//Process Login Page
router.post('/login', ProcessLoginPage);

//Display Registration Page
router.get('/register', DisplayRegistrationPage);

//Process Registration Page
router.post('/register', ProcessRegirationPage);

//Process Logout Page
router.get('/logout', ProcessLogoutPage);

export default router;