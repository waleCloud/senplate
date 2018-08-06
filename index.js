/**
 * @author Abdulwahid Olawale
 * This is the entry point of the application, this handles the necessary basic configuration such as
 * router setup, import modules, etc
 */

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { } from  'dotenv/config';

const app = express();

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = app.listen(process.env.PORT || 9000, () => {
    console.log(`Listening on port ${server.address().port}`);
});

export default app;
