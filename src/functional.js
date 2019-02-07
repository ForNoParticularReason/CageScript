const R = require('ramda');
const RA = require('ramda-adjunct');
// const Maybe = require('sanctuary-maybe');
// const Either = require('sanctuary-either');
const {create, env} = require('sanctuary');
const {env: flutureEnv} = require('fluture-sanctuary-types');
const Future = require('fluture');

const S = create({checkTypes: true, env: env.concat(flutureEnv)});
//const RF = require('ramda-fantasy');

const isString = R.is(String);

module.exports = {
    ...R,
    ...RA,
    //...RF,
    ...S,
    Future,
    uture:Future,
    isString,
    asArray: RA.ensureArray,
    isEmpty: (a) => !a || R.isEmpty(a)
};

