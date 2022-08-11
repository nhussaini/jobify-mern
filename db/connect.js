import mongoose from 'mongoose';

const connectDB = (url) => {
  //mongoose.connect returns a promise
  return mongoose.connect(url);
};

export default connectDB;
