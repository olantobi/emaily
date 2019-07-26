// @flow
'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import authRoutes from './routes/authRoutes';
import './services/passport';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({bye: 'buddy'});
});

app.use('/auth/google', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server up and running on port ${PORT}`));