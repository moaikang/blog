import express from 'express';
import envInitializer from './env';
import expressInitializer from './express';
import mongoInitializer from './mongo';

export default async (expressApp: express.Application): Promise<void> => {
  envInitializer();
  expressInitializer(expressApp);
  await mongoInitializer();
};
