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
})
