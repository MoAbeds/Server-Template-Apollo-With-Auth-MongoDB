/* eslint-disable no-console */

import mongoose from 'mongoose';

// @ts-ignore
import keys from '../Keys/keys';

mongoose.Promise = global.Promise;

mongoose.set('debug', true); // debug mode on

try {
  mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (err) {
  mongoose.createConnection(keys.mongoURI);
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', e => {
    throw e;
  });
