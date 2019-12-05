const mongoCollections = require("../database-utils/mongoCollections");
const users = mongoCollections.users;

async function usernameExists(username){

    username = username.toLowerCase();

    const loginCollection = await users();

    return await loginCollection.findOne({username: username}) !== null;
}

module.exports = {usernameExists};
