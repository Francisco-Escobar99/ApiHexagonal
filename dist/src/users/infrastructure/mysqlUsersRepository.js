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
exports.MysqlUsersRepository = void 0;
class MysqlUsersRepository {
    constructor(connection) {
        this.connection = connection;
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const [result] = yield this.connection.query('INSERT INTO employees (name, last_name, email, number_phone) VALUES (?, ?, ?, ?)', [user.name, user.last_name, user.email, user.number_phone]);
            return Object.assign(Object.assign({}, user), { id: result.insertId });
        });
    }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.query('SELECT * FROM employees');
            return rows;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const [rows] = yield this.connection.query('SELECT * FROM employees WHERE id = ?', [id]);
            if (rows.length === 0) {
                return null;
            }
            return rows[0];
        });
    }
}
exports.MysqlUsersRepository = MysqlUsersRepository;
