const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");


indexRouter.get("/", indexController.getIndex);
indexRouter.post("/", indexController.createRow);

module.exports = {
    indexRouter
};