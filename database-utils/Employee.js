const mongoCollections = require('./mongoCollections');
const employee = mongoCollections.employee;
//const users = require('./users');
//const uuid = require('uuid/v4');

const exportedMethods = {

    async addEmployee(firstName, lastName, email, total_hours, office, total_payroll, manager_name, payDate, job_title, emergency_contact, user_login_id, hashed_password) {
        if (typeof firstName !== 'string') throw 'No title provided';
        if (typeof lastName !== 'string') throw 'I aint got nobody!';
        if (typeof email !== 'string') throw 'I aint got nobody!';
        if (isNaN(total_hours)) throw 'I aint got nobody!';
        if (typeof office !== 'string') throw 'I aint got nobody!';
        if (isNaN(total_payroll)) throw 'I aint got nobody!';
        if (typeof manager_name !== 'string') throw 'I aint got nobody!';
        // if (typeof id !== 'string') throw 'I aint got nobody!';
        if (typeof payDate !== "string") throw 'I aint got nobody!';
        if (typeof job_title !== 'string') throw 'I aint got nobody!';


        const postCollection = await employee();

        // const userThatPosted = await users.getUserById(posterId);

        const newPost = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            total_hours: total_hours,
            office: office,
            total_payroll: total_payroll,
            manager_name: manager_name,
            payDate: payDate,
            job_title: job_title,
            emergency_contact: emergency_contact,
            user_login_id: user_login_id,
            hashed_password: hashed_password
        };

        const newInsertInformation = await postCollection.insertOne(newPost);
        const newId = newInsertInformation.insertedId;

        // await users.addPostToUser(posterId, newId, title);
        return newId
            //return await this.getPostById(newId);
    },

};

module.exports = exportedMethods;