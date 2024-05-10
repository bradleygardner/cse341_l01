const contacts = require('../services/contacts');
const getAllRoute = async (req, res) => {
    try {
        await contacts.allContacts().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};

const getByIdRoute = async (req, res) => {
    try {
        await contacts.contacts(req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const postContactRoute = async (req, res) => {
    try {
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        await contacts.addContacts(contact).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(201).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const putUpdateContactRoute = async (req, res) => {
    try {
        const contact = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        };
        await contacts.editContacts(contact, req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(204).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};
const deleteContactRoute = async (req, res) => {
    try {
        await contacts.deleteContacts(req.params.id).then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    }
    catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    getAllRoute,
    getByIdRoute,
    postContactRoute,
    putUpdateContactRoute,
    deleteContactRoute,
};