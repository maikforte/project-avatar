const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const controller = require('./scholar.controller')(axios);
const router = require('./scholar.router');

module.exports = () => {
    const route = express.Router();
    route.use(bodyParser.json());

    return router(route, controller);
};
