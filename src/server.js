// @flow
'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import 'dotenv/config';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('*', (req, res) => res.status(200).send({
  message: 'Welcome to the application.',
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));