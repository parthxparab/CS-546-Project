const mongoCollections = require('./mongoCollections');
const help = mongoCollections.help;
const ObjectId = require('mongodb').ObjectID;

async function addDataToHelp(employeeID, managerID, issue){
    let resolved = false
    let helpObj = {
        employeeID: employeeID,
        managerID: managerID,
        issue: issue,
        resolved: resolved
    }

    let helpCollection = await help()

    let result = await helpCollection.insertOne(helpObj)




}

async function getHelpData(user_login_id){

    let helpCollection = await help()
   return await helpCollection.find({ "managerID" : { $eq: user_login_id }, "resolved" : {$eq: false} } ).toArray();





}

async function getManagerByTicketID(id){
    if (typeof id == "string"){
        id = ObjectId.createFromHexString(id)

    }


    const helpCollection = await help();

    const managerResult = await helpCollection.findOne({ _id: id })

    return managerResult


}

async function markResolved(id){
    if (typeof id == "string"){
        id = ObjectId.createFromHexString(id)

    }
    let data = await this.getManagerByTicketID(id)
    let helpObj = {
        employeeID: data.employeeID,
        managerID:  data.managerID,
        issue: data.issue,
        resolved: true
    }
    const helpCollection = await help();
    const result = await helpCollection.replaceOne({ _id: id }, {$set: helpObj});
    const result2 = await helpCollection.findOne({_id: id});


}

module.exports = {addDataToHelp, getHelpData, getManagerByTicketID, markResolved}