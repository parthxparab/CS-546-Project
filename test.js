const manager = require("./database-utils/manager");
const emp = require("./database-utils/employee");

const connection = require('./database-utils/mongoConnection');

async function main() {
    // try {
    // var sasha = await manager.addManager("Parth", "Parab", "parthsai@gmail.com", 1000, "pxp", "123");
    // console.log(sasha);
    // }
    // catch(e)
    // {
    //     console.log("Error occured: ")
    //     console.log(e);

    //  }

    //  try {
    //     var val = await manager.getManagerByName("Parth")
    //     console.log(val);
    //     }
    //     catch(e)
    //     {
    //         console.log("Error occured: ")
    //         console.log(e);
    
    //     }

    //      try {
    // var dharika = await emp.addEmployee("n", "g", "ng@gmail.com", 4, 4, "Parth", "x", "x", "x", "x");
    // console.log(dharika);
    // }
    // catch(e)
    // {
    //     console.log("Error occured: ")
    //     console.log(e);

    //  }


    //  try {
    //     var dharika = await emp.updateHours("5de2e5a7f7fd930507fc7645", 1);
    //     console.log(dharika);
    //     }
    //     catch(e)
    //     {
    //         console.log("Error occured: ")
    //         console.log(e);
    
    //      }

     try {
        var pay = await manager.isPaid("5de2e5a7f7fd930507fc7645");
        console.log(pay);
        }
        catch(e)
        {
            console.log("Error occured: ")
            console.log(e);
    
         }


     const db = await connection();
     await db.serverConfig.close();

    }

    main();