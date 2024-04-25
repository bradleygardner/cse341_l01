const routes = require('express').Router();
const lesson1Controller = require('../controller/lesson1');

routes.get('/', lesson1Controller.visiterRoute);
routes.get('/bradley', lesson1Controller.bradleyRoute);
routes.get('/birch', lesson1Controller.brotherBirchRoute);

module.exports = routes;