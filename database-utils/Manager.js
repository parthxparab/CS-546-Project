const mongoCollections = require('./mongoCollections');
const manager = mongoCollections.manager;
const emp = mongoCollections.employee;
const transaction = mongoCollections.transaction;
//const employee = require("./employee");

const ObjectId = require('mongodb').ObjectID;

const exportedMethods = {

    async getAllManager() {
        const managerCollection = await manager();
        const empCollection = await emp();

        const managerdata = await managerCollection.find({}).toArray();
        if (managerdata === null || managerdata == undefined) throw "Database is empty";
        var manName = managerdata.length;
        y = 0;
        while (y < manName) {
            var empName = managerdata[y].employees.length;
            x = 0;
            while (x < empName) {
                authID = managerdata[y].employees[x].id;
                const empo = await empCollection.findOne({ _id: ObjectId(authID) });
                const val = { id: authID, username: empo.username, paid: empo.paidFlag, total_salary: empo.total_salary };
                managerdata[y].employees[x] = val;
                x++;
            }
            y++;

        }

        return managerdata;

    },
    async getManagerById(id) {
        if (!id) throw "You must provide an id to search for";
        if (id.length == 0) throw "Please provide proper length of the id";
        if (typeof id === 'undefined' || id == null) throw "Please provide proper type of id"
        const managerCollection = await manager();
        const empCollection = await emp();

        const managerdata = await managerCollection.findOne({ _id: ObjectId(id) });
        if (managerdata === null || managerdata == undefined) throw "No Manager found of following id";

        var empName = managerdata.employees.length;
        x = 0;
        while (x < empName) {
            authID = managerdata.employees[x].id;
            const empo = await empCollection.findOne({ _id: ObjectId(authID) });
            const val = { id: authID, username: empo.username, paid: empo.paidFlag, total_salary: empo.total_salary };
            managerdata.employees[x] = val;
            x++;
        }
        return managerdata;

    },

    async getManagerByUserID(user_login_id) {
        if (!user_login_id) throw "You must provide an id to search for";
        if (user_login_id.length == 0) throw "Please provide proper length of the id";
        if (typeof user_login_id === 'undefined' || user_login_id == null || typeof user_login_id !== "string") throw "Please provide proper type of user_login_id"

        const managerCollection = await manager();
        const empCollection = await emp();
        const managerdata = await managerCollection.findOne({ user_login_id: user_login_id });
        if (managerdata === null || managerdata == undefined) throw "No Manager found of following id";
        var empName = managerdata.employees.length;
        x = 0;
        while (x < empName) {
            authID = managerdata.employees[x].id;
            const empo = await empCollection.findOne({ _id: ObjectId(authID) });
            const val = { id: authID, username: empo.username, paid: empo.paidFlag, total_salary: empo.total_salary };
            managerdata.employees[x] = val;
            x++;
        }
        return (managerdata);

    },

    async addManager(firstName, lastName, email, budget, user_login_id, hashed_password) {

        if (!firstName || !lastName || !email || !budget || !user_login_id || !hashed_password) throw 'Missing Entries';

        var mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof firstName !== 'string') throw 'No title provided';
        if (typeof lastName !== 'string') throw 'I aint got nobody!1';
        if (mailformat.test(email) == false) throw 'Please provide proper  mailid';
        if (isNaN(budget) || budget <= 0) throw 'Entry Valid value for budget';
        if (typeof user_login_id !== 'string') throw 'I aint got nobody!4';
        if (typeof hashed_password !== 'string') throw 'I aint  nobody!5';

        const managerCollection = await manager();

        const newManager = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            budget: budget,
            user_login_id: user_login_id,
            hashed_password: hashed_password,
            employees: []
        };

        const newInsertInformation = await managerCollection.insertOne(newManager);
        const newId = newInsertInformation.insertedId;

        const newManagerDetails = await this.getManagerById(newId);
        return newManagerDetails;
    },

    async addEmptoManager(manager_ID, empId, username, total_salary, paidFlag) {

        if (!manager_ID || typeof manager_ID !== "string" || manager_ID === undefined || manager_ID === null) throw 'Invalid Entry1';

        if (!empId || empId === undefined || empId === null) throw 'Invalid Entry2';

        if (!username || typeof username !== "string" || username === undefined || username === null) throw 'Invalid Entry3';
        if (!total_salary || typeof total_salary !== "number" || total_salary === undefined || total_salary === null) throw 'Invalid Entry4';
        if (!paidFlag || typeof paidFlag !== "string" || paidFlag === undefined || paidFlag === null) throw 'Invalid Entry5';

        let currentUser = await this.getManagerByUserID(manager_ID);
        console.log(currentUser);

        const managerCollection = await manager();
        const updateInfo = await managerCollection.updateOne({ user_login_id: manager_ID }, { $addToSet: { employees: { id: empId, username: username, total_salary: total_salary, paidFlag: paidFlag } } });

        if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update failed';

        return ("added to manager");
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
    },

    async isPaid(empId) {
        const employee = require("./employee");

        if (!empId || empId === undefined || empId === null) throw 'Invalid Entry';
        const employeeCollection = await emp();
        const managerCollection = await manager();
        const updated = await employee.getEmployeeByUser(empId.toString());
        const managerInfo = await this.getManagerByUserID(updated.manager_ID);

        if(managerInfo.budget < (managerInfo.budget - updated.total_salary || managerInfo.budget == 0))
        {
            throw `Budget too less to pay salary`;
        }

        else
        {

        const updatedPay = {
            firstName: updated.firstName,
            lastName: updated.lastName,
            username: updated.username,
            email: updated.email,
            total_hours: 1,
            basic_salary: updated.basic_salary,
            total_salary: updated.basic_salary,
            paidFlag: "SALARY PAID",
            manager_ID: updated.manager_ID,
            payDate: updated.payDate,
            job_title: updated.job_title,

        };

        const updatedManager = 
        {
            firstName: managerInfo.firstName,
            lastName: managerInfo.lastName,
            email: managerInfo.email,
            budget: managerInfo.budget - updated.total_salary,
            user_login_id: managerInfo.user_login_id,
            hashed_password: managerInfo.hashed_password,
            employees: managerInfo.employees
        };



        const updatedBudget = await managerCollection.replaceOne({ user_login_id: updated.manager_ID }, updatedManager);
        if (updatedBudget.modifiedCount === 0) {
            throw "could not update value successfully";
        }

        const updatedInfo = await employeeCollection.replaceOne({ _id: ObjectId(empId) }, updatedPay);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update value successfully";
        }

        //adding transaction
        const transactionCollection = await transaction();

        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        const newTransaction = {
            by: updated.manager_ID,
            byPosition: "Manager",
            to: updated.username,
            toPosition: "Employee",
            typeOfTransaction: "Paying Salary",
            start_date: "not required",
            end_date: "not required",
            amount: updated.total_salary,
            hours: "not required",
            timestamp: dateTime
        };

        const newTransactionInformation = await transactionCollection.insertOne(newTransaction);
        
        //adding transaction


        const search = await managerCollection.findOne({ user_login_id: updated.manager_ID });
        if (search === null) throw 'cannnnnnnooot be null. dungoofed'

        let i = 0;
        for (i; i < search.employees.length; i++) {
            if (search.employees[i].id.toString() == updated._id.toString()) {
                search.employees[i].Name = updated.firstName;
                search.employees[i].total_salary = 0
                search.employees[i].paidFlag = "SALARY PAID"
            }
        }

        const something = await managerCollection.updateOne({ user_login_id: updated.manager_ID }, { $set: { employees: search.employees } })
        return employee.getEmployeeById(updated._id);;
    }
    }



};

module.exports = exportedMethods;