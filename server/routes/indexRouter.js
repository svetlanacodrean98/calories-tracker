const { Router } = require("express");
const indexRouter = Router();
const indexController = require("../controllers/indexController");


indexRouter.post("/meal", indexController.createRow);
indexRouter.get("/meals", indexController.getMeals);

module.exports = {
    indexRouter
};