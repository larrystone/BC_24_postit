"use strict";

module.exports = function (req, res) {
  // fetch the groupId from req
  var groupId = req.params.groupId * 1;

  res.status(200).json({ message: "fetching all messages from Group with id: " + groupId });
};
//# sourceMappingURL=getmessages.js.map