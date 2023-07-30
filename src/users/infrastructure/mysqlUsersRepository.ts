// mysqlUsersRepository.ts
import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/user';

export class MysqlUsersRepository implements UserRepository {
  constructor(private connection: any) {}

  async createUser(user: User): Promise<User> {
    const [result] = await this.connection.query(
      'INSERT INTO employees (name, last_name, email, number_phone) VALUES (?, ?, ?, ?)',
      [user.name, user.last_name, user.email, user.number_phone]
    );
    return { ...user, id: result.insertId };
  }

  async getAllUsers(): Promise<User[]> {
    const [rows] = await this.connection.query('SELECT * FROM employees');
    return rows;
  }

  async getUserById(id: number): Promise<User | null> {
    const [rows] = await this.connection.query('SELECT * FROM employees WHERE id = ?', [id]);
    if (rows.length === 0) {
      return null;
    }
    return rows[0];
  }
}
