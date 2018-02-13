const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    //delete all
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //delete the first returned document
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: true
    // }).then((result) => {
    //     console.log(result);
    // });
    
   
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5a828a75bb82d95f25750bab")
    }).then((result) => {
        console.log(result);
    });

    

    // db.close();

});