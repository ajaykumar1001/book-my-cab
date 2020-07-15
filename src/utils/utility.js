import bcrypt from 'bcryptjs';

export const encryptPassword= (plainText) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(plainText, salt);
};

export const comparePassword = (plainText, encrypedPassword) => {
  return bcrypt.compareSync(plainText, encrypedPassword);
};