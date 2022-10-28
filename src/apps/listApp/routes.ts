import { create } from "domain";
import { Router } from "express";


const router = Router();

router.post('/api/v1/cop', create)

module.exports = router;