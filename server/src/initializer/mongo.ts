import Mongoose from 'mongoose';

const getMongoURI = () => {
  const { NODE_ENV, MONGO_DEV_URI, MONGO_PRODUCTION_URI, MONGO_TEST_URI } = process.env;

  switch (NODE_ENV as string) {
    case 'develpment':
      return MONGO_DEV_URI as string;
    case 'production':
      return MONGO_PRODUCTION_URI as string;
    case 'test':
      return MONGO_TEST_URI as string;
    default:
      return MONGO_DEV_URI as string;
  }
};

const mongoInitializer = async () => {
  const uri = getMongoURI();

  try {
    await Mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB! ');
  } catch (err) {
    console.error(err);
  }
};

export default mongoInitializer;
