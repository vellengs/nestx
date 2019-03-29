import * as mongoose from 'mongoose';
// import * as bluebird from 'bluebird';

export function connect(uri: string) {
    // (<any>mongoose).Promise = bluebird;
    mongoose.connect(uri).then(() => {
        console.log('success connected to', uri);
    });
    const db = mongoose.connection;
    db.on('error', (err: any) => {
        throw new Error('unable to connect to database at ' + uri + err);
    });
    return db;
} 