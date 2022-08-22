import { Router } from 'express';
var router = Router();

router.get('/', (req, res, next) =>
  res.status(200).json({ message: 'Welcome to Express API template' })
);

export default router;
