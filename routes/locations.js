const express = require("express");
const router = express.Router();

const locationsController = require("../controllers/locations");


router.get("/", locationsController.index);

router.post("/", locationsController.create);

router.get("/:name", locationsController.show);

router.put("/:name", locationsController.update);

router.delete("/:name", locationsController.destroy);


module.exports = router;