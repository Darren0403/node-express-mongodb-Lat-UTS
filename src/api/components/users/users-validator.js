const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      passConfirm: joi.string().min(6).max(32).required().label('PassConfirm'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: { 
    body: {
      oldPassword: joi.string().required().label('Old Password'),
      newPassword: joi.string().min(6).max(32).required().label('New Password'),
      newPasswordConfirm: joi.string().min(6).max(32).required().label('New Password Confirmation'),
    },
  },
};