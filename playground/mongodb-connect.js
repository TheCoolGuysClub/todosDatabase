const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = `TodoApp`;
MongoClient.connect(url,(err,client)=>{
  if(err){
    console.log(err);
    return err;
  }
  const db = client.db(dbName);
  //this is for insert
  //insertOne({})
  //insertMany([{},{}....])
    db.collection(`Todos`).insertMany([
    {
      text:`go for run`,
      completed: false
    },
    {
       text:`play bball`,
       completed: true
    }
  ])
    .then(response=>{
      console.log(JSON.stringify(response.ops,undefined,2));
    })
    .catch(err=>{
      console.log(`unable to write to Mongodb`,err);
    })

  //find
  //find all object
  // db.collection(`Todos`).find({
  //   _id: new ObjectId("5aa981cae7e6ce0b8c0a17f9")
  // }).limit(5).toArray()
  //
  // .then(response=>{
  //     console.log(JSON.stringify(response,undefined,2));
  // })
  // .catch(err=>{
  //   console.log(`unable to fetch from mongodb`);
  // })

  // update
  //updateOne
  //updateMany
//   db.collection(`Todos`).findOneAndUpdate({
//     text:`go for run`
//   },
//   {
//     $set: {completed:true}
//   },
//   {
//     returnOriginal: false
//   }
// )
// .then(response =>
//   {console.log(JSON.stringify(response.value, undefined, 2));
//   })
//   .catch(err => {
//     console.log(`hi`);
//   })

// //deleting
// db.collection('Todos').findOneAndDelete({
//   _id: ObjectId("5aa986549f480e0c79fb312e")
// })
//   .then(response => {
//     console.log(JSON.stringify(response, undefined, 2));
//   }, err => {
//     console.log('unable to delete document');
//   })

  client.close();
})
