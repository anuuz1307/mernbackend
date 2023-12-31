import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


DBConnection();
const PORT = process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));