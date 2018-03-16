//connect to mongodb database
//connect to TodoApp
//create a users collection
  //name = string
  //grade
  //age
//use CRUD operations

const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Users';
MongoClient.connect(url,(err,client)=>{
  if(err){
    console.log(err);
    return err;
  }
  const db = client.db(dbName);
  db.collection('Users').insertMany([
  {
    name: "DaVe",
    grade: "Junior",
    age: 17
  },
  {
    name: "JiM",
    grade: "Junior",
    age: 17
  },
  {
    name: "JeReMy",
    grade: "Sophmore",
    age: 16
  }
])
  .then(response=>{
    console.log(JSON.stringify(response, undefined, 2));
  })
  .catch(err=>{
    console.log('unable to write to Mongodb',err);
  })
  //find
  // db.collection('Users').find({
  //   _id: new ObjectId("5aa981cae7e6ce0b8c0a17f9")
  // }).toArray()
  //
  // .then(response=>{
  //     console.log(JSON.stringify(response,undefined,2));
  // })
  // .catch(err=>{
  //   console.log('unable to fetch from mongodb');
  // })

  // update
  //updateOne
  //updateMany
  //   db.collection('Users').findOneAndUpdate({
  //     name: "DaVe"
  //   },
  //   {
  //     $set: {name: "Badboy"}
  //   },
  //   {
  //     returnOriginal: false
  //   }
  // )
  // .then(response =>
  //   {console.log(JSON.stringify(response.value, undefined, 2));
  //   })
  //   .catch(err => {
  //     console.log('unable to update user');
  //   })

  // //deleting
  // db.collection('Users').findOneAndDelete({
  //   _id: ObjectId("5aa986549f480e0c79fb312e")
  // })
  //   .then(response => {
  //     console.log(JSON.stringify(response, undefined, 2));
  //   }, err => {
  //     console.log('unable to delete user');
  //   })

    client.close();
  })
