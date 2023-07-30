// dependencies.ts
import { getConnection } from '../../database/mysqlConnection';
import { MysqlUsersRepository } from './mysqlUsersRepository';

export const makeMysqlUsersRepository = async () => {
  const connection = await getConnection();
  return new MysqlUsersRepository(connection);
};
