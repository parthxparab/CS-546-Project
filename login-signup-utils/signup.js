const bcrypt = require('bcrypt');
const owasp = require('owasp-password-strength-test');
const mongoCollections = require("../database-utils/mongoCollections");
const users = mongoCollections.users;
const utils = require("./utils");


const saltRounds = 10;

owasp.config({
    allowPassphrases: true,
    maxLength: 128,
    minLength: 10,
    minPhraseLength: 20,
    minOptionalTestsToPass: 4,
});

async function createAcc(firstname, lastname, email, username, password) {

    if (!username) {
        console.log("Username field is empty!");
        throw "Username field is empty!";
        //TODO: display message to user saying that username field is empty
    }

    if (!firstname) {
        console.log("First name is empty!");
        throw "First name field is empty!";

        //TODO: display message to user saying that firstname field is empty
    }

    if (!lastname) {
        console.log("Last name is empty!");
        throw "Last name field is empty!";

        //TODO: display message to user saying that lastname field is empty
    }

    if (!email) {
        console.log("Email field is empty!");
        throw "Email field is empty!";
        //TODO: display message to user saying that email field is empty

    }

    const usersCollection = await users();

    if (await utils.usernameExists(username)) {
        console.log("Username already taken!");
        throw "Username already taken";
    }


    if (owasp.test(password)["strong"]) {
        bcrypt.hash(password, saltRounds, async function (err, hash) {

            let usersObj = {
                firstName: firstname,
                lastName: lastname,
                email: email,
                username: username.toLowerCase(),
                hash: hash
            };

            const insert = await usersCollection.insertOne(usersObj);
            if (insert.insertedCount === 0) throw "Could not add user";

            const id = insert.insertedId;
            const result = await usersCollection.findOne({username: username});
            console.log("Account created successfully!");
            console.log(result);
        });
    } else {
        throw "Password is too weak!";
        //TODO: display message to user saying that password is too weak
    }


}
module.exports = {createAcc};






