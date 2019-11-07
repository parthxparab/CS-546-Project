const mongoCollections = require("../database-utils/mongoCollections");
const users = mongoCollections.users;
const bcrypt = require('bcrypt');
const utils = require('./utils');
async function loginUser(username, password){

    if (!username) {
        console.log("Username field is empty!");
        throw "Username field is empty!";
        //TODO: display message to user saying that username field is empty
    }

    if (!await utils.usernameExists(username)){
        console.log("Username does not exist in database!");
        throw "Username does not exist in database!";
        //TODO: display message to user saying that username does not exist in database
    }

    const hash = await getHash(username);
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res) {
        if (res){
            console.log("Successfully logged in!");
            //TODO: Login the user and generate session
        }else{
            console.log("Invalid password!");
            throw "Invalid Password";
            //TODO: Display message to user: Invalid password.
        }
    });




}

async function getHash(username){

    const usersCollection = await users();

    const userObj = await usersCollection.findOne({username: username});

    if (userObj !== null){
        return userObj.hash;
    }

}

module.exports = {loginUser};