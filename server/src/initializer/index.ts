import express from 'express';
import envInitializer from './env';

export default async (expressApp: express.Application): Promise<void> => {
  envInitializer();
};
