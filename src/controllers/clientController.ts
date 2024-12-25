import { Request, Response } from 'express';
import { mockDatabase } from '../data/mockDatabase';
import { Client } from '../types/client';



export const getClients = (req: Request, res: Response) => {
    res.status(200).json({ status: "success", data: mockDatabase.clients });
};


export const getClientByID = (req: Request, res: Response) => {
    const id = +req.params.id;
    const client = mockDatabase.clients.find(client => client.id === id);
    if (client) {
        res.status(200).json({ status: "success", data: client });
    } else {
        res.status(404).json({ status: "fail", data: { message: "Client not found" } });
    }
};


export const createClient = (req: Request, res: Response) => {
    const { name, email } = req.body;
    const newClient = new Client(mockDatabase.clients.length + 1, name, email);
    mockDatabase.clients.push(newClient);
    res.status(201).json({ status: "success", data: newClient });
};


export const updateClient = (req: Request, res: Response) => {
    const id = +req.params.id;
    const { name, email, changeid } = req.body;
    const client = mockDatabase.clients.find(client => client.id === id);
    if (client) {
        name && (client.name = name);
        email && (client.email = email);
        changeid && (client.id = changeid);
        res.status(200).json({ status: "success", data: client });
    } else {
        res.status(404).json({ status: "fail", data: { message: "Client not found" } });
    }
};

export const deleteClient = (req: Request, res: Response) => {
    const id = +req.params.id;
    const index = mockDatabase.clients.findIndex(client => client.id === id);
    if (index !== -1) {
        mockDatabase.clients.splice(index, 1);
        res.status(200).json({ status: "success", message: "Client deleted" });
    } else {
        res.status(404).json({ status: "fail", data: { message: "Client not found" } });
    }
};


