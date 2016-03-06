import * as path from 'path';

let mongoskin = require('mongoskin');   //Using require since there is no tsd file
let mongo_url = process.env.MONGOLABS_SECURITYDATA_URL

console.log(`Mongo url is ${mongo_url}.`);

var db = mongoskin.db(mongo_url, {safe:true});
console.log(db);
