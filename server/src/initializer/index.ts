import express from 'express';
import envInitializer from './env';
import mongoInitializer from './mongo';

export default async (expressApp: express.Application): Promise<void> => {
  envInitializer();
  mongoInitializer();
};
