const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = new express();

//Body Parser MiddleWare
app.use(bodyParser.json());

