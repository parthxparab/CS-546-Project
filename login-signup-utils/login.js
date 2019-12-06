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

    if (!await utils.usernameExists(username)){
        console.log("Username does not exist in database!");
        return "Username does not exist in database!"
        //TODO: display message to user saying that username does not exist in database
    }

    const hash = await getHash(username);
    console.log(hash);

    let passwordCorrect = bcrypt.compareSync(password, hash);

   if (passwordCorrect){
       return passwordCorrect;
   }else{
       return "Password is Incorrect";
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