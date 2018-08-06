import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
  res.status(200).send({
      success: true,
      data: {
          message: 'Hello your Api setup is ready for you to hack away! Happy building'
      },
  });
});

export default router;
