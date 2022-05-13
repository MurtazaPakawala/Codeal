const express = require("express");

const router = express.Router();
console.log("router okay!");

router.use("/users", require("./users"));

module.exports = router;
