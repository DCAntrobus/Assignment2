import { Router } from "express";

import { DisplayContactBusinessList, DisplayContactAddPage } from "../controller/business.contact.list.controller.server.js";

const router = Router();

router.get('/business-contact-list', DisplayContactBusinessList);
router.get('/business-add', DisplayContactAddPage);

export default router;