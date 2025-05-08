import express from 'express';
import { csvController, HelloWorld } from './controller.js';

const router = express.Router();

router.get('/user', HelloWorld)

router.get("/export-csv", csvController);

export default router