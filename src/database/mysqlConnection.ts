// mysqlConnection.ts
import { createConnection } from 'mysql2/promise';

export const getConnection = async () => {
  return await createConnection({
    host: '54.163.119.51',
    user: 'franciscoescobar',
    password: '1234',
    database: 'farmacia'
  });
};