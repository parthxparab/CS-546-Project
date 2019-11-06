async function usernameExists(username){

    const loginCollection = await users();

    return await loginCollection.findOne({username: username}) !== null;


}

module.exports = {usernameExists};
