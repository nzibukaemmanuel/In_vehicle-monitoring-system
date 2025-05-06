import express from 'express';
import { HelloWorld } from './controller.js';
const router = express.Router();

router.get('/', HelloWorld)

export default router