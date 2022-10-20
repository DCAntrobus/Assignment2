import { Router } from "express";
import { homePage, aboutMePage, servicesPage, projectsPage, contactPage } from "../controller/controller.server.js";

const router = Router();

router.get('/', homePage);
router.get('/home', homePage);
router.get('/aboutme', aboutMePage);
router.get('/services', servicesPage);
router.get('/projects', projectsPage);
router.get('/contact', contactPage);

export default router;