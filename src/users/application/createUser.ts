import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/user';

export class CreateUser {
  constructor(private userRepository: UserRepository) {}

  async execute(userData: User): Promise<User> {
    return await this.userRepository.createUser(userData);
  }
}
