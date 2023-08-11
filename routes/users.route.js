const { getUsers, saveUsers } = require("../controllers/users.controller");

const router = require("express").Router();

router.get("/users", getUsers);

router.post("/users", saveUsers);

module.exports = router;
