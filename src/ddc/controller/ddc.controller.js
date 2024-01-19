const { requestDDC } = require("../utils/requests");
const { responseOK, responseNOK } = require("../utils/responses");

exports.postDDC = (req, res) => {
const {numContrato} = req.body
 
  if (numContrato < 9999999999) {
    res.status(200).json(responseOK);
  }
  res.status(400).json(responseNOK);
};
