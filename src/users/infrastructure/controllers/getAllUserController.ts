
import { Request, Response } from 'express';
import { GetAllUser } from '../../application/getAllUsers';
import { makeMysqlUsersRepository } from '../dependencies';

export async function getAllUserController(req: Request, res: Response) {
  const userRepository = await makeMysqlUsersRepository();
  const getAllUsers = new GetAllUser(userRepository);

  try {
    const users = await getAllUsers.execute();
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Error al recuperar el  usuario' });
  }
}
