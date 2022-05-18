const express = require("express");
const usersCon = require("./controllers/users");
const router = express.Router();

router.use(express.json()) // for parsing application/json
router.use(express.urlencoded({
  extended: true
})) // for parsing application/x-www-form-urlencoded


router.route("/users")
.get(usersCon.index.get)
.post(usersCon.index.post)
.patch(usersCon.index.patch);

router.delete("/users/:id", usersCon.index.delete);

router.put("/users/:id", usersCon.index.put);

router.get("/users/:id", usersCon.index.getById);


module.exports = router;