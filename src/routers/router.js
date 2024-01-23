const express = require("express");
const router = express.Router();
const { postDDC } = require("../ddc/controller/ddc.controller");
const {postIRPF } = require("../ddc/controller/irpf.controller")


router.post('/api/v1/processar-ddc', postDDC)
router.post('/api/v1/processar-irpf', postIRPF)

module.exports = router;