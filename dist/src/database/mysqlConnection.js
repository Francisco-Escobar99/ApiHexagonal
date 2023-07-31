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
exports.getConnection = void 0;
// mysqlConnection.ts
const promise_1 = require("mysql2/promise");
const getConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield (0, promise_1.createConnection)({
        host: '54.163.119.51',
        user: 'franciscoescobar',
        password: '1234',
        database: 'farmacia'
    });
});
exports.getConnection = getConnection;
