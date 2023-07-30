import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/user';

export class GetAllUser {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.getAllUsers();
  }
}
