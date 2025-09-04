import express from 'express';
import { routes } from './route';
import { errorHandler } from './middleware/errorHandler';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);



app.use(errorHandler); // verifica se houve algum erro no request

app.listen(port, () => {
  console.log("server on!!")
});