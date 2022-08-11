import User from '../models/User.js';

const register = async (req, res, next) => {
  //   console.log('user=>', req.body);
  //   res.send('register user');
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    //this will invoke our error middleware
    next(error);
  }
};

const login = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('update user');
};

export { register, login, updateUser };
