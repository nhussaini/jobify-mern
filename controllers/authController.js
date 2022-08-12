import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError } from '../errors/index.js';

// class CustomAPIError extends Error {
//   constructor(message) {
//     super(message);
//     // this.statusCode = StatusCodes.BAD_REQUEST;
//   }
// }

// class BadRequestError extends CustomAPIError {
//   constructor(message) {
//     super(message);
//     this.statusCode = StatusCodes.BAD_REQUEST;
//   }
// }

// class notFoundError extends CustomAPIError {
//   constructor(message) {
//     super(message);
//     this.statusCode = StatusCodes.NOT_FOUND;
//   }
// }

const register = async (req, res) => {
  //   console.log('user=>', req.body);
  //   res.send('register user');
  const { name, email, password } = req.body;

  if (!name || !password || !email) {
    throw new BadRequestError('please provide all values');
  }

  //if email is already in use
  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already in use');
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
