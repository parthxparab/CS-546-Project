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

    console.log(result)



}

module.exports = {addDataToHelp}