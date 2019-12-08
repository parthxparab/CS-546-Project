const employeeRoutes = require("./employee");
const managerRoutes=require("./manager");
const newemployeeRoutes=require("./newemployee")
const loginRoutes=require("./users")

const constructorMethod = app => {
  app.use("/",loginRoutes)
  app.use("/employee", employeeRoutes);
  app.use("/manager", managerRoutes);
  app.use("/newemployee",newemployeeRoutes)

  app.use("*", (req, res) => {
    res.status(404).json({error: "invalid url please check url"});
  });
}


module.exports = constructorMethod;