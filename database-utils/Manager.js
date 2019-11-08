const mongoCollections = require('./mongoCollections');
const manager = mongoCollections.manager;
//const users = require('./users');
//const uuid = require('uuid/v4');

const exportedMethods = {

    async addManager(firstName, lastName, email, office, budget, user_login_id, hashed_password, employees) {
        if (typeof firstName !== 'string') throw 'No title provided';
        if (typeof lastName !== 'string') throw 'I aint got nobody!1';
        if (typeof email !== 'string') throw 'I aint got nobody!2';
        if (typeof office !== 'string') throw 'I aint got nobody!3';
        if (isNaN(budget)) throw 'I aint got nobody!';
        if (typeof user_login_id !== 'string') throw 'I aint got nobody!4';
        if (typeof hashed_password !== 'string') throw 'I aint  nobody!5';

        if (Array.isArray(employees) == false) throw 'Not an array'

        const postCollection = await manager();

        // const userThatPosted = await users.getUserById(posterId);

        const newPost = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            office: office,
            budget: budget,
            user_login_id: user_login_id,
            hashed_password: hashed_password,
            employees: [employees]
        };

        const newInsertInformation = await postCollection.insertOne(newPost);
        const newId = newInsertInformation.insertedId;

        // await users.addPostToUser(posterId, newId, title);
        return newId
            //return await this.getPostById(newId);
    },

};

module.exports = exportedMethods;