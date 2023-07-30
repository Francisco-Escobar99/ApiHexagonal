import { UserRepository } from '../domain/UserRepository';
import { User } from '../domain/user';

export class GetByIdUser {
  constructor(private userRepository: UserRepository) {}

  async execute(id: number): Promise<User | null> {
    return await this.userRepository.getUserById(id);
  }
}
