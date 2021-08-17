// keys.ts - figure out what set of credentials to return
// tslint:disable-next-line:prefer-conditional-expression no-var-requires
module.exports = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev.ts');
