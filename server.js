import express from 'express';
const app = express();

const port = process.env.PORT || 5000;

//middleware
// notFoundMiddleware;
import notFoundMiddleware from './middleware/not-found.js';

app.get('/', (req, res) => {
  res.send('welcome');
});

//app.use() is used to use a middleware
app.use(notFoundMiddleware);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
