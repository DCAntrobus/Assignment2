import { Router } from "express";

import { DisplayContactBusinessList } from "../controller/business.contact.list.controller.server.js";

const router = Router();

router.get('/business-contact-list', DisplayContactBusinessList);

export default router;