const routes = require('express').Router();
const contacts = require('../controller/contacts');

routes.get('/', contacts.getAllRoute);
routes.get('/:id', contacts.getByIdRoute);
routes.post('/', contacts.postContactRoute);
routes.put('/:id', contacts.putUpdateContactRoute);
routes.delete('/:id', contacts.deleteContactRoute);

module.exports = routes;