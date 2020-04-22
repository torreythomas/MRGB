const express = require("express");
const router = express.Router();

const charactersController = require("../controllers/characters");


router.get("/", charactersController.index);

router.post("/", charactersController.create);

router.get("/:name", charactersController.show);

router.put("/:name", charactersController.update);

router.delete("/:name", charactersController.destroy);


module.exports = router;