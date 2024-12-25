"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClient = exports.updateClient = exports.createClient = exports.getClientByID = exports.getClients = void 0;
const mockDatabase_1 = require("../data/mockDatabase");
const client_1 = require("../types/client");
//CRUD 
//Create Post, Read GET, Update (PUT, Patch), Delete (DELETE)
//GET
const getClients = (req, res) => {
    res.status(200).json({ data: mockDatabase_1.mockDatabase.clients });
};
exports.getClients = getClients;
const getClientByID = (req, res) => {
    const id = +req.params.id;
    const client = mockDatabase_1.mockDatabase.clients.find((client) => client.id === id);
    if (client) {
        res.status(200).json({ data: client });
    }
    else {
        res.status(404).json({ message: 'Client not found' });
    }
};
exports.getClientByID = getClientByID;
//POST
const createClient = (req, res) => {
    const { name, email } = req.body;
    // const name = req.body.name;
    // const email = req.body.email;
    const newClient = new client_1.Client(mockDatabase_1.mockDatabase.clients.length + 1, name, email);
    mockDatabase_1.mockDatabase.clients.push(newClient);
    res.status(201).json({ data: newClient });
};
exports.createClient = createClient;
//patch
const updateClient = (req, res) => {
    const id = +req.params.id;
    const { name, email } = req.body;
    const client = mockDatabase_1.mockDatabase.clients.find((client) => client.id === id);
    if (client) {
        name ? client.name = name : client.name = client.name;
        email ? client.email = email : client.email = client.email;
        res.status(200).json({ data: client });
    }
    else {
        res.status(404).json({ message: 'Client not found' });
    }
};
exports.updateClient = updateClient;
//delete Client
const deleteClient = (req, res) => {
    const id = +req.params.id;
    const index = mockDatabase_1.mockDatabase.clients.findIndex((client) => client.id === id);
    if (index !== -1) {
        mockDatabase_1.mockDatabase.clients.splice(index, 1);
        res.status(200).json({ message: 'Client deleted' });
    }
    else {
        res.status(404).json({ message: 'Client not found' });
    }
};
exports.deleteClient = deleteClient;
