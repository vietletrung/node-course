const mongoose = require('mongoose')
f = require('util').format;


var user = encodeURIComponent('root')
var password = encodeURIComponent('example')

// var url = f('mongodb://%s:%s@127.0.0.1:27017/task-manager-api',
//   user, password);
// console.log('url:' + url)
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    auth: {
        user:'root',
        password:'example'
    },
    authSource:"admin",
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch((error) => {
    console.log('error:' + error)
})