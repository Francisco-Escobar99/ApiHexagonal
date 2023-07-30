import { Request, Response } from 'express';
import { GetByIdUser } from '../../application/getByIdUsers';
import { makeMysqlUsersRepository } from '../dependencies';

export async function getByIdUserController(req: Request, res: Response) {
  const { id } = req.params;
  const userRepository = await makeMysqlUsersRepository();
  const getByIdUser = new GetByIdUser(userRepository);

  try {
    const user = await getByIdUser.execute(parseInt(id, 10));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error al recuperar el usuario' });
  }
}
