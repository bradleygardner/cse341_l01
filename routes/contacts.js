const routes = require('express').Router();
const contacts = require('../controller/contacts');

routes.get('/', contacts.getAllRoute);
routes.get('/:id', contacts.getByIdRoute);

module.exports = routes;