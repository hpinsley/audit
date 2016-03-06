interface IAuditRecord {
    username: string;
    time: Date;
    recType: string;
    details: any;
}

let mongoskin = require('mongoskin');   //Using require since there is no tsd file
let mongo_url = process.env.MONGOLABS_SECURITYDATA_URL
let db = mongoskin.db(mongo_url, {safe:true});
let coll = db.collection('audit');

coll.find({}).sort({ time: -1}).toArray((e, records: IAuditRecord[]) => {
    if (e) {
        console.log("Error", e);
    }
    else {
        for (let r of records) {
            let d = JSON.stringify(r.details);
            console.log(`${r.time}: ${r.username} - ${r.recType}: ${d}`);

        }
        db.close();
    }
});
