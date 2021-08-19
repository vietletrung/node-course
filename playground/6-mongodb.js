const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager';
f = require('util').format;

var user = encodeURIComponent('root');
var password = encodeURIComponent('example');
// var authMechanism = 'DEFAULT';

// Connection URL
var url = f('mongodb://%s:%s@127.0.0.1:27017',
  user, password);
console.log('url: ' + url);
MongoClient.connect(url, (error, client) => {
    if(error){
        console.log('connection error');
    }
    // else {console.log('connection correctly');}
    const db = client.db(databaseName);
/*     const updatePromise = db.collection('user').updateOne({
        _id: new mongodb.ObjectId("611a7936ff1cc00a4e3035eb")
    }, {
        $set: {
            name: 'anton'
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((reject) => console.log(reject))
 */
    db.collection('user').insertOne({
        name:'viet 3',
        age:'41'
    });
    
})