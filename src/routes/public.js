const express = require("express");
const router = express.Router();

const {register} = require(
    "../controllers/transectionController"
)

router.post("/create", register );

module.exports = router;