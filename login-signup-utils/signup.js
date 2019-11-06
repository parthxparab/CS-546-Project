const bcrypt = require('bcrypt');
const owasp = require('owasp-password-strength-test');
const mongoCollections = require("../database-utils/mongoCollections");
const users = mongoCollections.users;


const saltRounds = 10;

owasp.config({
    allowPassphrases: true,
    maxLength: 128,
    minLength: 10,
    minPhraseLength: 20,
    minOptionalTestsToPass: 4,
});

function createAcc(firstname, lastname, email, username, password) {

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
        //TODO: display message to user saying that email field is empty

    }


    if (owasp.test(password)["strong"]) {
        bcrypt.hash(password, saltRounds, function (err, hash) {
            console.log("Account ");
            //TODO: store in database
        });
    } else {
        console.log("Password is too weak!");
        //TODO: display message to user saying that password is too weak
    }


}

function usernameExists(username){




}




