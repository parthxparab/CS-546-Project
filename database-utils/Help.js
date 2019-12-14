const mongoCollections = require('./mongoCollections');
const help = mongoCollections.help;

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

module.exports = {addDataToHelp, getHelpData}