const manager = require("./database-utils/manager");
const emp = require("./database-utils/employee");
//const tran = require("./database-utils/Transaction")

const connection = require('./database-utils/mongoConnection');

async function main() {
    // var today = new Date();
    // var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    // var dateTime = date+' '+time;
    // console.log(dateTime)
    // try {
    //     var pxp = await manager.addManager("Parth", "Parab", "parthsai@gmail.com", 1000, "lemon123", "123");
    //     console.log(pxp);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var ngt = await manager.addManager("Neil", "Gupte", "neilgupte@gmail.com", 1000, "ngt", "123");
    //     console.log(ngt);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var dkp = await manager.addManager("Dharika", "Kapil", "dharikakapil@gmail.com", 1000, "dkp", "123");
    //     console.log(dkp);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    //  try {
    //     var val = await manager.getManagerByName("Parth")
    //     console.log(val);
    //     }
    //     catch(e)
    //     {
    //         console.log("Error occured: ")
    //         console.log(e);

    //     }

    // try {
    //     var manas = await emp.addEmployee("Manas", "Kulkarni", "manasmsk", "msk@gmail.com", 1, 5, "pxp", "12/9/2019", "Assistant");
    //     console.log(manas);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var sagar = await emp.addEmployee("sagar", "tanna", "sagarst", "sgt@gmail.com", 1, 5, "ngt", "12/12/2019", "Executive");
    //     console.log(sagar);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var prathamesh = await emp.addEmployee("Prathamesh", "Shelke", "prathu", "psh@gmail.com", 1, 5, "ngt", "10/20/2019", "Sales");
    //     console.log(prathamesh);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // // <<<<<<< HEAD
    // try {
    //     var manas = await emp.updateHours("manasmsk", 5, "12/10/2019", "12/11/2019");
    //     console.log(manas);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var sagar = await emp.updateHours("sagarst", 5, "12/10/2019", "12/11/2019");
    //     console.log(sagar);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var prathamesh = await emp.updateHours("prathu", 5, "12/10/2019", "12/11/2019");
    //     console.log(manas);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }

    // try {
    //     var pay = await manager.isPaid("5dee9377241a37626f13cb63");
    //     console.log(pay);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }
    // =======
    //      try {
    //         var dharika = await emp.updateHours("5de2e5a7f7fd930507fc7645", 1);
    //         console.log(dharika);
    //         }
    //         catch(e)
    //         {
    //             console.log("Error occured: ")
    //             console.log(e);

    //          }
    // >>>>>>> 7d402e06be613d85ebba5209879511f9d00e7b8f

    //  try {
    //     var pay = await manager.isPaid("5de2e5a7f7fd930507fc7645");
    //     console.log(pay);
    //     }
    //     catch(e)
    //     {
    //         console.log("Error occured: ")
    //         console.log(e);

    //      }

    // try {
    //     var temp = await emp.getEmployeeByPay("pxp");
    //     console.log(temp);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }



    // try {
    //     var dharika = await manager.getManagerById("5de210f47cdd6e1043578764");
    //     console.log(dharika);
    // } catch (e) {
    //     console.log("Error occured: ")
    //     console.log(e);

    // }
    // <<<<<<< HEAD
    // // <<<<<<< HEAD
    //     //  try {
    //     //     var manas = await emp.updateHours("manasmsk", 5, "12/10/2019", "12/11/2019");
    //     //     console.log(manas);
    //     //     }
    //     //     catch(e)
    //     //     {
    //     //         console.log("Error occured: ")
    //     //         console.log(e);

    //     //      }
    // =======
    //     // // <<<<<<< HEAD
    //     // try {
    //     //     var manas = await emp.updateHours("manasmsk", 5, "12/10/2019", "12/11/2019");
    //     //     console.log(manas);
    //     // } catch (e) {
    //     //     console.log("Error occured: ")
    //     //     console.log(e);

    //     // }
    // >>>>>>> b370dc486a36d5b43cae130dbfeb85160cd64cfb

    //     // try {
    //     //     var sagar = await emp.updateHours("sagarst", 5, "12/10/2019", "12/11/2019");
    //     //     console.log(sagar);
    // <<<<<<< HEAD
    //     //     }
    //     //     catch(e)
    //     //     {
    //     //         console.log("Error occured: ")
    //     //         console.log(e);

    //     //     }

    //     // try {
    //     //     var prathamesh = await emp.updateHours("prathu", 5, "12/10/2019", "12/11/2019");
    //     //     console.log(manas);
    //     //     }
    //     //     catch(e)
    //     //     {
    //     //         console.log("Error occured: ")
    //     //         console.log(e);

    //     //     }
    // =======
    //     // } catch (e) {
    //     //     console.log("Error occured: ")
    //     //     console.log(e);

    //     // }

    //     // try {
    //     //     var prathamesh = await emp.updateHours("prathu", 5, "12/10/2019", "12/11/2019");
    //     //     console.log(manas);
    //     // } catch (e) {
    //     //     console.log("Error occured: ")
    //     //     console.log(e);

    //     // }
    // >>>>>>> b370dc486a36d5b43cae130dbfeb85160cd64cfb

    //     // try {
    //     //     var pay = await manager.isPaid("5dee9377241a37626f13cb63");
    //     //     console.log(pay);
    //     // } catch (e) {
    //     //     console.log("Error occured: ")
    //     //     console.log(e);

    //     // }
    //     // =======
    //     //      try {
    //     //         var dharika = await emp.updateHours("5de2e5a7f7fd930507fc7645", 1);
    //     //         console.log(dharika);
    //     //         }
    //     //         catch(e)
    //     //         {
    //     //             console.log("Error occured: ")
    //     //             console.log(e);

    //     //          }
    //     // >>>>>>> 7d402e06be613d85ebba5209879511f9d00e7b8f

    //     //  try {
    //     //     var pay = await manager.isPaid("5de2e5a7f7fd930507fc7645");
    //     //     console.log(pay);
    //     //     }
    //     //     catch(e)
    //     //     {
    //     //         console.log("Error occured: ")
    //     //         console.log(e);

    //     //      }

    //     try {
    //         var temp = await emp.getEmployeeByPay("pxp");
    //         console.log(temp);
    //     } catch (e) {
    //         console.log("Error occured: ")
    //         console.log(e);

    //     }



    //     // try {
    //     //     var dharika = await manager.getManagerById("5de210f47cdd6e1043578764");
    //     //     console.log(dharika);
    //     // } catch (e) {
    //     //     console.log("Error occured: ")
    //     //     console.log(e);

    //     // }




    try {
        var dharika = await emp.updateEmployee('prathu', 'Prath', 'Shelke', 'psh@gmail.com', 100, 10, 1000, 'ngt', '12/12/2019', 'Software developer');
        console.log(dharika);
    } catch (e) {
        console.log("Error occured: ")
        console.log(e);

    }

    const db = await connection();
    await db.serverConfig.close();

}
}
main();