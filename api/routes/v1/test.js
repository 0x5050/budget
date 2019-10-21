import { Router } from 'express'

import Test from '../../controllers/v1/test'

const router = Router()

router.get('/', Test.getOne)
router.post('/', Test.create)
router.put('/', Test.update)
router.delete('/', Test.delete)

export default router
