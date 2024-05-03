const contacts = require('../services/contacts');
const getAllRoute = async (req, res) => {
    await contacts.allContacts().then((lists) => {
        res.setHeader('Content-Type', 'application/json'); 
        res.status(200).json(lists);
    });
};

const getByIdRoute = async (req, res) => {
    await contacts.contacts(req.params.id).then((lists) => {
        res.setHeader('Content-Type', 'application/json'); 
        res.status(200).json(lists);
    });
};

module.exports = {
    getAllRoute,
    getByIdRoute, 
};