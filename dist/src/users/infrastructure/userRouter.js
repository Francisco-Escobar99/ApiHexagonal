"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createUserController_1 = require("./controllers/createUserController");
const getAllUserController_1 = require("./controllers/getAllUserController");
const getByIdUserController_1 = require("./controllers/getByIdUserController");
const router = express_1.default.Router();
router.post('/users', createUserController_1.createUserController);
router.get('/users', getAllUserController_1.getAllUserController);
router.get('/users/:id', getByIdUserController_1.getByIdUserController);
exports.default = router;
