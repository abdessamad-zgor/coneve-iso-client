const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');

//importing middlewares
const renderViewMiddelware = require('./middelwares/renderView');

const bundleApp = require('./middelwares/bundleApp');

let app = express();

app.use(morgan('combined'));

app.options('*', cors());
app.use(cors());
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ['*'],
      scriptSrc: ["'self'", "'unsafe-inline'", 'https:', "'unsafe-eval'"],
      imgSrc: ["'self'", 'https:', 'http:', "'unsafe-inline'"],
      scriptSrcAttr: ["'self'", 'https:'],
      styleSrc: ["'self'", 'https:', 'http:', "'unsafe-inline'"],
    },
  })
);
//bundle app for production or setup a watcher for development mode;
bundleApp();

app.use('/dist', express.static(path.resolve(__dirname, '../dist')));

app.get('*', renderViewMiddelware);

module.exports = app;
