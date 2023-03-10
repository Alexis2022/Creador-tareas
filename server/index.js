import express from "express";
import cors from 'cors';
import {PORT} from "./config.js";
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';


import indexRoutes from './routers/index.routes.js';
import taskRoutes from './routers/task.routes.js'

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes)
app.use(express.static(join(__dirname, '../client/dist')));

app.listen(process.env.PORT || PORT);