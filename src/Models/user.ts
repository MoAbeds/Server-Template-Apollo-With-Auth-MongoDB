import { compareSync, hashSync } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose, { Schema } from 'mongoose';

// @ts-ignore
import keys from '../Config/Keys/keys';

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },

  SavedRecipes: []
});

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = this._hashPassword(this.password);
    return next();
  }

  return next();
});

UserSchema.methods = {
  _hashPassword(password: string) {
    return hashSync(password);
  },
  authenticateUser(password: string) {
    return compareSync(password, this.password);
  },
  createToken() {
    return jwt.sign(
      {
        _id: this._id
      },
      keys.JWT_SECRET
    );
  }
};

export default mongoose.model('User', UserSchema);
