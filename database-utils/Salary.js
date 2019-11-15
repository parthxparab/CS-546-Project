const mongoCollections = require('./mongoCollections');
const salary1 = mongoCollections.salary;
const ObjectId = require('mongodb').ObjectId
const manager = mongoCollections.manager;




const exportedMethods = {

    // async getById() {

    // },


    async addSalary(firstName, lastName, salary, manager_name) {
        if ((!firstName) || (!lastName) || (!salary) || (!manager_name)) throw 'Please provide all the feilds'
        if (typeof firstName !== 'string') throw 'No title provided';
        if (typeof lastName !== 'string') throw 'I aint got nobody!';
        if (isNaN(salary)) throw 'Please provide proper salary'
        if (typeof manager_name != 'string') throw 'Please provide manger name'
        const postCollection = await salary1();

        // const userThatPosted = await users.getUserById(posterId);

        const newPost = {
            firstName: firstName,
            lastName: lastName,
            salary: salary,
            manager_name: manager_name
        };

        const newInsertInformation = await postCollection.insertOne(newPost);
        const newId = newInsertInformation.insertedId;

        // await users.addPostToUser(posterId, newId, title);
        return newId
            //return await this.getPostById(newId);
    },

    async updateSalary(firstname, lastname, salary) {
        if (!firstname) throw "You must provide the firstname ";
        if (!lastname) throw "You must provide the lastname";
        if (typeof firstname != "string") throw "Not of proper type";
        if (typeof lastname != "string") throw "Not of proper type";
        if (isNaN(salary)) throw "Not an integer";
        const postCollection = await salary1();
        const employeedata = await postCollection.findOne({
            $and: [{ firstName: firstname }, { lastName: lastname }]
        });
        const updatedsalary = {
            firstName: firstname,
            lastName: lastname,
            salary: salary,
            manager_name: employeedata.manager_name
        };

        const updatedInfo = await postCollection.replaceOne({ _id: ObjectId(employeedata._id) }, updatedsalary);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update dog successfully";
        }

        const upID = updatedInfo.updatedID;
        return updatedInfo;
    }



}

module.exports = exportedMethods;