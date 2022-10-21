import { Router } from "express";

import { DisplayContactBusinessList, DisplayContactAddPage, DisplayContactEditPage, ProcessBusinessContactAddPage, ProcessBusinessContactEditPage, ProcessBusinessContactDelete } from "../controller/business.contact.list.controller.server.js";

const router = Router();

router.get('/business-contact-list', DisplayContactBusinessList);
router.get('/business-contact-add', DisplayContactAddPage);
router.post('/business-contact-add', ProcessBusinessContactAddPage);
router.post('/business-contact-edit/:id', ProcessBusinessContactEditPage);
router.get('/business-contact-edit/:id', DisplayContactEditPage);
router.get('/business-contact-delete/:id', ProcessBusinessContactDelete)

export default router;