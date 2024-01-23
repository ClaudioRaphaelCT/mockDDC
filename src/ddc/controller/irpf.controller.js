const { responseOK, responseNOK } = require("../utils/responses");

exports.postIRPF = (req, res) => {
const {numCpf} = req.body
 
  if (numCpf == "20138704007") {
    res.status(400).json(responseNOK);
  }
  res.status(200).json(responseOK);
};
