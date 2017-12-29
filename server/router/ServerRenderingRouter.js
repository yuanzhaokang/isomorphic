import {ServerRenderingController} from 'server/controller';
import {Router} from 'express';

let router = Router();

router.all('*', (req, res, next) => {
   let controller = new ServerRenderingController(req, res, next);
   controller.create();
});

export default router;