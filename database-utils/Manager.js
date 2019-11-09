const mongoCollections = require('./mongoCollections');
const manager = mongoCollections.manager;
const ObjectId = require('mongodb').ObjectId
    //const users = require('./users');
    //const uuid = require('uuid/v4');

const exportedMethods = {

    async getManagerById(id) {
        if (!id) throw "You must provide an id to search for";
        //if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (id.length == 0) throw "Please provide proper length of the id";
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const managerCollection = await manager();
        const managerdata = await managerCollection.findOne({ _id: ObjectId(id) });
        if (managerdata === null) throw "No Manager found of following id";

        return managerdata;

    },


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

    async renameManager(id, firstName, lastName) {
        if (!id) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (id.length === 0) throw "Please provide proper legth of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const renamecontent = await this.getManagerById(id.toString());
        const postCollection = await manager();
        const updatedData = {
            firstName: firstName,
            lastName: lastName,
            email: renamecontent.email,
            office: renamecontent.office,
            budget: renamecontent.budget,
            user_login_id: renamecontent.user_login_id,
            hashed_password: renamecontent.hashed_password,
            employees: renamecontent.employees
        };
        const updatedInfo = await postCollection.replaceOne({ _id: ObjectId(id) }, updatedData);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update dog successfully";
        }

        const upID = updatedInfo.updatedID;
        const updatedDat = await this.getManagerById(id.toString());
        return updatedDat;

    },

    async removeManager(id) {
        if (!id) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (id.length === 0) throw "Please provide proper legth of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const removecontent = await this.getManagerById(id.toString());
        const managerCollection = await manager();

        const deletionInfo = await managerCollection.deleteOne({ _id: ObjectId(id) });

        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete manager with id of ${id}`;
        }
        return removecontent

    }




};

module.exports = exportedMethods;