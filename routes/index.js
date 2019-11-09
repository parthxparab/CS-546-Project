const employeeRoutes = require("./employee");
const managerRoutes=require("./manager");


const constructorMethod = app => {
  app.use("/employee", employeeRoutes);
  app.use("/manager", managerRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({error: "invalid url please check url"});
  });
}


module.exports = constructorMethod;