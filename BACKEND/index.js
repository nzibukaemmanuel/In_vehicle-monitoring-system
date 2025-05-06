import express from 'express';
import router from './routes.js';
import cors from 'cors';


const app = express();
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


const PORT = process.env.PORT || 5000;
 app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});