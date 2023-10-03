const express= require("express");
const router = express.Router();
const contacts= require('../controlers/contacts');
const swichRoutes= express.Router();


const swagger = require('./swagger')
swichRoutes.get('/', contacts.getAllinfo );
swichRoutes.get('/:id', contacts.getSingleId);
swichRoutes.post('/', contacts.createContact);
swichRoutes.delete('/:id', contacts.deleteContact);
swichRoutes.put('/:id', contacts.updateContact)

router
    .use('/contacts', swichRoutes)
    .use('/api-docs', swagger);
    



module.exports=
    router
;
