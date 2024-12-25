import express from "express";
import { getClients, getClientByID, createClient, updateClient, deleteClient } from "../controllers/clientController";

const router = express.Router();


router.route('/')
    .get(getClients)
    .post(createClient);

router.route('/:id')
    .patch(updateClient)
    .delete(deleteClient)
    .get(getClientByID);


export default router;