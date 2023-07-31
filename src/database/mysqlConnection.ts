import { createConnection, Connection } from 'mysql2/promise';

export const getConnection = async (): Promise<Connection> => {
  try {
    const connection: Connection = await createConnection({
      host: '54.163.119.51',//ip
      user: 'franciscoescobar',
      password: '1234',
      database: 'farmacia'
    });

    console.log('Conexión a la base de datos establecida correctamente.');
    return connection;
  } catch (error:  any) {
    console.error('Error al conectar a la base de datos:', error.message);
    throw error;
  }
};

// Llamamos a la función para establecer la conexión
getConnection();
