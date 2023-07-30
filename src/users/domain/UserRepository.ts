// UserRepository.ts
import { User } from './user';

export interface UserRepository {
  createUser(user: User): Promise<User>;
  getAllUsers(): Promise<User[]>;
  getUserById(id: number): Promise<User | null>;
}
