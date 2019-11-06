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
        //TODO: display message to user saying that username field is empty
        return;
    }

    if (!firstname) {
        console.log("First name is empty!");
        //TODO: display message to user saying that firstname field is empty
        return;
    }

    if (!lastname) {
        console.log("Last name is empty!");
        //TODO: display message to user saying that lastname field is empty
        return;
    }

    if (!email) {
        console.log("Email field is empty!");
        return;
        //TODO: display message to user saying that email field is empty

    }

    if (await utils.usernameExists(username)){
        console.log("Username already taken!");
        return;
    }


    if (owasp.test(password)["strong"]) {
        bcrypt.hash(password, saltRounds, function (err, hash) {

            //TODO: store in database
            console.log("Account created successfully!");
        });
    } else {
        console.log("Password is too weak!");
        //TODO: display message to user saying that password is too weak
    }


}





