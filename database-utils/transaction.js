const mongoCollections = require('./mongoCollections');
const transaction = mongoCollections.transaction;

const exportedMethods = {

    async getTransactionByUsername(username) {
       var arr = []
       if (!username) throw "You must provide an id to search for";
       if (username.length == 0) throw "Please provide proper length of the id";
       if (typeof username === 'undefined' || username == null) throw "Please provide proper type of id"

        const transactionCollection = await transaction();
        const transData = await transactionCollection.find({}).toArray();;
        if (transData === null || transData == undefined) throw "No Transaction found of following id";
        var count = 0
        for (let i = transData.length-1; i >= 0; i--)
        {
            if(transData[i]["by"] == username)
            {
                let x = (transData[i]["by"]+" added "+ transData[i]["hours"]+" hours at "+transData[i]["timestamp"]).toString();
                arr.push(x)}
            else(count = count + 1)
        }

        if(count == transData.length)
        {
            return("No transactions reported yet")
        }
        else
        {
            return arr;
        }

    }
};

module.exports = exportedMethods;
// const connection = require('./mongoConnection');
// async function main() {

//     try {
//         var pxp = await getTransactionByUsername("manasmsk");
//         console.log(pxp);
//     } catch (e) {
//         console.log("Error occured: ")
//         console.log(e);

//     }
//     const db = await connection();
//     await db.serverConfig.close();

// }

// main();