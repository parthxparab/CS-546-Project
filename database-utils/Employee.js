const mongoCollections = require('./mongoCollections');
const employee = mongoCollections.employee;
const ObjectId = require('mongodb').ObjectId
    //const users = require('./users');
    //const uuid = require('uuid/v4');

const exportedMethods = {

    async getEmployeeById(id) {
        if (!id) throw "You must provide an id to search for";
        //if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (id.length == 0) throw "Please provide proper length of the id";
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const employeeCollection = await employee();
        const employeedata = await employeeCollection.findOne({ _id: ObjectId(id) });
        if (employeedata === null) throw "No employee found of following id";


        return employeedata;

    },

    async addEmployee(firstName, lastName, email, total_hours, office, basic_salary, manager_name, payDate, job_title, emergency_contact, user_login_id, hashed_password) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (typeof firstName !== 'string') throw 'No title provided';
        if (typeof lastName !== 'string') throw 'I aint got nobody!';
        if (email.value.match(mailformat)) throw 'Please provide proper  mailid';
        if (typeof email !== 'string') throw 'I aint got nobody!';
        if (isNaN(total_hours)) throw 'I aint got nobody!';
        if (typeof office !== 'string') throw 'I aint got nobody!';
        if (isNaN(basic_salary)) throw 'I aint got nobody!';
        if (typeof manager_name !== 'string') throw 'I aint got nobody!';
        // if (typeof id !== 'string') throw 'I aint got nobody!';
        if (typeof payDate !== "string") throw 'I aint got nobody!';
        if (typeof job_title !== 'string') throw 'I aint got nobody!';
        if (isNaN(emergency_contact)) throw 'I aint got nobody!';
        if (typeof user_login_id !== 'string') throw 'I aint got nobody!';
        if (typeof hashed_password !== 'string') throw 'I aint got nobody!';
        const postCollection = await employee();

        // const userThatPosted = await users.getUserById(posterId);

        const newPost = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            total_hours: total_hours,
            office: office,
            basic_salary: basic_salary,
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

    async removeEmployee(id) {
        if (!id) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (id.length === 0) throw "Please provide proper legth of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const removecontent = await this.getEmployeeById(id.toString());
        const employeeCollection = await employee();

        const deletionInfo = await employeeCollection.deleteOne({ _id: ObjectId(id) });

        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete employee with id of ${id}`;
        }

        return removecontent

    },

    async renameEmployee(id, firstName, lastName) {
        if (!id) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (id.length === 0) throw "Please provide proper legth of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const renamecontent = await this.getEmployeeById(id.toString());
        const employeeCollection = await employee();
        const updatedData = {
            firstName: firstName,
            lastName: lastName,
            email: renamecontent.email,
            total_hours: renamecontent.total_hours,
            office: renamecontent.office,
            basic_salary: renamecontent.basic_salary,
            manager_name: renamecontent.manager_name,
            payDate: renamecontent.payDate,
            job_title: renamecontent.job_title,
            emergency_contact: renamecontent.emergency_contact,
            user_login_id: renamecontent.user_login_id,
            hashed_password: renamecontent.hashed_password
        };
        const updatedInfo = await employeeCollection.replaceOne({ _id: ObjectId(id) }, updatedData);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update dog successfully";
        }

        const upID = updatedInfo.updatedID;
        const updatedDat = await getEmployeeById(upID.toString());
        return updatedDat;

    },

    async updateHours(id, total_hours) {
        if (!id) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (id.length === 0) throw "Please provide proper legth of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const updated = await this.getEmployeeById(id.toString());
        const employeeCollection = await employee();
        const updatedHours = {
            firstName: updated.firstName,
            lastName: updated.lastName,
            email: updated.email,
            total_hours: total_hours,
            office: updated.office,
            basic_salary: updated.basic_salary,
            manager_name: updated.manager_name,
            payDate: updated.payDate,
            job_title: updated.job_title,
            emergency_contact: updated.emergency_contact,
            user_login_id: updated.user_login_id,
            hashed_password: updated.hashed_password
        };
        const updatedInfo = await employeeCollection.replaceOne({ _id: ObjectId(id) }, updatedHours);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update dog successfully";
        }

        const upID = updatedInfo.updatedID;
        const updatedData = await getEmployeeById(upID.toString());
        return updatedData;
    },


    async calculatePayroll(id) {
        if (!id) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (id.length === 0) throw "Please provide proper legth of the id";
        if (typeof id !== 'string') throw "Please provide proper id"
        if (typeof id === 'undefined') throw "Please provide proper type of id"
        const content = await this.getEmployeeById(id.toString());
        const total_payroll = (content.basic_salary * content.total_hours)
        if (total_payroll == 0) {
            throw `Could not calculate the payroll for the employee with id of ${id}`;
        }

        return total_payroll
    }

};

module.exports = exportedMethods;