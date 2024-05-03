const mongodb = require('../db/db');
const ObjectId = require('mongodb').ObjectId;

async function allContacts(){
    const result = await mongodb.getDb().db().collection('contacts').find().toArray();
    return result;
}
async function contacts(id){
    id = new ObjectId(id);
    const result = await mongodb.getDb().db().collection('contacts').find({ _id: id }).toArray();
    return result;
    
}
module.exports = {
    allContacts,
    contacts,
}