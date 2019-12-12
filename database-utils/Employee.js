const mongoCollections = require('./mongoCollections');
const employee = mongoCollections.employee;
const managerCollect = mongoCollections.manager;
const ObjectId = require('mongodb').ObjectId
const manager = require("./Manager");
const transaction = mongoCollections.transaction;


const exportedMethods = {

    async getEmployeeById(id) {
        if (!id) throw "You must provide an id to search for";
        if (id.length == 0) throw "Please provide proper length of the id";
        if (typeof id === 'undefined' || id == null) throw "Please provide proper type of id"

        const employeeCollection = await employee();
        const empdata = await employeeCollection.findOne({ _id: ObjectId(id) });
        if (empdata === null || empdata == undefined) throw "No Manager found of following id";
        return empdata;

    },

    async getEmployeeByUser(username) {
        if (!username) throw "You must provide an id to search for";
        if (username.length == 0) throw "Please provide proper length of the id";
        if (typeof username === 'undefined' || username == null) throw "Please provide proper type of id"

        const employeeCollection = await employee();
        const empdata = await employeeCollection.findOne({ username: username });
        if (empdata === null || empdata == undefined) throw "No Manager found of following id";

        return empdata;

    },

    async addEmployee(firstName, lastName, username, email, total_hours, basic_salary, manager_ID, payDate, job_title) {
        var mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((!firstName) || (!lastName) ||(!username) ||(!email) || (!total_hours) || (!basic_salary) || (!manager_ID) || (!payDate) || (!job_title) ) throw 'Please provide all the feilds'
        if (typeof firstName !== 'string') throw 'No title provided';
        if (typeof lastName !== 'string') throw 'I aint got nobody!';
        if (typeof username !== 'string') throw 'I aint got nobody!';
        if (mailformat.test(email) == false) throw 'Please provide proper  mailid';
        if (typeof email !== 'string') throw 'I aint got nobody!';
        if (isNaN(total_hours)) throw 'I aint got nobody!';
        if (isNaN(basic_salary)) throw 'I aint got nobody!';
        if (typeof manager_ID !== 'string') throw 'I aint got nobody!';
        if (typeof payDate !== "string") throw 'I aint got nobody!';
        if (typeof job_title !== 'string') throw 'I aint got nobody!';
        const employeeCollection = await employee();

        // const userThatPosted = await users.getUserById(posterId);

        const newEmployee = {
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            total_hours: total_hours,
            basic_salary: basic_salary,
            total_salary: total_hours * basic_salary,
            paidFlag: "Not Paid",
            manager_ID: manager_ID,
            payDate: payDate,
            job_title: job_title
        };

        const newInsertInformation = await employeeCollection.insertOne(newEmployee);
        const newId = newInsertInformation.insertedId;
        console.log("reached here1")
        await manager.addEmptoManager(manager_ID, newId, username, newEmployee.total_salary, newEmployee.paidFlag);
        console.log("reached here2")

        const newEmployeeDetails = await this.getEmployeeById(newId);
        return newEmployeeDetails;
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
            username: renamecontent.username,
            email: renamecontent.email,
            total_hours: renamecontent.total_hours,
            basic_salary: renamecontent.basic_salary,
            manager_ID: renamecontent.manager_ID,
            payDate: renamecontent.payDate,
            job_title: renamecontent.job_title
  
        };
        const updatedInfo = await employeeCollection.replaceOne({ _id: ObjectId(id) }, updatedData);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update dog successfully";
        }

        const upID = updatedInfo.updatedID;
        const updatedDat = await this.getEmployeeById(id.toString());
        return updatedDat;

    },

    async updateHours(username, total_hour_new, start_date, end_date) {
        if (!username) throw "You must provide an id to search for";
        // if (!id.match("/^[0-9a-fA-f]{24}$")) throw "Please provide proper 12 bytes length of the id";
        if (username.length === 0) throw "Please provide proper legth of the id";
        if (typeof username !== 'string') throw "Please provide proper id"
        if (typeof username === 'undefined') throw "Please provide proper type of id"
        const updated = await this.getEmployeeByUser(username);
        const employeeCollection = await employee();
        total_hours=parseInt(updated.total_hours) + parseInt(total_hour_new)
        console.log(total_hours)
        total_hours=total_hours.toString()
        total_salary=parseInt((updated.basic_salary) * (parseInt(updated.total_hours) + parseInt(total_hour_new)))
        total_salary=total_salary.toString()
        const updatedHours = {
            firstName: updated.firstName,
            lastName: updated.lastName,
            username: updated.username,
            email: updated.email,
            total_hours: total_hours,
            basic_salary: updated.basic_salary,
            total_salary: total_salary,
            paidFlag: updated.paidFlag,
            manager_ID: updated.manager_ID,
            payDate: updated.payDate,
            job_title: updated.job_title,

        };
        const updatedInfo = await employeeCollection.replaceOne({ username: username }, updatedHours);
        if (updatedInfo.modifiedCount === 0) {
            throw "could not update dog successfully";
        }


        //adding transaction
        const transactionCollection = await transaction();

        var today = new Date();
        var date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        const newTransaction = {
            by: updated.username,
            byPosition: "Employee",
            to: updated.manager_ID,
            toPosition: "Manager",
            typeOfTransaction: "Adding Hours",
            start_date: start_date,
            end_date: end_date,
            amount: "not required",
            hours: total_hour_new,
            timestamp: dateTime
        };

        const newTransactionInformation = await transactionCollection.insertOne(newTransaction);

        //adding transaction


        const managerCollection = await managerCollect();
        const search = await managerCollection.findOne({ user_login_id: updated.manager_ID });
        if (search === null) throw 'cannnnnnnooot be null. dungoofed'

        let i = 0;
        newSal = (updated.basic_salary * (updated.total_hours + total_hour_new))
        for (i; i < search.employees.length; i++) {
            if (search.employees[i].id.toString() == updated._id.toString()) {
                search.employees[i].Name = updated.firstName;
                search.employees[i].total_salary = newSal
                search.employees[i].paidFlag = updated.paidFlag
            }
        }
        const something = await managerCollection.updateOne({ user_login_id: updated.manager_ID }, { $set: { employees: search.employees } })
        return this.getEmployeeById(updated._id);;

    },

};

module.exports = exportedMethods;