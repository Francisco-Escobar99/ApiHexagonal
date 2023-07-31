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
exports.getByIdUserController = void 0;
const getByIdUsers_1 = require("../../application/getByIdUsers");
const dependencies_1 = require("../dependencies");
function getByIdUserController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const userRepository = yield (0, dependencies_1.makeMysqlUsersRepository)();
        const getByIdUser = new getByIdUsers_1.GetByIdUser(userRepository);
        try {
            const user = yield getByIdUser.execute(parseInt(id, 10));
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user);
        }
        catch (error) {
            return res.status(500).json({ error: 'Error al recuperar el usuario' });
        }
    });
}
exports.getByIdUserController = getByIdUserController;
