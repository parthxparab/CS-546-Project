const dbConnection = require('./mongoConnection');
const data = require('./Employee.js');
const man = require('./Manager')


async function main() {
    //const db = await dbConnection();

    // await db.dropDatabase();

    // const content = await data.getEmployeeById("5dc3500c6687730a45d74a51");
    // console.log(content);
    //const content = await data.calculatePayroll("5dc368f8de3c270fefc2b7bb");
    //console.log(content);

    // const phil = await data.addEmployee('Dharika', 'Kapil', "dk@gmail.com", 45, "millenium", 13, "dharika kapil", "2019-10-1", "Software developer", "5512639010", "Zack123", "Zackishell");
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