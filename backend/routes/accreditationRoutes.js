import { Router } from "express";
import { addAccreditation, getAccreditation } from "../controller/accreditation.js";

const router = Router();

router.post('/accreditation', addAccreditation);
router.get('/accreditation', getAccreditation);

export default router;