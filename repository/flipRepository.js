
if(process.env.NODE_ENV !== 'production'){
   const dotenv = require('dotenv').config({path : `${__dirname}/../.env`});
}

const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
//const { resolve } = require('promise');

const client = new MongoClient(process.env.DATABASE_URL, {
   useNewUrlParser: true, useUnifiedTopology: true 
});
const getFlipUsers = async(body) => {
   console.log("flip users")
   try{
      await client.connect()
      const db = client.db("userMicro");
      const coll = db.collection("userMicro");
      const data = await coll.find().toArray()
      console.log(data)
      return data
  }
  catch(err){
      console.log("Error occurred")
      return err;
  }
  finally{
      await client.close()
  } 
 };
 
 const postFlipUsers = async(body) => {
    console.log("hey i m there working!");
    console.log("in repo");
    console.log(body);
    console.log("you can updates users here");
    var item = {
        firstname: body.firstname,
        lastname: body.lastname,
    };
    try{
        await client.connect()
        const db = client.db("userMicro");
        const coll = db.collection("userMicro");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
      console.log(err)
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
 };

 const getFlipUsersRegister=async(body)=> {
    console.log("Hi ! Im registering the users");
    try{
      await client.connect()
      const db = client.db("userMicro");
      const coll = db.collection("userMicro");
      const data = await coll.find().toArray()
      console.log(data)
      return data
  }
  catch(err){
      console.log("Error occurred")
      return err;
  }
  finally{
      await client.close()
  } 
 };

 const postFlipUsersRegister= async (body)=>{
    console.log("Hi I m posting the users who have done registration");
    console.log("in repo");
    console.log(body);
    console.log("you can updates users here");
    var item = {
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        mobileno:body.mobileno,
    };
    try{
        await client.connect()
        const db = client.db("userMicro");
        const coll = db.collection("userMicro");
        const data = await coll.insertOne(item);
        // const data2 = await coll.find().toArray();
        console.log(data)
        return data.acknowledged == true
    }
    catch(err){
      console.log(err)
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 
 };
 
 const getFlipUsersDelete=async (body)=>{
    console.log("Hi i m the deleted user");
    let searchOptions = {};
    if(body.firstname!= null && body.firstname !== ""){
        searchOptions.firstname = body.firstname;
    }
//     if(body.mobileno!= null && body.mobileno !== ""){
//       searchOptions.mobileno = body.mobileno;
//   }
    try{
        await client.connect()
        const db = client.db("userMicro");
        const coll = db.collection("userMicro");
        const data = await coll.deleteOne(searchOptions)
        console.log(data)
    }
    catch(err){
        console.log(err)
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 

    
 };
 const updateFlipUsersUpdate=async(body)=>{
    console.log("hi if any updates i m their to tackle!");
    let searchOptions = {};
    if(body.mobileno != null && body.mobileno !== ""){
        searchOptions.mobileno= body.mobileno;
    }
    console.log("hi i have updated mobileno");
    try{
        await client.connect()
        const db = client.db("userMicro");
        const coll = db.collection("userMicro");
        const data = await coll.updateOne(searchOptions, {$set: { mobileno: body.mobileno}})
        console.log(data)  
        }
    
    catch(err){
        console.log(err);
        console.log("Error occurred")
        return err;
    }
    finally{
        await client.close()
    } 

 };

 
 module.exports={
 getFlipUsers,
 postFlipUsers,
 getFlipUsersRegister,
 postFlipUsersRegister,
 getFlipUsersDelete,
 updateFlipUsersUpdate
 };
