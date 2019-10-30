const bcrypt = require('bcrypt');
const owasp = require('owasp-password-strength-test');

const saltRounds = 10;

owasp.config({
    allowPassphrases       : true,
    maxLength              : 128,
    minLength              : 10,
    minPhraseLength        : 20,
    minOptionalTestsToPass : 4,
});

function createAcc(username, password){

    if (!username){
        //TODO: display message to user saying that username field is empty
    }

    if (owasp.test(password)["strong"]){
        bcrypt.hash(password, saltRounds, function(err, hash) {
            //TODO: store in database
        });
    }else{
        //TODO: display message to user saying that password is too weak
    }


}



