import jwt from 'jsonwebtoken';

import User from '../../Models/user';
// @ts-ignore

import keys from '../Keys/keys';

export async function requireAuth(user: any) {
  if (!user || !user._id) {
    throw new Error('Unauthorized!');
  }

  const me = await User.findById(user._id);

  if (!me) {
    throw new Error('Unauthorized!');
  }

  return me;
}

export function decodeToken(token:string) {
  const arr = token.split(" ");

  if (arr[0] === "Bearer") {
    return jwt.verify(arr[1], keys.JWT_SECRET);
  }

  throw new Error("Token not valid!");
}
