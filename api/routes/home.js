const { Router } = require("express");
const route = Router();
const { homepage } = require("../../controllers/homepage");

route.get("/welcome", homepage);

module.exports = route;
