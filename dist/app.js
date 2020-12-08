import express from 'express';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose'
import cors from 'cors';
import routes from 'routes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use('/', routes);
app.get('/', (req, res) => res.send('Di-Planistra Server'));
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.listen(PORT, () => console.log('server run listening on port 8000'));
