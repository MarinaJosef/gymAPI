"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientController_1 = require("../controllers/clientController");
const router = express_1.default.Router();
router.route('/')
    .get(clientController_1.getClients)
    .post(clientController_1.createClient);
router.route('/:id')
    .patch(clientController_1.updateClient)
    .delete(clientController_1.deleteClient)
    .get(clientController_1.getClientByID);
exports.default = router;
