import {Router} from 'express';
import * as webhook from '../../api/webhook/webhook';

const webhookRouter = Router();


webhookRouter.post('/testWebhook', webhook.testWebhook);


export default webhookRouter;