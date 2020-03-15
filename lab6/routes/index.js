const bands = require("./bands");
const albums = require("./albums");

const constructorMethod = app => {
  app.use("/bands", bands);
  app.use("/albums", albums);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;