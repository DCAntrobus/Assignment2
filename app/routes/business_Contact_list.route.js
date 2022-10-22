import { Router } from "express";

import { DisplayContactBusinessList, DisplayContactAddPage, ProcessBusinessContactAddPage, DisplayContactEditPage, ProcessBusinessContactEditPage, ProcessBusinessContactDelete } from "../controller/business.contact.list.controller.server.js";


import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-contact-list', AuthGuard, DisplayContactBusinessList);
router.get('/business-contact-add', AuthGuard, DisplayContactAddPage);
router.post('/business-contact-add', AuthGuard, ProcessBusinessContactAddPage);
router.get('/business-contact-edit/:id', AuthGuard, DisplayContactEditPage);
router.post('/business-contact-edit/:id', AuthGuard, ProcessBusinessContactEditPage);
router.get('/business-contact-delete/:id', AuthGuard, ProcessBusinessContactDelete);

export default router;