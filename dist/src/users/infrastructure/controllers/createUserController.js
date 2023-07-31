"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const createUser_1 = require("../../application/createUser");
const dependencies_1 = require("../dependencies");
function createUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = yield (0, dependencies_1.makeMysqlUsersRepository)();
        const createUser = new createUser_1.CreateUser(userRepository);
        try {
            const user = yield createUser.execute(req.body);
            return res.status(201).json(user);
        }
        catch (error) {
            return res.status(500).json({ error: 'Error al crear un usuario' });
        }
    });
}
exports.createUserController = createUserController;
