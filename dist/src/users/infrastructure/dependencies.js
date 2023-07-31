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
exports.makeMysqlUsersRepository = void 0;
// dependencies.ts
const mysqlConnection_1 = require("../../database/mysqlConnection");
const mysqlUsersRepository_1 = require("./mysqlUsersRepository");
const makeMysqlUsersRepository = () => __awaiter(void 0, void 0, void 0, function* () {
    const connection = yield (0, mysqlConnection_1.getConnection)();
    return new mysqlUsersRepository_1.MysqlUsersRepository(connection);
});
exports.makeMysqlUsersRepository = makeMysqlUsersRepository;
