import express from 'express';
import initializer from './initializer';

const startServer = async () => {
  const app = express();
  await initializer(app);

  const { SERVER_PORT } = process.env;

  app.listen(SERVER_PORT, () => {
    console.log(`Server Init on port ${SERVER_PORT} 😀`);
  });
};

startServer();
