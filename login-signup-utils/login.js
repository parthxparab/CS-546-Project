const mongoCollections = require("../database-utils/mongoCollections");
const users = mongoCollections.users;
const bcrypt = require('bcryptjs');
const utils = require('./utils');
async function loginUser(username, password){

    if (!username) {
        console.log("Username field is empty!");
        return "Username field is empty!"
        //TODO: display message to user saying that username field is empty
    }

    //if (!await utils.usernameExists(username)){
      //  console.log("Username does not exist in database!");
        //return "Username does not exist in database!"
        //TODO: display message to user saying that username does not exist in database
    //}
    //console.log(typeof(username))
    //console.log(typeof(password))

    const hash = await getHash(username);
    console.log(typeof(hash));
    if(typeof(hash)==="undefined"){
        return "The given credentials do not match"; 
    }

    let passwordCorrect =await bcrypt.compare(password, hash);

   if (passwordCorrect){
       return passwordCorrect;
   }else{
       return "The given credentials do not match";
   }






}

async function getHash(username){

    const usersCollection = await users();

    const userObj = await usersCollection.findOne({username: username});

    if (userObj !== null){
        return userObj.hash;
    }

}

module.exports = {loginUser};