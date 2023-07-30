
import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './users/infrastructure/userRouter';

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use('/api', userRouter);

app.listen(PORT, () => {
  console.log(`Servidor Corriendo en el puerto ${PORT}`);
});
