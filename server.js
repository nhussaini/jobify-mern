import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 5000;

//middleware
import errorHandlerMiddleWare from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';

app.get('/', (req, res) => {
  throw new Error('error');
  res.send('welcome');
});

//app.use() is used to use a middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleWare);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
