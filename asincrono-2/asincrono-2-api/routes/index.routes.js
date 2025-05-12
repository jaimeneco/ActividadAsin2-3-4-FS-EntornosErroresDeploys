import {Router} from 'express'

import { getOpinions, createOpinion } from '../controllers/opinions.controller.js'

const router = Router()

// opiniones

router.get("/opinions", getOpinions);
router.post("/opinions", createOpinion)

export default router;