
import { Request, Response } from 'express';
import { CreateUser } from '../../application/createUser';
import { makeMysqlUsersRepository } from '../dependencies';

export async function createUserController(req: Request, res: Response) {
  const userRepository = await makeMysqlUsersRepository();
  const createUser = new CreateUser(userRepository);

  try {
    const user = await createUser.execute(req.body);
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear un usuario' });
  }
}
