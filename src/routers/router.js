const express = require("express");
const router = express.Router();
const { postDDC } = require("../ddc/controller/ddc.controller");

router.post('/api/v1/processar-ddc', postDDC)

module.exports = router;