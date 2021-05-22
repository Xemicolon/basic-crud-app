const { Router } = require("express");
const router = Router();
const userRoute = require("./routes/user");
const homeRoute = require("./routes/home");

router.use("/", userRoute);
router.use("/", homeRoute);

module.exports = router;
