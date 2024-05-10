const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

async function allContacts() {
    const result = await mongodb.getDb().db().collection('contacts').find().toArray();
    return result;
}
async function contacts(id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: id }).toArray();
    return result;
}
async function addContacts(contact) {
    //Add contact to db
    const result = await mongodb.getDb().db().collection('contacts').insertOne(contact);
    return result;
}
async function editContacts(contact, id) {
    //Update contact
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: id }, contact);
    return result;
}
async function deleteContacts(id) {
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: id });
    return result;
}
module.exports = {
    allContacts,
    contacts,
    addContacts,
    editContacts,
    deleteContacts,
}