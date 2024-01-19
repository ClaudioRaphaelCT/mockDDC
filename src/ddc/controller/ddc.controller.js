const { responseOK, responseNOK } = require("../utils/responses");

exports.postDDC = (req, res) => {
const {numContrato} = req.body
 
  if (numContrato == 1000000016) {
    res.status(400).json(responseNOK);
  }
  res.status(200).json(responseOK);
};
