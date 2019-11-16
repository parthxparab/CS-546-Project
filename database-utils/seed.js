const dbConnection = require('./mongoConnection');
const data = require('./Employee.js');
const man = require('./Manager')
const sala = require('./Salary');


async function main() {
    //const db = await dbConnection();

    // await db.dropDatabase();

    // const content = await data.getEmployeeById("Dharika");
    // console.log(content);
    const content = await data.calculatePayroll("Dharika", "Kapil");
    console.log(content);

    // const phil = await data.addEmployee('Dharika', 'Kapil', "dk@gmail.com", 45, "millenium", 13, "dharika kapil", "2019-10-1", "Software developer", "5512639010", "Zack123", "Zackishell");
    // const id = phil._id;

    // const phil = await sala.addSalary('Dharika', 'Kapil', 5000, 'neilfdbdbsgfdbs');
    // const id = phil._id;

    // const phil = await data.updateHours("5dc368f8de3c270fefc2b7bb", 40);
    // const id = phil._id;

    // const phil = await data.renameEmployee("5dc368f8de3c270fefc2b7bb", "DHARIKA", "KAPIL");
    // const id = phil._id;

    // const phil = await man.renameManager("5dc36b3cc915b310b8aa2787", "DHARIKA", "KAPIL");
    // const id = phil._id;


    // const philgh = await man.addManager('Neel', 'Barresi', "neel@gmail.com", "millenium", 40, "Zack123", "Zackishell", ['Zack', 'Dharika', 'Parth']);
    // const id = philgh._id;

    // await posts.addPost('Hello, class!', 'Today we are creating a blog!', [], id);

    // await posts.addPost(
    //     'Using the seed',
    //     'We use the seed to have some initial data so we can just focus on servers this week', [],
    //     id
    // );
    // await posts.addPost('Using routes', 'The purpose of today is to simply look at some GET routes', [], id);

    console.log('Done seeding database');

    //await db.serverConfig.close();
}

main()
    // .catch((error) => {
    //     console.error(error);
    //     return dbConnection().then((db) => {
    //         return db.serverConfig.close();
    //     });
    // });